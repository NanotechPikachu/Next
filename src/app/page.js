'use client'

import Card from '../components/Card.js';
import TitleNavBar from '../components/TitleNavBar.js';
import GitButton from '../components/GitButton.js';
import { useRouter } from 'next/navigation';

export default function Page() {
  let navigate = useRouter();

  function pageFlip() {
    navigate.push('/start');
  };

  return (
    <div>
      <TitleNavBar />
      <div className="flex flex-col md:pl-10">
        <div className="pt-24 pb-4 text-center md:ml-4">
          <h1 className="font-bold text-zinc-800 hover:text-zinc-700 text-3xl md:text-4xl">AniChu.DB</h1>
          <p className="font-sans text-grey-50 md:text-xl text-center">A JSON DataBase of anime info!</p>
        </div>
        <div className="flex justify-between items-center md:w-auto ml-6 mr-6">
          <button 
          className="bg-blue-500 hover:bg-blue-400 text-white mt-10 rounded-full text-center py-2 px-4"
         onClick={pageFlip} 
          >
          Get started
          </button>
          <GitButton />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-black text-left ml-4">Features</h2>
        <Card title="AniChu.DB" className="mt-5" icon={true}>
          <p> A DataBase of all animes. </p>
        </Card>
        <Card title="Tested" className="mt-4" icon={true}>
          <p> The package&apos;s been tested to make sure that errors in JSON are minimized. </p>
        </Card>
      </div>
    </div>
  )
}