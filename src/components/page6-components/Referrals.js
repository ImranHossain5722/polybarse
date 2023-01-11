import React from "react";
import Container from "../container";

const Referrals = () => {
  return (
    <div>
      <Container className="max-w-[1200px]">
        <div>
          <p className="text-30">Referrals</p>
          <div className="three-box flex items-center justify-around bg-[#0D0A3A]">
            <div className="box-1">
              <p className="text-30">Friend Referred</p>
              <p className="text-50">04</p>
            </div>
            <div className="box-2">
              <p className="text-30">Invite your friend</p>
              <div className="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-full placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-3xl"
                >
                  Invite Now
                </button>
              </div>
            </div>
            <div className="box-3">
              <p className="text-30">Your Earnings</p>
              <p className="text-40">4000,15 PLV</p>
              <button
                type="submit"
                className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-3xl"
              >
                CLAIM
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Referrals;
