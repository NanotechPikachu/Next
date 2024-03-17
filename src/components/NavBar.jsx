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
      <button
        className={`fixed z-30 top-6 right-0 m-4 p-2 border-2 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleNavBar}
      >
        Menu
      </button>
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-gray-100 p-4 transform ${
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
            <li className="my-4">
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

