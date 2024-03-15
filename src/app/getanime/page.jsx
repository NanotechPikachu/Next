import Code from '../../components/Code.js';
import { NextCard, PrevCard } from '../../components/PageCards.js';
import { SyntaxHighlighter as CodeBlock, style } from '../../components/CodeBlock.js';
import Copy from '../../components/Copy.js';
import TitleNavBar from '../../components/TitleNavBar.js';
import { Note } from '../../components/Boxes.jsx';

export default function GetAnime() {

  return (
    <div>
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-black">get Anime()</h1>
    <hr />
    <p className="ml-5 mr-5 mt-4 text-black mb-4">
    This function is used to get a specific anime from the JSON DB which will be supplied as it’s parameter.
    </p>
    <hr />
    <h3 className="ml-4 mr-4 text-xl md:text-2xl text-black font-bold">Parameters</h3>
    <ul className="mt-4 ml-8 list-disc mr-8 text-lg text-black">
    <li key="anName"><b> animeName </b></li>
    </ul>
    </div>
  )
}