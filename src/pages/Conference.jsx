import React from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";
import conference_image from "../assets/conference.png";
import schedule_image from "../assets/schedule.png";
import notification_image from "../assets/notification.png";
import photodrop_image from "../assets/photodrop.png";

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
      <h2 className="text-3xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        {" "}
        Conference Mobile Application
      </h2>
      <div className="flex justify-center items-center gap-15 mb-5">
        <img
          className="rounded-lg mb-10 max-h-120"
          src={conference_image}
          alt=""
        />
        <div>
          <p className="mb-10">
            Led a team of five developers in Heart of God Church (HOGC) to
            develop a feature-rich conference mobile application.
          </p>

          <div className="flex gap-10">
            <div className="flex flex-col w-50 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl mb-10 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Frontend{" "}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js", "Ionic"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-70 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl mb-10 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Backend{" "}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "SQL", "Nest.js", "TypeScript", "Strapi"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-10">
        <p className="mb-10 mr-10">
          Key features include real-time schedules, push notifications,
          centralized resource page, and live audio listening sessions.
        </p>
        <img
          className="rounded-lg mt-5 max-h-100 mr-5"
          src={schedule_image}
          alt=""
        />
        <img
          className="rounded-lg mb-10 max-h-100"
          src={notification_image}
          alt=""
        />
      </div>
      <div className="flex items-center gap-10 mb-20">
        <img
          className="rounded-lg mt-5 max-h-100 mr-5"
          src={photodrop_image}
          alt=""
        />
        <p className="mb-10 mr-10">
          Additionally, the app enables seamless image uploads taken during the
          conference, leveraging{" "}
          <span className="font-bold text-blue-400">Amazon S3</span> for
          efficient storage and retrieval.
        </p>
      </div>
    </div>
  );
};

export default Conference;
