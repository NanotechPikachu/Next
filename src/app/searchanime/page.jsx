import Code from '../../components/Code.js';
import { NextCard, PrevCard } from '../../components/PageCards.js';
import { SyntaxHighlighter as CodeBlock, style } from '../../components/CodeBlock.js';
import Copy from '../../components/Copy.js';
import TitleNavBar from '../../components/TitleNavBar.js';
import { Note, Warning } from '../../components/Boxes.jsx';
import Link from 'next/link';

export default function GetAnime() {
  const a = `const { getAnime } = require(\'anichu.db\');

( async () => {
  const res = await getAnime(\'sword art online\');
  console.log(res);
})();`;

  const b = `const anidb = require(\'anichu.db\');

( async () => {
  const res = await anidb.anime.get(\'sword art online \');
  console.log(res);
})();`;

  return (
    <div>
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-black">searchAnime()</h1>
    <hr />
    <p className="ml-5 mr-5 mt-4 text-black mb-4">
    This function is used to search for similar animes using its title(anime name).
    </p>
    <hr />
    <h3 className="ml-4 mr-4 mt-6 text-xl md:text-2xl text-black font-bold">Parameters</h3>
    <ul className="mt-4 ml-8 list-disc mr-8 text-lg text-black">
    <li key="anName"><b> animeName </b></li>
    </ul>
    <p className="ml-4 mr-4 mt-6 text-black">This parameter is to give the anime name to search for in DB.</p>
    <ul className="mt-4 ml-8 list-disc mr-8 text-lg text-black">
    <li key="ratio"><b> ratio </b></li>
    </ul>
    <p className="ml-4 mr-4 mt-6 text-black">This parameter specifies the similarity of search to result. The values range from 0.1 to 1. If inputted 1, it means 100% similarity. (Default 0.4)</p>
    </div>
  )
}