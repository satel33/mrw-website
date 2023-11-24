import Link from "next/link";
// Components
import Socials from "./socials";

const Copyrights = () => {
  return (
    <div className='border-t px-4'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center flex-col sm:flex-row'>
        <p className='text-xs order-2 pb-4 text-center sm:text-left sm:order-1 sm:pb-0'>
          © 2022 M|R Walls by Mario Romano. All Rights Reserved.{" "}
          <Link href='/privacy-policy'>
            <a className='underline'>Privacy Policy</a>
          </Link>
        </p>
        <Socials />
      </div>
    </div>
  );
};

export default Copyrights;
