/* eslint-disable react/prop-types */
export default function Button({ text, children, style, onClick }) {
  return (
    <button className={style} onClick={onClick}>
      {children}
      {text}
    </button>
  );
}
