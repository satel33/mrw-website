import { useRouter } from "next/router";
import slugify from "slugify";
import { SearchIcon } from "../../icons/index";

let designTags = [
  {
    type: "design",
    name: "MR Favs",
  },
  {
    type: "design",
    name: "Billow",
  },
  {
    type: "design",
    name: "Palisades",
  },
  {
    type: "design",
    name: "Hex",
  },
  {
    type: "design",
    name: "Origami",
  },
  {
    type: "design",
    name: "Flame",
  },
  {
    type: "design",
    name: "Honey",
  },
  {
    type: "collection",
    name: "Standards",
  },
  {
    type: "specialtie",
    name: "Backlight",
  },
  {
    type: "design",
    name: "Custom",
  },
  {
    type: "design",
    name: "Lake",
  },
  {
    type: "design",
    name: "Reeds",
  },
  {
    type: "design",
    name: "Nazare",
  },
];

let applicationTags = [
  {
    type: "application",
    name: "Atrium",
  },

  {
    type: "application",
    name: "Exterior",
  },
  {
    type: "application",
    name: "Stairs",
  },
  {
    type: "application",
    name: "Backsplash",
  },
  {
    type: "application",
    name: "Door",
  },
  {
    type: "application",
    name: "Bathroom",
  },
  {
    type: "application",
    name: "Kitchen",
  },
  {
    type: "application",
    name: "Water Feature",
  },
  {
    type: "application",
    name: "Shower",
  },
  // {
  //   type: 'application',
  //   name: 'Water Wall',
  // },
  // {
  //   type: 'application',
  //   name: 'Facade',
  // },
];

const MainTags = ({ setFilters, filters, allTags, open, toggleOpen }) => {
  const { asPath, push } = useRouter();

  return (
    <div className='flex relative'>
      <div className='flex relative items-center mx-auto max-w-screen-xl mb-3 overflow-x-auto -mt-6 flex-nowrap scrollbar-thin scrollbar-thumb-primary-80 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full cursor-pointer'>
        {asPath === "/applications"
          ? applicationTags.map((tag) => (
              <button
                key={tag.name}
                className={`p-2 transition duration-100 opacity-75 whitespace-nowrap  ${
                  filters.some((x) => x.name === tag.name) &&
                  "font-medium underline"
                } hover:opacity-100`}
                onClick={() => {
                  if (filters.some((e) => e.name === tag.name)) {
                    return setFilters(() =>
                      [...filters].filter((x) => x.name !== tag.name)
                    );
                  }

                  return setFilters(() => [{ type: tag.type, name: tag.name }]);
                  // let appSlug = slugify(tag.name, { lower: true });
                  // return push(`/applications/${appSlug}`);

                  // return setFilters(() => [
                  //   ...filters.filter(
                  //     (x) =>
                  //       x !== 'Standards' &&
                  //       x !== 'Bathroom' &&
                  //       x !== 'Kitchen' &&
                  //       x !== 'Backlight' &&
                  //       x !== 'Water Feature' &&
                  //       x !== 'Exterior' &&
                  //       x !== 'Custom'
                  //   ),
                  //   tag,
                  // ])
                }}
              >
                {tag.name}
              </button>
            ))
          : designTags.map((tag) => (
              <button
                key={tag.name}
                className={`p-2 transition duration-100 opacity-75 whitespace-nowrap  ${
                  filters.some((x) => x.name === tag.name) &&
                  "font-medium underline"
                } hover:opacity-100`}
                onClick={() => {
                  if (filters.some((e) => e.name === tag.name)) {
                    return setFilters(() =>
                      [...filters].filter((x) => x.name !== tag.name)
                    );
                  }

                  return setFilters(() => [{ type: tag.type, name: tag.name }]);

                  // return setFilters(() => [
                  //   ...filters.filter(
                  //     (x) =>
                  //       x !== 'Standards' &&
                  //       x !== 'Bathroom' &&
                  //       x !== 'Kitchen' &&
                  //       x !== 'Backlight' &&
                  //       x !== 'Water Feature' &&
                  //       x !== 'Exterior' &&
                  //       x !== 'Custom'
                  //   ),
                  //   tag,
                  // ])
                }}
              >
                {tag.name}
              </button>
            ))}
        <button
          className={`hidden sm:flex p-2 mx-1 justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full transition duration-150 ${
            open && "bg-gray-200"
          }`}
          onClick={() => toggleOpen(!open)}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default MainTags;
