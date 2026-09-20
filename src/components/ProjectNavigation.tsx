import { Link } from "react-router-dom";

type ProjectNavigationProps = {
  current: string;
};

const projects = [
  {
    title: "Cloisons",
    path: "/projects/cloisons",
  },
  {
    title: "Plafonds",
    path: "/projects/faux-plafonds",
  },
  {
    title: "Isolation",
    path: "/projects/isolation",
  },
  {
    title: "Doublage",
    path: "/projects/doublage",
  },
];

export default function ProjectNavigation({ current }: ProjectNavigationProps) {
  const filteredProjects = projects.filter(
    (project) => project.title.toLowerCase() !== current.toLowerCase(),
  );

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            border-t
            border-slate-200
            pt-8
            sm:pt-10
          "
        >
          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {filteredProjects.map((project) => (
              <Link
                key={project.path}
                to={project.path}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-[#111A5B]

                  transition
                  duration-300

                  hover:bg-[#111A5B]
                  hover:text-white
                "
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
