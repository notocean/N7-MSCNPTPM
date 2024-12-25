import React, { useState, useEffect } from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentCampaign, setCurrenCampaign] = useState(allcampaign);
  const categories = ["Tất cả", "Đã kết thúc", "Đang diễn ra", "Sắp diễn ra"];

  const categoryOptions = categories.map((category) => ({
    key: category.toLowerCase(),
    value: category,
    text: category,
  }));

  // Xử lý khi người dùng chọn một nhóm câu hỏi
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const currentDate = new Date();
        let campaigns = await allcampaign;
        if (selectedCategory === "Đã kết thúc") {
          campaigns = allcampaign?.filter((campaign) => campaign.deadline < currentDate);
        }
        else if (selectedCategory === "Đang diễn ra") {
          campaigns = allcampaign?.filter((campaign) => campaign.startDate < currentDate && campaign.deadline > currentDate);
        }
        else if (selectedCategory === "Sắp diễn ra") {
          campaigns = allcampaign?.filter((campaign) => campaign.startDate > currentDate);
        }
        setCurrenCampaign(campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [selectedCategory, allcampaign]);

  return (
    <div className="px-4 pt-4 pb-10 mx-auto lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="mb-4 grid grid-cols-2">
        <p className="text-2xl font-bold leading-S h-16 flex items-center">
          {" "}
          {title}{" "}
        </p>
        <div className="w-full flex items-center justify-end">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="block py-2 pl-4 pr-10 text-base border-2 border-gray-300 rounded-md text-xl"
          >
            {categoryOptions.map((option) => (
              <option key={option.key} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {currentCampaign?.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModel(true))}
            key={i + 1}
            className={`cursor-pointer border-4 overflow-hidden transition-shadow
            duration-300 bg-white rounded-md p-2 
            ${campaign.deadline < new Date() ? 'border-red-300' :
              campaign.startDate < new Date() && campaign.deadline > new Date() ? 'border-green-300' : 'border-gray-300'
            }`}
          >
            <img
              src={campaign.imageURL}
              className="object-cover w-full h-64 rouned"
              alt=""
            />
            <div className="py-5 pl-2">
              {campaign.deadline < new Date() && (
                <p className="mb-2 text-md font-semibold uppercase text-red-500">
                  Đã kết thúc
                </p>
              )}
              {campaign.startDate < new Date() && campaign.deadline > new Date() && (
                <p className="mb-2 text-md font-semibold uppercase text-green-500">
                  Số ngày còn lại: {daysLeft(campaign.deadline)}
                </p>
              )}
              {campaign.startDate > new Date() && (
                <p className="mb-2 text-md font-semibold uppercase text-gray-500">
                  Sắp diễn ra
                </p>
              )}
              <p className="text-2xl font-bold leading-5 py-3">
                {campaign.title}
              </p>
              <p className="mb-4 text-gray-700"> {campaign.description} </p>
              <div className="flex space-x-4">
                <p className="font-semibold">Mục tiêu: {campaign.target} ETH</p>
                <p className="font-semibold">
                  Đã nhận được: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
