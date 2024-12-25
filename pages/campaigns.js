import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Card, PopUp } from "../Components";

const campaigns = () => {
  const {
    getCampaigns,
    donate,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      setAllcampaign(allData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();
  return (
    <>
      <Card
        title="TẤT CẢ CHIẾN DỊCH"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          compaignType = "tất cả chiến dịch"
          campaign={allcampaign[donateCampaign.pId]}
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default campaigns;
