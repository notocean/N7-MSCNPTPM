import React, { useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Add } from "../Components";

const addcampaign = () => {
  const {
    titleData,
    createCampaign,
  } = useContext(CrowdFundingContext);
  
  return (
    <>
      <Add titleData={titleData} createCampaign={createCampaign} />
    </>
  );
};

export default addcampaign;
