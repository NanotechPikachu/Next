export default function Code({ code, className }) {
  return (
    <span className={`backdrop-blur text-black bg-zinc-300/50 p-0.5 font-mono ${className}`}>
    {code}
    </span>
  )
}