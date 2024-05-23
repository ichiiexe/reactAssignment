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
      <li className="p-4 flex flex-col gap-3">
        <div className="bg-blue-600 text-white p-4 rounded-lg w-full after:text-white flex justify-between">
          {props.title}
        </div>
        <div>{ListItem}</div>
      </li>
      ;
    </>
  );
}
