import { useState } from "react";

export function Section(props) {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  const inputItem = props.text;
  const ListItem = inputItem.map((item, index) => (
    <div className="m-2" key={index}>
      <h1>{item}</h1>
      <input
        className="w-full border rounded-md p-2 focus:outline-blue-600"
        type="text"
      />
    </div>
  ));

  return (
    <>
      <li className="px-4 flex flex-col gap-3">
        <div
          onClick={toggleDropDown}
          className={`bg-blue-600 text-white p-4 rounded-lg w-full after:text-white flex justify-between ${
            !dropDown ? "after:content-['+']" : "after:content-['-']"
          }`}
        >
          {props.title}
        </div>
        <div
          className={`w-full p-4 bg-white rounded-md border border-black/15 ${
            !dropDown ? "hidden" : ""
          }`}
        >
          {ListItem}
        </div>
      </li>
    </>
  );
}
