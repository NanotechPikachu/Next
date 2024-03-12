export function Note({ title="Note", children }) {
  return (
    <div className="bg-blue-600/80 border-l-4 border-blue-400/90 mt-8 ml-4 mr-4">
    <div className="items-center flex flex-row mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
    <p className="ml-4 text-neutral-400/50">{title}</p>
    </div>
    <p>{children}</p> 
    </div>
  )
}