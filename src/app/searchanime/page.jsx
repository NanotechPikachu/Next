import Code from '../../components/Code.js';
import { NextCard, PrevCard } from '../../components/PageCards.js';
import { SyntaxHighlighter as CodeBlock, style } from '../../components/CodeBlock.js';
import Copy from '../../components/Copy.js';
import TitleNavBar from '../../components/TitleNavBar.js';
import { Note, Warning } from '../../components/Boxes.jsx';
import Link from 'next/link';

export default function SearchAnime() {
  const a = `const { searchAnime } = require(\'anichu.db\');

( async () => {
  const res = await searchAnime(\'sword art online\');
  // or
  const res = await searchAnime(\'sword art online\', 0.8);
  console.log(res);
})();`;

  const b = `const anidb = require(\'anichu.db\');

( async () => {
  const res = await anidb.anime.search(\'sword art online \');
  // or
  const res = await anidb.anime.search(\'sword art online \', 0.6);
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
    <hr />
    <h3 className="ml-4 mr-4 mt-6 text-xl md:text-2xl text-black font-bold">Usage</h3>
    <p className="ml-4 mr-4 mt-4 text-black font-bold text-lg">1st Method:</p>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mb-0 rounded-lg"> 
    <Copy command={a} />
    </div>
    <CodeBlock language="javascript" style={style} showLineNumbers={true} wrapLines={true}>
    {a}
    </CodeBlock>
    </div>
    <p className="ml-4 mr-4 mt-4 text-black font-bold text-lg">2nd Method:</p>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mb-0 rounded-lg"> 
    <Copy command={b} />
    </div>
    <CodeBlock language="javascript" style={style} showLineNumbers={true} wrapLines={true}>
    {b}
    </CodeBlock>
    </div>
    <br />
    <hr />
    <div className="mt-3 ml-4 mr-4 text-black border-l-2 border-slate-100">
    <p className="ml-2">This function returns a maximum of 10 entries only so that the output window won’t get clogged.</p>
    </div> 
    <Warning title="Asynchronous">
This function returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:text-blue-700"><u>Promise</u></a> with an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" className="text-blue-600 hover:text-blue-700"><u>Array</u></a> inside it. Each element of the Array is an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" className="text-blue-600 hover:text-blue-700"><u>Object</u></a> of the data returned by DB.
    </Warning>
    <Note>
Refer the <Link href="/result" className="text-blue-600 hover:text-blue-700"><u>Result Data</u></Link> to see how the JSON DB output looks like.
    </Note>
    <PrevCard title="getAnime()" link="/getanime" className="mt-3 mb-10" />
    </div>
  )
}