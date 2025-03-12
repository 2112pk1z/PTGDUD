import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Profile from "../../components/Profile/Profile";
import TabNav from "../../components/TabNav/TabNav";
import FoodBox from "../../components/FoodBox/FoodBox";

export default function Recipes() {
  const foodData = [
    {
      id: 1,
      image: "/images/image76.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 2,
      image: "/images/image71.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 3,
      image: "/images/image73.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 4,
      image: "/images/image75.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 5,
      image: "/images/image71.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 6,
      image: "/images/image76.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 7,
      image: "/images/Image72.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 8,
      image: "/images/image73.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      id: 9,
      image: "/images/image75.png",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
  ];

  return (
    <div className="px-20 py-12">
      <Breadcrumb first="Home" second="Your Recipe Box" />
      <div>
        <Profile />
        <TabNav />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {foodData.slice(0, 8).map((food) => (
            <FoodBox key={food.id} image={food.image} title={food.title} time={food.time} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
