'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NavLinks({ links, toggleNavBar, current }) {
  let navigate = useRouter();

  function page(link) {
    navigate.push(link);
  };

  return (
    <>
    <nav className="mt-12">
    {
    links.map((x) => (
      <div key={x.title} onClick={() => { page(x.link); toggleNavBar(); }} className={`hover:text-sky-400 hover:border hover:border-sky-400 p-2 ${(x.link == current) ? 'bg-sky-300' : ''}`}>
      {x.title}
      </div>
    ))
    }
    </nav>
    </>
  )
}

export default function NavBar({ current }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
  setIsOpen(!isOpen);
};

  let links = [
{ title: 'Home', link: "/" },
{ title: 'Get Started', link: "/start" },
{ title: 'Result Type', link: "/result" },
{ title: 'GetAnime Function', link: "/getanime" },
{ title: 'SearchAnime Function', link: "/searchanime" }
];

  return (
    <div>
    <div className="backdrop-blur fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-20">
    <p className="font-bold text-left text-sky-600 hover:text-amber-700 text-xl font-sans">
    Nanotech Wiki
    </p>
    <div className={`fixed top-0 right-0 m-3 p-1 border-2 hover:border-sky-400 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleNavBar}>
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
        className={`fixed z-30 top-0 right-0 w-full h-full bg-gray-100 p-4 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out md:w-1/3`}
      >
    <div className="absolute top-0 left-0 m-3 p-1 border-2 hover:border-sky-400"
          onClick={toggleNavBar}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
    </div>
{/*
        <button
          className="absolute top-0 left-0 m-4 p-2 border-2 hover:border-sky-400"
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
           
    </ul>
    </nav>
*/ }
    <NavLinks links={links} toggleNavBar={toggleNavBar} current={current} />
    </div>
    </div>
  );
};



