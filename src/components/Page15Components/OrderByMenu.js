import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowUpDownLine } from "react-icons/ri";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between bg-[#061E42] py-3 px-10 gap-5 rounded-lg cursor-pointer">
          <span className="text-white text-16 font-bold">Order by</span>
          <span>
            <RiArrowUpDownLine className="text-white text-18 font-bold" />
          </span>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#061E42] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div
                class="px-4 py-3 w-full rounded-md bg-[#061E42]   
                   focus:bg-[#061E42] focus:ring-0 text-sm"
              >
                <p value="">All Type</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                class="px-4 py-3 w-full rounded-md bg-[#061E42]  
                   focus:bg-[#061E42] focus:ring-0 text-sm"
              >
                <p value="for-rent">For Rent</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                class="px-4 py-3 w-full rounded-md bg-[#061E42]  
                   focus:bg-[#061E42] focus:ring-0 text-sm"
              >
                <p value="for-sale">For Sale</p>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
