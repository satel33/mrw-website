import { useState, useEffect } from "react";

const useSingleTagSearch = (data, category) => {
  const [filters, setFilters] = useState([]);
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    if (category && filters.length) {
      return setDesigns(() => {
        return data.filter((page) => {
          const apps = page?.applications?.map((app) => app?.name);

          return filters.every((tag) => {
            return apps.includes(tag?.name);
          });
        });
      });
    } else if (filters.length) {
      setDesigns(() => {
        return data.filter((page) => {
          return filters.every((tag) => {
            return page?.name === tag?.name;
          });
        });
      });
    } else {
      setDesigns([
        ...data.filter((x) => {
          return !x?.applications?.some((y) => y.name === "Swatch");
        }),
      ]);
    }
  }, [filters]);

  return {
    filters,
    setFilters,
    designs,
    setDesigns,
  };
};

export default useSingleTagSearch;
