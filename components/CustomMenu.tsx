import { Menu } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

const CustomMenu = ({ title, state, filters, setState }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <Menu as="div" className="self-start relative w-full">
        <Menu.Button className="flex justify-between items-center custom_menu-btn w-full">
          {state || "Select category"}
          <Image src="/arrow-down.svg" width={15} height={5} alt="Arrow down" />
        </Menu.Button>
        <Menu.Items className="custom_menu-items w-full">
          {filters.map((tag) => (
            <Menu.Items key={tag}>
              <button
                type="button"
                value={tag}
                className="selfStart custom_menu-item w-full"
                onClick={(e) => setState(e.currentTarget.value)}
              >{tag}</button>
            </Menu.Items>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;
