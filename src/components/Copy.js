import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';

export default function Copy({ command }) {
  return (
    <>
    <button
      onClick={() => handleCopy(command)}
      className="text-gray-400 rounded p-1 mr-3 border hover:bg-zinc-950"
      >
    <ClipboardIcon className="h-4 w-4" />
    </button>
    </>
  )
}

function handleCopy(command) {
  navigator.clipboard.writeText(command);
};