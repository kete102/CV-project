import { TrashIcon, VisibleIcon } from "./icons/icons";

const JOBS = [
  {
    name: "Full Stack Developer",
    start: "2021-01-01",
    end: "2021-01-01",
    description: "Full Stack Developer",
  },
  {
    name: "Project Manager",
    start: "2021-01-01",
    end: "2021-01-01",
    description: "Project Manager",
  },
];
export default function ExperienceList() {
  return (
    <div id="hidden-collapse" className="flex flex-col items-start ml-4">
      {JOBS.map((job, index) => (
        <div
          key={index}
          className="w-[80%] flex items-center justify-around mt-4 group"
        >
          <div className="flex items-center gap-2 flex-1">
            <TrashIcon
              width={25}
              height={25}
              color="black"
              className="group-hover:stroke-red-600 cursor-pointer"
            />
            <h2 className="text-xl ml-4 flex-1">{job.name}</h2>
          </div>
          <VisibleIcon
            width={45}
            height={45}
            color="black"
            className="p-2 cursor-pointer hover:scale-125"
          />
        </div>
      ))}
    </div>
  );
}
