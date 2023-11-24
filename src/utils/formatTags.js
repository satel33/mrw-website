const formatTags = (data, isProject) => {
  if (isProject) {
    return data.map((obj) => {
      let tags = [];

      let applications = obj?.asset?.applications?.map((app) =>
        tags.push({ type: app._type, name: app.name })
      );
      let designs = obj?.asset?.designs?.map((design) =>
        tags.push({ type: design._type, name: design.name })
      );
      let specialties = obj?.asset?.specialties?.map((specialtie) =>
        tags.push({ type: specialtie._type, name: specialtie.name })
      );

      let sectors = obj?.asset?.sectors?.map((sector) =>
        tags.push({ type: sector._type, name: sector.name })
      );

      let collections = obj?.asset?.collections?.map((collection) =>
        tags.push({ type: "collection", name: collection })
      );

      // if (obj?.asset?.sector?.name) {
      //   tags.push({
      //     type: obj?.asset?.sector?._type,
      //     name: obj?.asset?.sector?.name,
      //   })
      // }

      let newObj = {
        ...obj,
        tags,
      };

      return newObj;
    });
  } else {
    return data.map((obj) => {
      let tags = [];

      let applications = obj?.applications?.map((app) =>
        tags.push({ type: app._type, name: app.name })
      );
      let designs = obj?.designs?.map((design) =>
        tags.push({ type: design._type, name: design.name })
      );
      let specialties = obj?.specialties?.map((specialtie) =>
        tags.push({ type: specialtie._type, name: specialtie.name })
      );

      let attributes = obj?.asset?.attributes?.map((attribute) => {
        tags.push({ type: attribute._type, name: attribute.name });
      });

      let sectors = obj?.sectors?.map((sector) =>
        tags.push({ type: sector._type, name: sector.name })
      );

      let collections = obj?.collections?.map((collection) =>
        tags.push({ type: "collection", name: collection.name })
      );

      // if (obj?.sector?.name) {
      //   tags.push({ type: obj?.sector?._type, name: obj?.sector?.name })
      // }

      let newObj = {
        ...obj,
        tags,
      };

      return newObj;
    });
  }
};

export default formatTags;
