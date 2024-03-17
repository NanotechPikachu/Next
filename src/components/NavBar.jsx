'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className="backdrop-blur fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-20">
    <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
    Nanotech Wiki
    </p>
<div className={`fixed top-0 right-0 m-3 p-1 border-2 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleNavBar}
      >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</div>
{/*
      <button
        className={`fixed top-0 right-0 m-4 p-2 border-2 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleNavBar}
      >
        Menu
      </button>
*/}
    </div>
      <div
        className={`fixed z-30 top-0 right-0 w-1/2 h-full bg-gray-100 p-4 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out md:w-1/3`}
      >
        <button
          className="absolute top-0 left-0 m-4 p-2 border-2"
          onClick={toggleNavBar}
        >
          Close
        </button>
        <nav>
          <ul>
            <li className="mt-12">
              <Link href="/">
                <a onClick={toggleNavBar}>Home</a>
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
