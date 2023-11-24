import { useEffect } from "react";
import dynamic from "next/dynamic";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
// Sanity
import { getClient } from "../../lib/sanity.server";
import { getAllDesigns, getAllSearchTags } from "../../lib/queries";
// Utils
import formatTags from "../../src/utils/formatTags";
// Hooks
import useTagSearch from "../../src/hooks/useTagSearch";
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

import { SectionHeading } from "../../src/components/headings/";

const DesignsPage = ({ data }) => {
  const { filters, setFilters, designs } = useTagSearch(data?.page ?? []);
  const { query } = useRouter();

  useEffect(() => {
    if (query.tag) {
      setFilters([{ type: query?.type, name: query?.tag }]);
    }
  }, []);

  return (
    <Layout>
      <SEO title='All Designs' />
      <section className='px-4 mx-auto py-5'>
        <SectionHeading
          title='All Designs'
          classes='text-3xl font-light  text-black-100 pb-3 sm:text-4xl'
        />
        <TagSearch
          tags={data?.tags ?? []}
          filters={filters}
          setFilters={setFilters}
          hasMainTags={true}
          hasTextSearch={true}
        />
        <MasonryGrid data={designs ?? []} />
      </section>
      <CallToActionBlock />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const query = groq`${getAllDesigns}`;
  const data = await getClient(preview).fetch(query);
  const tags = await getClient(preview).fetch(groq`${getAllSearchTags}`);
  const page = formatTags(data);

  let activeTags = [];

  // Goes over projects/designs to store all tags that are actually used
  page.map(({ tags }) => {
    return tags.map((tag) => activeTags.push(tag));
  });

  // Remove all unusued tags
  let filteredTags = tags.filter(({ name }) => {
    return activeTags.some((x) => x.name === name);
  });

  return {
    props: {
      preview,
      data: { page, tags: filteredTags },
    },
    revalidate: 60,
  };
}

export default DesignsPage;
