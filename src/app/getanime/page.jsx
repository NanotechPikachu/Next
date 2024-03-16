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
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-black">get Anime()</h1>
    <hr />
    <p className="ml-5 mr-5 mt-4 text-black mb-4">
    This function is used to get a specific anime from the JSON DB which will be supplied as it’s parameter.
    </p>
    <hr />
    <h3 className="ml-4 mr-4 mt-6 text-xl md:text-2xl text-black font-bold">Parameters</h3>
    <ul className="mt-4 ml-8 list-disc mr-8 text-lg text-black">
    <li key="anName"><b> animeName </b></li>
    </ul>
    <p className="ml-4 mr-4 mt-6 mb-4 text-black">This parameter is to give the anime name to search for in DB.</p>
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
    <Warning title="Asynchronous">
This function returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:text-blue-700"><u>Promise</u></a> with an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" className="text-blue-600 hover:text-blue-700"><u>Object</u></a> inside it. This Object consists of all data regards to the anime.
    </Warning>
    <Note>
Refer the <Link href="/result" className="text-blue-600 hover:text-blue-700"><u>Result Data</u></Link> to see how the JSON DB output looks like.
    </Note>
    <NextCard title="Home" link="/" className="mt-20" />
    <PrevCard title="Get Started" link="/result" className="mt-3 mb-10" />
    </div>
  )
}