import Link from "next/link";

// Context
import { useContactModal } from "../../context/contactModalContext";
// Assets
import { SearchIcon } from "../../icons/index";
// Components
import Dropdown from "./dropdown";

const Menu = ({ open, search, toggleSearch, toggleOpen, isHomePage }) => {
  const { toggleModal } = useContactModal();

  return (
    <div
      className={`${
        open ? "flex lg:flex" : "hidden lg:flex"
      } flex-col flex-basis-100 items-center lg:flex-basis-auto lg:flex-row`}
    >
      <div
        className={`flex items-center flex-col transition duration-200 lg:flex-row`}
      >
        <Link href='/applications' prefetch={false}>
          <a className='py-3 lg:p-4  text-white-100 text-2xl font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
            Applications
          </a>
        </Link>
        <Link href='/designs' prefetch={false}>
          <a className='py-3 lg:p-4 text-white-100 text-2xl font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
            Designs
          </a>
        </Link>
        <Link href='/specialties' prefetch={false}>
          <a className='py-3 lg:p-4 text-white-100 text-2xl font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
            Specialties
          </a>
        </Link>
        <Link href='/projects' prefetch={false}>
          <a className='py-3 lg:p-4 text-white-100 text-2xl font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
            Projects
          </a>
        </Link>
        <Dropdown
          label='How it Works'
          items={[
            { label: "How it Works", url: "/how-it-works" },
            { label: "How to Order", url: "/order" },
            { label: "Videos", url: "/videos" },
          ]}
        />
        <Dropdown
          label='Resources'
          items={[
            { label: "Brochure", url: "/brochure" },
            { label: "FAQ's", url: "/faq" },
            { label: "Specifications", url: "/specifications" },
            { label: "Installation Guide", url: "/install-guide" },
          ]}
        />
        <button
          onClick={() => toggleModal(true)}
          className='py-3 lg:p-4 text-white-100 text-2xl font-light lg:text-base'
        >
          Contact
        </button>
      </div>
      <button
        className='py-3 lg:p-4'
        onClick={() => {
          if (open) {
            toggleOpen(!open);
          }
          return toggleSearch(!search);
        }}
      >
        <SearchIcon size='h-7 w-7 text-white-100' />
      </button>
    </div>
  );
};

export default Menu;
