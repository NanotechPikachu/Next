export function Note({ title="Note", children }) {
  return (
    <div className="bg-blue-500/50 border-l-4 border-blue-400/90 mt-8 ml-4 mr-4">
    <div className="items-center flex flex-row pt-4 pl-2 mb-2 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
    <p className="ml-2 text-neutral-100/90 text-bold text-xl">{title}</p>
    </div>
    <div className="ml-4 pb-4 text-white mr-4">
    <p>{children}</p> 
    </div>
    </div>
  )
}

export function Warning({ title="Warning", children }) {
  return (
    <div className="bg-orange-500/50 border-l-4 border-orange-400/90 mt-8 ml-4 mr-4">
    <div className="items-center flex flex-row pt-4 pl-2 mb-2 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
    <p className="ml-2 text-neutral-100/90 text-bold text-xl">{title}</p>
    </div>
    <div className="ml-4 pb-4 text-white mr-4">
    <p>{children}</p> 
    </div>
    </div>
  )
}