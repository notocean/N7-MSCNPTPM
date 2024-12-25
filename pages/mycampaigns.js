import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Card, PopUp } from "../Components";

const mycampaigns = () => {
  const { donate, getUserCampaigns, getDonations } =
    useContext(CrowdFundingContext);

  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const userData = await userCampaignsData;
      setUsercampaign(userData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();
  return (
    <>
      <Card
        title="CHIẾN DỊCH CỦA TÔI"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          compaignType="chiến dịch của tôi"
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default mycampaigns;
