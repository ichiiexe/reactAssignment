import { useState } from "react";

export function Section(props) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <li className="p-4 flex flex-col gap-3">
        <div className="bg-blue-600 text-white p-4 rounded-lg w-full after:text-white flex justify-between">
          {props.title}
        </div>
        <div></div>
      </li>
      ;
    </>
  );
}
