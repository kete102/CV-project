/* eslint-disable react/prop-types */
export default function FormDiv({ text, htmlFor }) {
  return (
    <div className="flex flex-col gap-1 mt-3">
      <label htmlFor={htmlFor} className="font-semibold opacity-80 text-lg">
        {text}
      </label>
      <input
        id={htmlFor}
        type="text"
        className="text-md font-medium p-2 rounded-md border shadow-slate-300 shadow-md focus:outline-none"
      />
    </div>
  );
}
