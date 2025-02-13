import React from "react";

function Card({ username, btnText = "Visit me" }) {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.pexels.com/photos/1156507/pexels-photo-1156507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="AirMax"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
