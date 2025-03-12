import React from "react";

export default function Pagination() {
  return (
    <div className="flex flex-col items-end">
      <nav className="mt-4">
        <ul className="flex justify-center space-x-2">
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">&lt;</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg bg-pink-500 text-white" href="#">1</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">2</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">3</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">4</a>
          </li>
          <li>
            <span className="px-3 py-1 text-gray-400">...</span>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">10</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">11</a>
          </li>
          <li>
            <a className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200" href="#">&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
