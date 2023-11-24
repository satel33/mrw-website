import Select from "react-select";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import slugify from "slugify";

const customStyles = {
  multiValueLabel: (provided, state) => {
    return {
      ...provided,
      color: "#1E1B18",
      paddingRight: 6,
      fontSize: 14,
      fontWeight: 500,
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
    };
  },
  clearIndicator: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
    };
  },
};

let filterAppTags = [
  "Atrium",
  "Exterior",
  "Stairs",
  "Backsplash",
  "Door",
  "Bathroom",
  "Kitchen",
  "Water Feature",
  "Shower",
];

let filterDesignTags = [
  "MR Favs",
  "Billow",
  "Palisades",
  "Hex",
  "Origami",
  "Flame",
  "Honey",
  "Standards",
  "Backlight",
  "Custom",
  "Lake",
  "Reeds",
  "Nazare",
];

const CategoryWithTextSearch = ({ tags, setFilters, filters }) => {
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const { asPath, push } = useRouter();

  useEffect(() => {
    let applications = [];
    let withoutMainApplications = [];
    let withoutMainDesigns = [];
    let attributes = [];
    let specialties = [];
    let designs = [];
    let sectors = [];
    let collections = [];

    tags.map((tag) => {
      let obj = {
        value: tag.name,
        label: tag.name,
        type: tag._type,
      };

      if (asPath === "/applications" && tag._type === "application") {
        return applications.push(obj);
      } else if (asPath === "/designs" && tag._type === "design") {
        return designs.push(obj);
      } else if (asPath === "/designs" && tag._type === "attribute") {
        return attributes.push(obj);
      } else {
        return console.log("No tags here");
      }

      // if (tag._type === "application") {

      //   return;
      // } else if (tag._type === "sector") {
      //   // return sectors.push(obj)
      //   return;
      // } else if (tag._type === "specialtie") {
      //   // return specialties.push(obj)
      //   return;
      // } else if (tag._type === "design") {

      // } else if (tag._type === "collection") {
      //   // return collections.push(obj)
      //   return;
      // }
    });

    if (asPath === "/applications") {
      withoutMainApplications = applications.filter((val) => {
        return !filterAppTags.includes(val.label);
      });
    }

    if (asPath === "/designs") {
      withoutMainDesigns = designs.filter((val) => {
        return !filterDesignTags.includes(val.label);
      });
    }

    setOptions([
      { label: "Applications", options: withoutMainApplications },
      { label: "Attributes", options: attributes },
      // { label: 'Collections', options: collections },
      { label: "Designs", options: withoutMainDesigns },
      // { label: 'Specialties', options: specialties },
      // { label: 'Sectors', options: sectors },
    ]);
  }, []);

  useEffect(() => {
    let vals = filters.map((val) => {
      let obj = {
        label: val.name,
        value: val.name,
      };
      return obj;
    });
    setValues(vals);
  }, [filters]);

  const handleChange = (e) => {
    // if (asPath === "/applications") {
    //   let appSlug = slugify(e[0].value, { lower: true });
    //   return push(`/applications/${appSlug}`);
    // }

    // Should NOT handle multiple values

    let values = e.map((val) => {
      let obj = {
        name: val.value,
        type: val.type,
      };
      return obj;
    });

    if (e.length === 2) {
      return setFilters([{ name: e[1].value, type: e[1].type }]);
    } else if (e.length === 1) {
      return setFilters([{ name: e[0].value, type: e[0].type }]);
    } else {
      return setFilters(values);
    }
  };

  return (
    <Select
      options={options}
      isMulti={true}
      placeholder='Search by...'
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,

        colors: {
          ...theme.colors,
          primary25: "#d8e9f5",
          primary: "#519dd1",
        },
      })}
      value={values}
      onChange={handleChange}
    />
  );
};

export default CategoryWithTextSearch;
