import React, { useEffect, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo } from "./index";

const Header = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (!currentAccount) {
        await connectWallet();
      }
    };

    checkWalletConnection();
  }, [currentAccount, connectWallet]);

  return (
    <div className="bg-black">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center mr-8 py-3">
              <Logo color="text-white" />
              <span className="ml-2 text-lg font-bold tracking-wide text-gray-100 uppercase">
                Gây quỹ cộng đồng
              </span>
            </a>
            <a href="/campaigns" className="inline-flex items-center mr-8 py-3">
              <span className="ml-2 text-lg font-bold tracking-wide text-gray-100 uppercase">
                Tất cả chiến dịch
              </span>
            </a>
            <a href="/mycampaigns" className="inline-flex items-center mr-8 py-3">
              <span className="ml-2 text-lg font-bold tracking-wide text-gray-100 uppercase">
                Chiến dịch của tôi
              </span>
            </a>
            <a href="/addcampaign" className="inline-flex items-center mr-8 py-3">
              <span className="ml-2 text-lg font-bold tracking-wide text-gray-100 uppercase">
                Tạo chiến dịch
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
