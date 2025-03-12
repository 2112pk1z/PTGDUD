import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-100 py-6 flex justify-around items-center">
      <div className="pl-10 flex items-center">
        <a href="#">
          <img src="/images/chefify.png" className="w-3/4 object-contain" />
        </a>
      </div>
      <div className="w-[450px] flex items-center flex-col">
        <input
          type="text"
          className="p-3 w-full border border-gray-300 rounded-md text-sm"
          placeholder="Tìm kiếm"
        />
      </div>
      <div className="flex items-center text-gray-600 font-normal gap-4">
        <a href="#" className="hover:text-gray-900">What to cook</a>
        <a href="#" className="hover:text-gray-900">Recipes</a>
        <a href="#" className="hover:text-gray-900">Product Search</a>
        <a href="#" className="hover:text-gray-900">Occasions</a>
        <a href="#" className="hover:text-gray-900">About Us</a>
      </div>
      <div className="flex gap-5 items-center">
        <div className="bg-pink-200 px-3 py-2 rounded-md flex items-center justify-center">
          <span className="text-pink-600 font-medium">Your Recipe Box</span>
        </div>
        <div className="text-center pr-5 flex items-center">
          <img
            src="/images/avatar.png"
            alt="Avatar"
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
