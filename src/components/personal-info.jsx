import { useToggle } from "../hooks/useToggle";
import Button from "./button";
import Form from "./form";
import { CaretDownIcon, PersonalInfoIcon } from "./icons/icons";

export default function PersonalInformation() {
  const { isToggled, toggle } = useToggle();
  return (
    <div className="max-w-xl mx-auto ">
      <div className="flex items-center justify-between mr-10">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-sans font-bold">Personal information</h2>
          <PersonalInfoIcon width={35} height={35} color="black" />
        </div>
        <Button onClick={toggle} style="peer">
          <CaretDownIcon
            width={50}
            height={50}
            color="black"
            style={`p-2 rotate-0 peer-clicked:rotate-180 transition-transform duration-500 ${
              !isToggled ? "" : "rotate-180"
            }`}
          />
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ${
          !isToggled ? "max-h-0 opacity-0" : "max-h-screen opacity-100"
        }`}
      >
        <Form />
      </div>
    </div>
  );
}
