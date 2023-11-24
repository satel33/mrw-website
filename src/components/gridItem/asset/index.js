import Fade from "react-reveal/Fade";

// Components
import Img from "./img";
// import Content from './content'

const Asset = ({ asset, setFilters }) => {
  return (
    <Fade>
      <div className='w-full flex flex-col grid-cols-1 gap-2 mb-6'>
        <Img data={asset} setFilters={setFilters} />
        {/* <Content data={asset} /> */}
      </div>
    </Fade>
  );
};

export default Asset;
