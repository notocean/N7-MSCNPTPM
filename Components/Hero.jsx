import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const Data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""/>
      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163">
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676
            88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036
            162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"/>
        </svg>
        <div
          className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl
        md:max-w-full lg:max-w-screen-xl md:pxp-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2
                className="max-w-lg mb-6 font-sans text-3xl font-bold trachking-tight
              text-white sm:text-5xl sm:leading-none">
                HUY ĐỘNG VỐN
              </h2>
              <h2
                className="max-w-lg mb-6 font-sans text-3xl font-bold trachking-tight
              text-white sm:text-5xl sm:leading-none">
                TỪ CỘNG ĐỒNG
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg text-justify">
              Gây quỹ cộng đồng là một hình thức huy động tài chính từ cộng đồng nhằm hỗ trợ cho các dự án, từ thiện, ý tưởng hoặc mục tiêu cụ thể. 
              <br />
              Gây quỹ cộng đồng không chỉ giúp tài chính mà còn xây dựng một mạng lưới hỗ trợ mạnh mẽ, khuyến khích sự tham gia và kết nối giữa các cá nhân có cùng chí hướng.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3
                  className="mb-4 text-xl font-semibold sm:text-center sm:mb-6
                sm:text-2xl">
                  CHIẾN DỊCH
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium">
                      Tiêu đề
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="tiêu đề"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-3 mb-2 transition duration-200
                      bg-white border border-gray-300 rounded shadow-sm appearance-none
                      focus:border-deep-purple-accent-400 focus:outline-none
                      focus:shadow-outline"
                      id="firstName"
                      name="firstName"/>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium">
                      Mô tả
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="mô tả"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition
                      duration-200 bg-white border border-gray-300 rounded shadow-sm
                      appearance-none focus:border-deep-purple-accent-400
                      focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"/>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      Số tiền mục tiêu
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }
                      placeholder="số tiền"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition
                      duration-200 bg-white border border-gray-300 rounded shadow-sm
                      appearance-none focus:border-deep-purple-accent-400
                      focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"/>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      Ngày mục tiêu
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }
                      placeholder="ngày"
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition
                      duration-200 bg-white border border-gray-300 rounded shadow-sm
                      appearance-none focus:border-deep-purple-accent-400
                      focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"/>
                  </div>
                  <div className="mt-4 mb-2 sm:m-4">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12
                      px-6 fon-medium tracking-wide text-while transition duration-200
                      rounded shadow-md bg-deep-purple-accent-400
                      hover:bg-deep-purple-accent-700 focus:shadow-outline
                      focus:outline-none newColor">
                      <strong>Tạo chiến dịch</strong>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Tạo chiến dịch của bạn để huy động vốn.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
