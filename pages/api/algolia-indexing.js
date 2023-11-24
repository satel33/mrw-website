import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { allProjectsAlgolia, allDesignsAlgolia } from "../../lib/queries";
import { MRW_MAIN } from "../../src/utils/algolia";

const handler = async (req, res) => {
  let objects = [];

  const queryProjectsAlgolia = groq`${allProjectsAlgolia}`;
  const queryDesignsAlgolia = groq`${allDesignsAlgolia}`;

  const projectsData = await getClient().fetch(queryProjectsAlgolia);
  const designsData = await getClient().fetch(queryDesignsAlgolia);

  // Sectors
  // Applications
  // Specialities
  // Designs
  // Attributes
  // Collections
  // Colors

  designsData.map((x) => {
    const tags = [];

    if (x.applications) {
      x.applications.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.sectors) {
      x.sectors.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.specialties) {
      x.specialties.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.colors) {
      x.colors.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.designs) {
      x.designs.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.attributes) {
      x.attributes.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.collections) {
      x.collections.map((val) => {
        tags.push(val?.name);
      });
    }

    let obj = {
      objectID: x._id,
      title: x.name,
      slug: x.path ?? x.slug.current,
      image: x.featuredImage,
      tags,
    };

    return objects.push(obj);
  });

  projectsData.map((x) => {
    const tags = [];

    if (x.asset.applications) {
      x.asset.applications.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.asset.sectors) {
      x.asset.sectors.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.asset.specialties) {
      x.asset.specialties.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.asset.designs) {
      x.asset.designs.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.asset.attributes) {
      x.asset.attributes.map((val) => {
        tags.push(val?.name);
      });
    }

    if (x.asset.collections) {
      x.asset.collections.map((val) => {
        tags.push(val?.name);
      });
    }

    let obj = {
      objectID: x._id,
      title: x.title ?? x.asset.name,
      slug: x.asset.path ?? "/",
      image: x.asset.featuredImage,
      tags,
    };

    return objects.push(obj);
  });

  MRW_MAIN.saveObjects(objects)
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });

  return res.status(200).json({ msg: "ok" });
};

export default handler;
