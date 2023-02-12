import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineFilter } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    buyNow: false,
    ourAuction: false,
    head: false,
    body: false,
    arms: false,
    legs: false,
    generic: false,
  });

  const { buyNow, ourAuction, head, body, arms, legs, generic } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {
    setCheck({
      ...check,
      buyNow: false,
      ourAuction: false,
      head: false,
      body: false,
      arms: false,
      legs: false,
      generic: false,
    });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between bg-[#061E42] py-3 px-10 gap-5 rounded-lg cursor-pointer">
          <span className="text-white text-16 font-bold">Filter</span>
          <span>
            <HiOutlineFilter className="text-white text-18 font-bold" />
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
        <Menu.Items className="absolute -right-[65px] z-10 mt-2 w-56 origin-top-right rounded-md bg-[#061E42] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 px-3">
            <p className="text-20 font-semibold text-white pt-4">Status</p>
            <Menu.Item>
              <div className=" mt-8 grid grid-cols-1">
                <div className="checkbox-buyNow">
                  <label class="main">
                    <p className="text-[15px] font-medium text-white">
                      Buy Now{" "}
                    </p>
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2"
                      name="buyNow"
                      value="buyNow"
                      checked={buyNow}
                      onChange={changeHandler}
                    />
                    <span class="geekmark"></span>
                  </label>
                </div>

                <div className="checkbox-buyNow">
                  <label class="main">
                    <p className="text-[15px] font-medium text-white">
                      Our Auction
                    </p>
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2"
                      name="ourAuction"
                      value="ourAuction"
                      checked={ourAuction}
                      onChange={changeHandler}
                    />
                    <span class="geekmark"></span>
                  </label>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="type mt-5 px-1 ">
                <div className=" flex space-x-2">
                  <p className="text-20 font-semibold text-white md:pt-4">
                    Type
                  </p>
                </div>
                <div className=" mt-8 grid grid-cols-1 flex-wrap">
                  <div className="checkbox-Head">
                    <label class="main">
                      <p className="text-[15px] font-medium text-white">
                        Head{" "}
                      </p>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name="head"
                        value="head"
                        checked={head}
                        onChange={changeHandler}
                      />
                      <span class="geekmark"></span>
                    </label>
                  </div>

                  <div className="checkbox-body">
                    <label class="main">
                      <p className="text-[15px] font-medium text-white">Body</p>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name="body"
                        value="body"
                        checked={body}
                        onChange={changeHandler}
                      />
                      <span class="geekmark"></span>
                    </label>
                  </div>
                  <div className="checkbox-arms">
                    <label class="main">
                      <p className="text-[15px] font-medium text-white">Arms</p>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name="arms"
                        value="arms"
                        checked={arms}
                        onChange={changeHandler}
                      />
                      <span class="geekmark"></span>
                    </label>
                  </div>
                  <div className="checkbox-legs">
                    <label class="main">
                      <p className="text-[15px] font-medium text-white">Legs</p>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name="legs"
                        value="legs"
                        checked={legs}
                        onChange={changeHandler}
                      />
                      <span class="geekmark"></span>
                    </label>
                  </div>
                  <div className="checkbox-generic">
                    <label class="main">
                      <p className="text-[15px] font-medium text-white">
                        Generic
                      </p>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name="generic"
                        value="generic"
                        checked={generic}
                        onChange={changeHandler}
                      />
                      <span class="geekmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
