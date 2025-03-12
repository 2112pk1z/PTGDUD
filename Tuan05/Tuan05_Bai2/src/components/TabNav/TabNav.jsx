import React from "react";

export default function TabNav() {
  return (
    <div className="mb-4">
      <ul className="flex border-b mt-4">
        <li className="mr-4">
          <a className="inline-block py-2 px-4 text-pink-500 font-bold border-b-2 border-pink-500" href="#">
            Saved Recipes
          </a>
        </li>
        <li className="mr-4">
          <a className="inline-block py-2 px-4 text-gray-500 hover:text-pink-500" href="#">
            Folders
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-4 text-gray-500 hover:text-pink-500" href="#">
            Recipes by Genevieve
          </a>
        </li>
      </ul>
    </div>
  );
}