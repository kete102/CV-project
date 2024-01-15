import { useToggle } from "../hooks/useToggle";
import Button from "./button";
import { CaretDownIcon, EducationIcon, PlusIcon } from "./icons/icons";

export default function EducationForm() {
  const { isToggled, toggle } = useToggle();

  return (
    <div className="mt-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between mr-10">
        <div className="flex items-center gap-2">
          <h1 className="font-bold font-sans text-2xl">Education</h1>
          <EducationIcon width={40} height={40} color="black" />
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
        <div id="add-education-button" className="mt-6">
          <Button
            style="flex items-center gap-1 bg-blue-600 text-white font-normal text-xl font-semibold p-3 rounded-md"
            text="Studies"
          >
            <PlusIcon width={30} height={30} color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
