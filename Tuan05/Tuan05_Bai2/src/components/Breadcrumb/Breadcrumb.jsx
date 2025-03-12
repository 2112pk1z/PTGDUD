import React from "react";

export default function Breadcrumb({ first, second }) {
  return (
    <nav className="mb-5" aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-500">
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">{first}</a>
        </li>
        <li className="text-pink-500">&gt; {second}</li>
      </ol>
    </nav>
  );
}