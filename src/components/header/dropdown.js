import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ label, items }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <div
      className='relative cursor-default'
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      onClick={() => toggleOpen(!open)}
    >
      <div className='py-3 lg:p-4 text-white-100 text-2xl font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
        {label}
      </div>
      {open && (
        <div className='lg:absolute top-[60px] border-t border-gray-500 bg-black-100  w-full lg:w-56'>
          {items?.map(({ label, url }) => {
            return (
              <Link href={url} key={label}>
                <a className='py-2 border-b border-gray-500 block lg:p-3 text-white-100 font-light lg:text-base opacity-60 transition duration-200 ease-in-out hover:opacity-100'>
                  {label}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
