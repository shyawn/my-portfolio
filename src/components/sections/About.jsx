import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "HTML",
    "CSS",
    "Javascript",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "MySQL",
    "MongoDB",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 px-6">
              <strong> Bachelor of Engineering, Computer Science major</strong>
              <br />
              <span className="italic mb-4">
                Singapore University of Technology and Design (2020-2024)
              </span>
            </p>
            <p className="text-gray-300 mt-4 mb-4 px-6">
              <strong>Relevant Coursework:</strong> <br />
              <span className="italic">
                Data Structures, Algorithms, Web Development
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <p className="text-gray-300">
                <strong>
                  {" "}
                  Bachelor of Engineering, Computer Science major
                </strong>
                <br />
                <span className="italic mb-4">
                  Singapore University of Technology and Design (2020-2024)
                </span>
              </p>
              <p className="text-gray-300 mt-4">
                <strong>Relevant Coursework:</strong> <br />
                <span className="italic">
                  Data Structures, Algorithms, Web Development
                </span>
              </p>
            </div> */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div className="text-sm md:text-base">
                  <div className="flex justify-between gap-5 mb-1 md:mb-0">
                    <h4 className="font-semibold text-blue-400">
                      {" "}
                      Developer Intern, TC Acoustic
                    </h4>
                    <h4 className="md:mr-3">Jun - Dec 2024</h4>
                  </div>
                  <p className="italic">
                    Developed Product Pages using Shopify framework and
                    implemented CI/CD pipeline for automated testing
                  </p>
                </div>

                <div className="text-sm md:text-base">
                  <div className="flex justify-between gap-5 mb-1 md:mb-0">
                    <h4 className="font-semibold text-blue-400">
                      {" "}
                      Software Engineer Intern, NCS
                    </h4>
                    <h4 className="md:mr-3">May - Sep 2023</h4>
                  </div>
                  <p className="italic">
                    Assisted in building front-end React components for OneNS
                    portal and implemented Jest and JUnit testing to enhance
                    code coverage
                  </p>
                </div>

                <div className="text-sm md:text-base">
                  <div className="flex justify-between gap-5 mb-1 md:mb-0">
                    <h4 className="font-semibold text-blue-400">
                      {" "}
                      Full-stack Developer Intern, SAP
                    </h4>
                    <h4 className="md:mr-3">Aug - Dec 2022</h4>
                  </div>
                  <p className="italic">
                    Enhanced performance of Docker container scaling processes
                    using Kubernetes and Python and optimized CI/CD pipelines
                    using Jenkins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
