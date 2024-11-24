import React, { useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo } from "./index";

const Header = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  return (
    <div class="backgroundMain">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a href="/" aria-label="Company" title="Company" 
              class="inline-flex items-center mr-8">
              <Logo color="text-white" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Nhóm 7
              </span>
            </a>
          </div>
          {!currentAccount && (
            <ul class="flex items-center space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium
                  tracking-wide text-white transition duration-200 rounded shadow-md
                  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700
                  focus:shadow-outline focus:outline-none background uppercase"
                  aria-label="Sign up"
                  title="Sign up">
                  Kết nối ví MetaMask
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
