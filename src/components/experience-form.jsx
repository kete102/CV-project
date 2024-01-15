import { useToggle } from "../hooks/useToggle";
import Button from "./button";
import ExperienceList from "./experience-list";
import { CaretDownIcon, ExperienceIcon, PlusIcon } from "./icons/icons";

export default function ExperienceForm() {
  const { isToggled, toggle } = useToggle(true);

  return (
    <section className="max-w-xl mx-auto mt-8">
      <div className="flex items-center justify-between mr-10">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-sans font-bold">Experience</h2>
          <ExperienceIcon width={35} height={35} color="black" />
        </div>
        <Button onClick={toggle} style="peer">
          <CaretDownIcon
            width={50}
            height={50}
            color="black"
            style={`p-2 rotate-0 peer-clicked:rotate-180 transition-transform duration-500 ${
              isToggled ? "" : "rotate-180"
            }`}
          />
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ${
          isToggled ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
        }`}
      >
        <ExperienceList />
        <div id="add-experience-button" className="mt-6">
          <Button
            style="flex items-center gap-1 bg-blue-600 text-white font-normal text-xl font-semibold p-3 rounded-md"
            text="Job experience"
          >
            <PlusIcon width={30} height={30} color="white" />
          </Button>
        </div>
      </div>
    </section>
  );
}
