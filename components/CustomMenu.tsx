import { Menu,  Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from 'react';

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
      <Menu as="div" className="self-start relative  w-full">
        <div>
        <Menu.Button className="flex justify-between items-center custom_menu-btn w-full">
          {state || "Select category"}
          <Image src="/arrow-down.svg" width={15} height={5} alt="Arrow down" />
        </Menu.Button>
        </div>

        <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
        <Menu.Items className="custom_menu-items w-full">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="selfStart custom_menu-item w-full"
                onClick={(e) => setState(e.currentTarget.value)}
              >{tag}</button>
            </Menu.Item>
          ))}
        </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CustomMenu;
