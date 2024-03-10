export default function Card({ title, children, icon, className }) {
  return (
    <div className={`border md:w-96 p-5 m-5 bg-zinc-900 overflow-hidden flex flex-col items-start ${className}`}>
      <div className="flex items-center w-full mb-4">
        {icon && (
          <svg className="text-blue-500 w-8 h-8 mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" fill="currentColor"/>
          </svg>
        )}
        <span className={`text-xl md:text-2xl font-bold text-white whitespace-pre-line ${icon ? 'flex-grow' : ''}`}>{title}</span>
      </div>
      <div className="whitespace-pre-line text-white w-full">{children}</div>
    </div>
  );
}