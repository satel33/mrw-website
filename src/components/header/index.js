import { useState } from "react";
import dynamic from "next/dynamic";

// Components
const Logo = dynamic(() => import("./logo"));
const Menu = dynamic(() => import("./menu"), { ssr: false });
const MenuButton = dynamic(() => import("./menuButton"), { ssr: false });
// const Socials = dynamic(() => import("./socials"), { ssr: false });

const Header = ({ search, toggleSearch, isHomePage }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <header
      className={`px-4 bg-black-100 w-full z-20 header  ${
        open ? "fixed h-screen" : "h-auto sticky top-0"
      }`}
    >
      <div className='max-w-screen-2xl mx-auto grid grid-cols-1 grid-autoSize-rows h-full lg:h-auto lg:flex items-center flex-wrap justify-between'>
        <div className='flex w-full justify-between items-center lg:w-max'>
          <Logo />
          <MenuButton toggleOpen={toggleOpen} open={open} />
        </div>
        <Menu
          isHomePage={isHomePage}
          toggleOpen={toggleOpen}
          open={open}
          search={search}
          toggleSearch={toggleSearch}
        />
        {/* {open && <Socials open={open} />} */}
      </div>
    </header>
  );
};

export default Header;
