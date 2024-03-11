import Code from '../../components/Code.js';
import { NextCard, PrevCard } from '../../components/PageCards.js';
import { SyntaxHighlighter as CodeBlock, style } from '../../components/CodeBlock.js';
import Copy from '../../components/Copy.js';

export default function Result() {
  const c = `{
  title: '....',
  synopsis: '....',
  episodes: '....',
  url: 'https://myanimelist.net/anime/....',
  genres: '....',
  ratings: 'Average score based off ....',
  image: 'https://cdn.myanimelist.net/images/anime/....',
  year: 1234,
  trailer: 'https://www.youtube.com/embed/....',
  studio: '....',
  recommendations: '....',
  background: '....'
}`;
  const b = `const db = require('anichu.db');
(async () => { 
  const res = await db.anime.get(\'sword art online\'); // Refer the getAnime() page for usage 
  console.log(\`\${res.title} \\n\${res.year}\`); // Like this 
})();`;
  const a = `[
{
  title: '....',
  synopsis: '....',
  episodes: '....',
  url: 'https://myanimelist.net/anime/....',
  genres: '....',
  ratings: 'Average score based off ....',
  image: 'https://cdn.myanimelist.net/images/anime/....',
  year: 1234,
  trailer: 'https://www.youtube.com/embed/....',
  studio: '....',
  recommendations: '....',
  background: '....'
}, {
  title: '....',
  synopsis: '....',
  episodes: '....',
  url: 'https://myanimelist.net/anime/....',
  genres: '....',
  ratings: 'Average score based off ....',
  image: 'https://cdn.myanimelist.net/images/anime/....',
  year: 1234,
  trailer: 'https://www.youtube.com/embed/....',
  studio: '....',
  recommendations: '....',
  background: '....'
}, { ... }
  ...
]`;
  const d = `const db = require(\'anichu.db\');
(async () => {
  const res = await db.anime.search(\'sword art online\', 0.6); // Refer the getAnime() page for usage
  for (const e of res) { // Using loop cuz it returns array
    console.log(\`\${e.title}\\n\${e.year}\`); // Logs all anime titles in console as it returns
  };
})();`;

  return (
    <div>
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-black">Result Type</h1>
    <hr />
    <p className="ml-5 mr-5 mt-4 text-black">
    This page deals with the JSON DB output as well as discussing the results or outputs of functions.
    </p>
    <h2 className="ml-4 text-2xl md:text-3xl mt-8 font-bold text-black">getAnime()</h2>
    <p className="ml-4 text-black mt-3 mr-4">
This function returns an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:text-blue-700"><u>Promise</u></a> as such it’s an <b>Asynchronous</b> function needing to be <Code code="await" />-ed.
<br /> <br />
The promise consists of an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" className="text-blue-600 hover:text-blue-700"><u>Object</u></a> which has the relevant data of the anime(if any).
    </p>
    <h3 className="text-xl ml-4 mt-8 font-bold mb-4">
    Data Structure of <Code code="getAnime()" className="text-lg" />
    </h3>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mr-5 mb-0 rounded-lg"> 
    <Copy command={c} />
    </div>
    <CodeBlock language="json" style={style} showLineNumbers={true} wrapLines={true}>
    {c}
    </CodeBlock>
    </div>
    <p className="mt-4 ml-4 mr-4">This function’s output can be accessed as such:</p>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mr-5 mb-0 rounded-lg"> 
    <Copy command={b} />
    </div>
    <CodeBlock language="javascript" style={style} showLineNumbers={true} wrapLines={true}>
    {b}
    </CodeBlock>
    </div>
    <h2 className="ml-4 text-2xl md:text-3xl mt-8 font-bold text-black">searchAnime()</h2>
    <p className="ml-4 text-black mt-3 mr-4">
This function returns an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:text-blue-700"><u>Promise</u></a> as such it’s an <b>Asynchronous</b> function needing to be <Code code="await" />-ed.
<br /> <br />
The promise consists of an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" className="text-blue-600 hover:text-blue-700"><u>Array</u></a>, having <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" className="text-blue-600 hover:text-blue-700"><u>Object</u></a>s as it’s elements. Each Object is the data returned by DB.
    </p>
    <h3 className="text-xl ml-4 mt-8 font-bold mb-4">
    Data Structure of <Code code="searchAnime()" className="text-lg" />
    </h3>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mr-5 mb-0 rounded-lg"> 
    <Copy command={a} />
    </div>
    <CodeBlock language="json" style={style} showLineNumbers={true} wrapLines={true}>
    {a}
    </CodeBlock>
    </div>
    <p className="mt-4 ml-4 mr-4">This function’s output can be accessed as such:</p>
    <div className="bg-black mt-4 ml-5 mr-5 rounded-lg">
    <div className="flex justify-end items-center bg-black ml-5 h-7 mr-5 mb-0 rounded-lg"> 
    <Copy command={d} />
    </div>
    <CodeBlock language="javascript" style={style} showLineNumbers={true} wrapLines={true}>
    {d}
    </CodeBlock>
    </div>
    </div>
  )
}