import React, { useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Home } from "../Components";

const index = () => {
  const {
    titleData,
    createCampaign,
  } = useContext(CrowdFundingContext);
  
  return (
    <>
      <Home titleData={titleData} createCampaign={createCampaign} />
    </>
  );
};

export default index;
