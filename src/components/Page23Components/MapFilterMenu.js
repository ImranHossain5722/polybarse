import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineFilter } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    forSale: false,
    premium: false,
    sold: false,
    body: false,
    xl: false,
    xxxl: false,
    xxxxxxl: false,
    twintyFourXtwintyFour: false,
  });

  const {
    forSale,
    premium,
    sold,
    body,
    xl,
    xxxl,
    xxxxxxl,
    twintyFourXtwintyFour,
  } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {
    setCheck({
      ...check,
      forSale: false,
      Premium: false,
      sold: false,
      body: false,
      xl: false,
      xxxl: false,
      xxxxxxl: false,
      twintyFourXtwintyFour: false,
    });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-between bg-[#061E42] py-3 px-10 gap-8 rounded-lg cursor-pointer">
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
        <Menu.Items className="absolute -right-[54px] z-10 mt-2 w-56 origin-top-right rounded-md bg-[#061E42] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {/* Availability */}
              <div className="pl-4 grid grid-cols-1">
                <div className="availability md:px-6">
                  <div className=" flex space-x-2">
                    <p className="text-20 font-semibold text-white pt-4">
                      Availability
                    </p>
                  </div>
                  <div className=" mt-2 grid grid-cols-1">
                    <div className="checkbox-buyNow">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          For Sale{" "}
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="forSale"
                          value="forSale"
                          checked={forSale}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>

                    <div className="checkbox-buyNow">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          Premium
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="premium"
                          value="premium"
                          checked={premium}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>
                    <div className="checkbox-buyNow">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          Sold
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 "
                          name="sold"
                          value="sold"
                          checked={sold}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* size */}
                <div className="size mb-5 px-1 md:px-6">
                  <div className=" flex space-x-2">
                    <p className="text-20 font-semibold text-white pt-2">
                      Size
                    </p>
                  </div>
                  <div className=" mt-2 grid grid-cols-1">
                    <div className="checkbox-Head">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          1x1
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="xl"
                          value="xl"
                          checked={xl}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>

                    <div className="checkbox-body">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          3x3
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="xxxl"
                          value="xxxl"
                          checked={xxxl}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>
                    <div className="checkbox-arms">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          6x6
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="xxxxxxl"
                          value="xxxxxxl"
                          checked={xxxxxxl}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>
                    <div className="checkbox-legs">
                      <label class="mains">
                        <p className="text-[15px] font-medium text-white">
                          24x24
                        </p>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2"
                          name="twintyFourXtwintyFour"
                          value="twintyFourXtwintyFour"
                          checked={twintyFourXtwintyFour}
                          onChange={changeHandler}
                        />
                        <span
                          class="geekmarks
"
                        ></span>
                      </label>
                    </div>
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
