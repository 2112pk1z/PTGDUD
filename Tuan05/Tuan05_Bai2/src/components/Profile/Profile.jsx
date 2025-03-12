import React from "react";

export default function Profile() {
  return (
    <div>
      <h2 className="mb-5">Emma Gonzalez's Recipe Box</h2>
      <div className="flex items-center">
        <img
          src="/images/avatar.png"
          className="w-36 h-36 rounded-full mr-3"
          alt="Profile"
        />
        <div className="ml-3">
          <p>
            Emma Gonzalez is a deputy editor at Chefity, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <span className="text-pink-500">6.5k Subscribes</span>
          <button
            className="ml-3 px-4 py-2 bg-pink-500 text-white rounded-lg flex items-center"
          >
            Share
            <img
              src="/images/icons8-share-30.png"
              alt="Share Icon"
              className="ml-2 w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
