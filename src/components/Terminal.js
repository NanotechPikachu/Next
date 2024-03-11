use client;

import { ClipboardIcon } from '@heroicons/react/24/outline';

export default function Terminal({ command }) {
  return (
    <>
    <div className="flex justify-end items-center bg-black mt-4 ml-5 h-7 mr-5 md:w-96">
    <button
          onClick={() => handleCopy(command)}
          className="text-gray-400 rounded p-1 mr-3 border hover:bg-zinc-950"
        >
    <ClipboardIcon className="h-4 w-4" />
    </button>
    </div>
    <div className="flex justify-between items-center bg-zinc-900 text-green-400 p-3 ml-5 mr-5 md:w-96">
    <span className="text-blue-500">$ {command}</span>
    </div>
    </>
  )
}

function handleCopy(command) {
  navigator.clipboard.writeText(command);
};