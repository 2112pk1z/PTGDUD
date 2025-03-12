import React from "react";
import { Bookmark } from "lucide-react";

export default function FoodBox({ image, title, time }) {
  return (
    <div className="w-full bg-white shadow-sm rounded-2xl overflow-hidden">
      <img
        src={image}
        className="w-full h-64 object-cover"
        alt={title}
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h5 className="text-lg font-bold">{title}</h5>
          <button className="bg-white border border-pink-500 rounded-full p-2 flex items-center justify-center">
            <Bookmark className="text-pink-500" size={20} />
          </button>
        </div>
        <div className="mt-2">
          <span className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm">{time}</span>
        </div>
      </div>
    </div>
  );
}

