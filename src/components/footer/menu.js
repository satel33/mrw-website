import Link from "next/link";

// Context
import { useContactModal } from "../../context/contactModalContext";
// Assets
import LogoIcon from "../../../public/mrw-logo.svg";

const Menu = ({ pages }) => {
  const { toggleModal } = useContactModal();
  return (
    <div className='max-w-screen-2xl mx-auto py-6 px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      <div>
        <Link href='/' prefetch={false}>
          <a className='block mb-3'>
            <LogoIcon width={{ maxWidth: "100%" }} />
          </a>
        </Link>
        <p>
          No content of this website may be used by third parties without the
          explicit permission of <strong>Romano Studio LLC.</strong>
        </p>
      </div>
      <div>
        <div className='grid grid-cols-1'>
          <Link href='/designs' prefetch={false}>
            <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
              Designs
            </a>
          </Link>
          <Link href='/projects' prefetch={false}>
            <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
              Projects
            </a>
          </Link>
          <Link href='/partners' prefetch={false}>
            <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
              Partners
            </a>
          </Link>
          <Link href='/clients' prefetch={false}>
            <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
              Clients
            </a>
          </Link>

          {pages.map((page) => {
            if (page?.footerMenuColumn === "left") {
              return (
                <Link href={`/${page?.slug?.current}` ?? "/"} prefetch={false}>
                  <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
                    {page?.title ?? "Missing page title"}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className='grid grid-cols-1'>
          <a
            onClick={() => toggleModal(true)}
            className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100 cursor-pointer'
          >
            Contact
          </a>
          {pages.map((page) => {
            if (page?.footerMenuColumn === "right") {
              return (
                <Link href={`/${page?.slug?.current}` ?? "/"} prefetch={false}>
                  <a className='py-3 opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
                    {page?.title ?? "Missing page title"}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
