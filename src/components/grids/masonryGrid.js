import dynamic from "next/dynamic";
import Masonry from "react-masonry-css";

// Components
const Asset = dynamic(() => import("../gridItem/asset/index.js"), {
  ssr: false,
});

const MasonryGrid = ({ data, setFilters }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='flex -ml-4 w-auto'
      columnClassName='pl-4 bg-clip-padding'
    >
      {data?.map((asset) => (
        <Asset key={asset._id} asset={asset} setFilters={setFilters} />
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
