import { groq } from "next-sanity";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// Sanity
import { getClient } from "../../lib/sanity.server";
import {
  getAllApplicationTags,
  getAllApplicationDesigns,
  getAllApplicationSearchTags,
} from "../../lib/queries";
// Utils
import formatTags from "../../src/utils/formatTags";
// Hooks
import useSingleTagSearch from "../../src/hooks/useSingleTagSearch";
// Components
const Layout = dynamic(() => import("../../src/components/layout"));
const SEO = dynamic(() => import("../../src/components/seo"));
const MasonryGrid = dynamic(() =>
  import("../../src/components/grids/masonryGrid")
);
const TagSearch = dynamic(() => import("../../src/components/tagSearch/index"));
const CallToActionBlock = dynamic(
  () => import("../../src/components/project/callToActionBlock.js"),
  { ssr: false }
);

import { SectionHeading } from "../../src/components/headings/index";

const ApplicationsPage = ({ data }) => {
  const { filters, setFilters, designs } = useSingleTagSearch(
    data?.pageData ?? [],
    "applications"
  );

  const { query } = useRouter();

  console.log(filters);

  useEffect(() => {
    console.log(query);
    if (query.tag) {
      setFilters([{ type: query?.type, name: query?.tag }]);
    }
  }, []);

  return (
    <Layout>
      <SEO title='Applications' />
      <section className='px-4 mx-auto py-5'>
        <SectionHeading
          title='Applications'
          classes='text-3xl font-light  text-black-100 pb-3 sm:text-4xl'
        />
        <TagSearch
          tags={data?.tags ?? []}
          filters={filters}
          setFilters={setFilters}
          hasMainTags={true}
          hasTextSearch={true}
          // desktopOnly='hidden sm:block'
        />
        <MasonryGrid
          data={!filters.length ? data.page : designs}
          setFilters={setFilters}
        />
      </section>
      <CallToActionBlock />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const query = groq`${getAllApplicationTags}`;
  const data = await getClient(preview).fetch(query);
  const page = data;
  const queryAppDesigns = groq`${getAllApplicationDesigns}`;
  const appData = await getClient(preview).fetch(queryAppDesigns);
  const pageData = formatTags(appData);

  let activeTags = [];

  data.map((app) => {
    let obj = {
      _id: app?._id,
      _type: app?._type,
      name: app?.name,
      slug: { current: app?.slug?.current },
    };

    return activeTags.push(obj);
  });

  return {
    props: {
      preview,
      data: { page, pageData, tags: activeTags },
    },
    revalidate: 60,
  };
}

export default ApplicationsPage;
