import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-2 bg-slate-950 border-blue border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
