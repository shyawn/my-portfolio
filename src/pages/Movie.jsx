import React from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";
import movie_login from "../assets/movie_login.png";
import movie_home from "../assets/movie_home.png";
import movie_trailer from "../assets/movie_trailer.png";

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
      <div className="mb-5">
        <img className="rounded-lg mb-10 max-w-250" src={movie_home} alt="" />
        <p>
          This project was made as a way to practice my frontend{" "}
          <span className="text-blue-400">React {""}</span>
          and backend <span className="text-blue-400">API</span> skills. It
          replicates the famous carousel layout that Netflix uses, and it
          exemplifies several small features present in the real website (e.g.
          viewing trailers and adding to favorite list).
        </p>
      </div>
      <div className="flex justify-center items-center gap-15 mb-5">
        <p>
          The app fetches from an open source{" "}
          <a
            className="underline text-gray-300"
            href="https://www.themoviedb.org/"
          >
            movie API
          </a>{" "}
          and displays the relevant movie poster images and trailer videos.
        </p>
        <img
          className="rounded-lg mb-10 max-w-150"
          src={movie_trailer}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-15 mb-5">
        <img className="rounded-lg mb-10 max-h-120" src={movie_login} alt="" />
        <p>
          The user can also create an account and login with their email and
          password, and all info related to the user is saved in a{" "}
          <span className="text-blue-400">Firebase</span> cloud database.
        </p>
      </div>

      <div className="pb-20">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Links
        </h2>
        <div className="flex justify-center gap-4">
          <a href="https://splendid-cheesecake-b26fc5.netlify.app/">
            <div className="p-6 px-12 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between text-center">
              Website link
            </div>
          </a>
          <a href="https://github.com/shyawn/movie-app">
            <div className="p-6 px-12 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between text-center">
              Github link
            </div>
          </a>
        </div>
        {/* <p>
          This website is hosted on{" "}
          <a
            className="text-blue-400 underline"
            href="https://splendid-cheesecake-b26fc5.netlify.app/"
          >
            Netlify
          </a>{" "}
          .
        </p> */}
      </div>
    </div>
  );
};

export default Movie;
