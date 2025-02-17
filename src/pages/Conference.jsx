import React from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";

const Conference = () => {
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
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        {" "}
        Conference Mobile Application
      </h2>
      <p className="mb-4">
        Led a team of five developers in Heart of God Church (HOGC) to develope
        a feature-rich conference mobile application using{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Ionic
        </span>{" "}
        with{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Vue.js
        </span>{" "}
        for the front end and a Node.js backend. The app is integrated with a
        SQL database using{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Nest.js TypeORM
        </span>{" "}
        and is written in TypeScript for maintainability and scalability. A
        Content Management System (CMS) using{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Strapi
        </span>{" "}
        allows real-time content updates without requiring app redeployment. Key
        features include real-time schedules, speaker details, personalized
        agendas, interactive maps, push notifications, live Q&A sessions, and
        session feedback collection. Additionally, the app enables seamless
        image uploads taken during the conference, leveraging{" "}
        <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Amazon S3
        </span>{" "}
        for efficient storage and retrieval.
      </p>
    </div>
  );
};

export default Conference;
