import React from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl pt-15 mx-auto px-4">
      <div className="absolute top-15 lef-5 w-10 cursor-pointer hover:opacity-50">
        <img
          src={back_arrow_icon}
          alt=""
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <h2 className="text-3xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        {" "}
        Movie Web Application
      </h2>
    </div>
  );
};

export default Movie;
