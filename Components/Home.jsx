import React, { useState } from "react";

const Home = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    startDate: "",
    deadline: "",
    imageURL: "",
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const Data = await createCampaign(campaign);
      setCampaign({
        title: "",
        description: "",
        amount: "",
        startDate: "",
        deadline: "",
        imageURL: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.filePath) {
          setCampaign({
            ...campaign,
            imageURL: data.filePath, 
          });
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="relative px-24 py-10">
      <div className="flex items-center text-center justify-center">
        <div className="w-full px-20 text-center flex flex-col items-center justify-center">
          <h2
            className="mt-12 mb-8 font-sans text-5xl font-bold 
          text-black sm:text-5xl sm:leading-none"
          >
            GÂY QUỸ CỘNG ĐỒNG
          </h2>
          <div className="grid grid-cols-3 gap-10 mt-10 mb-14 text-base text-black md:text-lg text-justify mx-10">
            <p>
              Gây quỹ cộng đồng là một hình thức tài trợ dựa trên sự đóng góp từ cộng đồng để hỗ trợ các dự án, ý tưởng hoặc mục tiêu cụ thể.
            </p>
            <p>
              Thay vì phụ thuộc vào các nhà đầu tư lớn hoặc ngân hàng, các cá nhân hoặc tổ chức có thể kêu gọi sự giúp đỡ từ cộng đồng qua các nền tảng trực tuyến.
            </p>
            <p>
              Gây quỹ cộng đồng không chỉ cung cấp nguồn lực tài chính mà còn là cách để kiểm tra mức độ ủng hộ và sự quan tâm của cộng đồng đối với dự án.
            </p>
          </div>
          <div className="mt-4 mb-2 sm:m-4">
            <button
              className="inline-flex items-center justify-center w-48 h-12
              font-medium tracking-wide text-white transition duration-200
              rounded-lg bg-blue-500 font-bold uppercase"
            >
              <a href="/addcampaign" className="flex items-center justify-center w-full h-full">
                Tạo chiến dịch
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
