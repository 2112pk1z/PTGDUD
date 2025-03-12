import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-6">
        <div className="col-span-6 flex flex-col justify-between ml-16">
          <div>
            <h2 className="font-semibold text-lg pb-2">About Us</h2>
            <p className="text-gray-300 pb-4">
              Welcome to our website, a wonderful place to explore and learn
              how to cook like a pro.
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white text-black py-2 px-4 rounded-md w-3/5"
              />
              <button className="bg-pink-400 text-white py-2 px-4 rounded-md">
                Send
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <span className="font-bold text-xl">Chefify</span>
            <span className="text-gray-400 text-sm">2023 Chefify Company</span>
            <span className="text-gray-400 text-sm">
              Terms of Service | Privacy Policy
            </span>
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-lg pb-2">Learn More</h2>
            <p className="text-gray-300 pb-2">Our Cooks</p>
            <p className="text-gray-300 pb-2">See Our Features</p>
            <p className="text-gray-300 pb-2">FAQ</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg pb-2">Shop</h2>
            <p className="text-gray-300 pb-2">Gift Subscription</p>
            <p className="text-gray-300 pb-2">Send Us Feedback</p>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="font-semibold text-lg pb-2">Recipes</h2>
          <p className="text-gray-300 pb-2">What to Cook this Week</p>
          <p className="text-gray-300 pb-2">Pasta</p>
          <p className="text-gray-300 pb-2">Dinner</p>
          <p className="text-gray-300 pb-2">Healthy</p>
          <p className="text-gray-300 pb-2">Vegetarian</p>
          <p className="text-gray-300 pb-2">Vegan</p>
          <p className="text-gray-300 pb-2">Christmas</p>
        </div>
      </div>
    </div>
  );
}