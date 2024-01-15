/* eslint-disable react/prop-types */
import Button from "./button";
import { CustomizationIcon, FileIcon } from "./icons/icons";

export default function Aside({ toggleContent }) {
  return (
    <aside className="flex flex-col p-4 gap-8 mt-10 mr-2 h-fit">
      <Button
        id="content"
        text="Content"
        style="flex flex-col items-center gap-2 font-bold text-xl shadow-lg p-2 pb-4 rounded-md"
        onClick={toggleContent}
      >
        <FileIcon width={25} heigth={25} />
      </Button>
      <Button
        id="customization"
        text="Customization"
        style="flex flex-col items-center gap-2 font-bold text-xl shadow-lg p-2 pb-4  rounded-md"
        onClick={toggleContent}
      >
        <CustomizationIcon width={25} heigth={25} style="" />
      </Button>
    </aside>
  );
}
