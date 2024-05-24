import { useState } from "react";
import { getUsers } from "./getUser";

const users = await getUsers();

export function Section(props) {
  //input//
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

  //user//
  const userItem = users.data.map((user, index) => (
    <div
      key={index}
      className="flex justify-between  border-black/10 border-b pb-4"
    >
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <input type="checkbox" onChange={checkboxChange} />
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
