/* eslint-disable react/prop-types */
import Button from "./button";
import EducationForm from "./education-form";
import ExperienceForm from "./experience-form";
import { LoadIcon, TrashIcon } from "./icons/icons";
import PersonalInformation from "./personal-info";

export default function Options({ openContent }) {
  return (
    <section className="w-full flex flex-col items-center h-screen">
      <div className="bg-white px-8 pt-4 pb-4 rounded-lg flex flex-row gap-6 mx-auto items-center justify-between h-fit w-[70%]  shadow-md shadow-slate-300">
        <Button
          text="Clear resume"
          style="flex flex-row items-center gap-2 text-xl font-semibold"
        >
          <TrashIcon width={25} heigth={25} color={"red"} />
        </Button>
        <span className="h-[80%] bg-slate-300 w-[2px] rounded-full"></span>
        <Button
          text="Load example"
          style="flex flex-row items-center gap-2 text-xl font-semibold"
        >
          <LoadIcon width={25} heigth={25} color={"blue"} />
        </Button>
      </div>
      <div className="mt-16 ml-16 text-left w-full">
        <section>
          {openContent ? (
            <>
              <PersonalInformation />
              <ExperienceForm />
              <EducationForm />
            </>
          ) : (
            "customization"
          )}
        </section>
      </div>
    </section>
  );
}
