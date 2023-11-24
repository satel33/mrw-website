import dynamic from "next/dynamic";
import { groq } from "next-sanity";
// Sanity
import { getClient } from "../../lib/sanity.server";
import { getAllProjects, getAllSearchTags } from "../../lib/queries";
// Utils
import formatTags from "../../src/utils/formatTags";
// Hooks
import useProjectSearch from "../../src/hooks/useProjectSearch";
// Components
const Layout = dynamic(() => import("../../src/components/layout"));
const SEO = dynamic(() => import("../../src/components/seo"));
const MasonryGrid = dynamic(() =>
  import("../../src/components/grids/masonryGrid")
);
const CallToActionBlock = dynamic(
  () => import("../../src/components/project/callToActionBlock.js"),
  { ssr: false }
);
const Sidebar = dynamic(() => import("../../src/components/sidebar"));
const ProjectsImageGallery = dynamic(() =>
  import("../../src/components/projectsGallery")
);
const ProjectSearch = dynamic(() =>
  import("../../src/components/projectSearch")
);
import { SectionHeading } from "../../src/components/headings/index";

const ProjectsPage = ({ data }) => {
  const { project, setProject, designs } = useProjectSearch(data?.page ?? []);

  return (
    <Layout>
      <SEO title='Projects' />
      <section className='mx-auto py-8 grid max-w-screen-2xl gap-10 md:sidebar-main-layout  overflow-hidden'>
        <div className='md:hidden px-4'>
          <SectionHeading
            title='Projects'
            classes='text-3xl font-light pt-6 pb-2 text-black-100'
          />
          <ProjectSearch
            data={data}
            setProject={setProject}
            project={project}
          />
        </div>
        <div className='md:hidden px-4'>
          <MasonryGrid data={designs ?? []} />
        </div>
        <Sidebar data={data} setProject={setProject} project={project} />
        <ProjectsImageGallery
          allData={data?.page ?? []}
          data={designs ?? []}
          project={project}
          setProject={setProject}
        />
      </section>
      <CallToActionBlock />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const query = groq`${getAllProjects}`;
  const data = await getClient(preview).fetch(query);
  const tags = await getClient(preview).fetch(groq`${getAllSearchTags}`);
  const page = formatTags(data, true);

  let activeTags = [];

  // Goes over projects/designs to store all tags that are actually used
  page.map(({ tags }) => {
    return tags.map((tag) => activeTags.push(tag));
  });

  // Remove all unusued tags
  let filteredTags = tags.filter(({ name }) => {
    return activeTags.some((x) => x?.name === name);
  });

  return {
    props: {
      preview,
      data: { page, tags: filteredTags },
    },
    revalidate: 60,
  };
}

export default ProjectsPage;
