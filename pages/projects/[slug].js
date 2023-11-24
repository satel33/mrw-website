import { groq } from "next-sanity";
import dynamic from "next/dynamic";
// Sanity
import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { allProjectsPaths, getProject } from "../../lib/queries";
// Utils
import filterDataToSingleItem from "../../src/utils/filterDataToSingleItem";
// Components
const Layout = dynamic(() => import("../../src/components/layout"));
const SEO = dynamic(() => import("../../src/components/seo"));
const PageContent = dynamic(() =>
  import("../../src/CMSComponents/pageContent")
);
const Preview = dynamic(() => import("../../src/components/preview/index"));
const Hero = dynamic(() => import("../../src/components/project/hero"));
const FeaturedImage = dynamic(() =>
  import("../../src/components/project/featuredImage")
);
const ProjectFacts = dynamic(() =>
  import("../../src/components/project/projectFacts")
);
const CallToActionBlock = dynamic(
  () => import("../../src/components/project/callToActionBlock.js"),
  { ssr: false }
);

const ProjectPage = ({ data, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return (
    <Layout>
      <SEO title={page?.title ?? page?.asset?.name} />
      <Hero
        title={page?.title ?? page?.asset?.name}
        location={page?.asset?.location ?? null}
        year={page?.year ?? null}
        category='Projects'
        link='/projects'
      />
      <FeaturedImage image={page?.asset?.featuredImage} />
      {!page?.developer &&
      !page?.designer &&
      !page?.builder &&
      !page?.architect &&
      !page?.phase &&
      !page?.client ? null : (
        <ProjectFacts
          client={page?.client ?? null}
          developer={page?.developer ?? null}
          designer={page?.designer ?? null}
          builder={page?.builder ?? null}
          architect={page?.architect ?? null}
          phase={page?.phase ?? null}
        />
      )}
      {preview && <Preview preview={preview} />}
      {page?.pageBuilder && <PageContent data={page?.pageBuilder} />}

      <CallToActionBlock />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allSlugsQuery = groq`${allProjectsPaths}`;

  const pages = await getClient().fetch(allSlugsQuery);

  return {
    paths: pages.map((slug) => {
      return slug.asset.path;
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getProject}`;
  const queryParams = { slug: params.slug };
  const data = await getClient(preview).fetch(query, queryParams);

  // Escape hatch, if our query failed to return data
  if (!data.length) return { notFound: true };

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
    revalidate: 60,
  };
}

export default ProjectPage;
