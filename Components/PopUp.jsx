import React, { useState, useEffect } from "react";

const PopUp = ({
  compaignType,
  setOpenModel,
  donate,
  donateFunction,
  getDonations,
  campaign,
}) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setallDonationData] = useState();

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const donationsListData = getDonations(donate.pId);
    return async () => {
      const donationData = await donationsListData;
      setallDonationData(donationData);
    };
  }, []);

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden
      overflow-y-auto fixed inset-0 z-50"
      >
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div
            className="rounded-lg shadow-lg relative flex flex-col w-full
          bg-white border-2 border-gray-300"
          >
            <div
              className="flex items-start justify-between p-5 border-b border-solid
            border-state-200 rounded-t"
            >
              <h3 className="text-3xl font-semibold"> {donate.title} </h3>
            </div>
            <div className="relative p-6 pt-1 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {donate.description}
              </p>
              {(compaignType !== "chiến dịch của tôi" && campaign.startDate < new Date() && campaign.deadline > new Date()) && (
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Số tiền"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200
                  bg-white border border-gray-30 rounded shadow-sm appearance-none
                  focus:border-deep-purple-accent-400 focus:outline-none
                  focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                />
              )}

              {compaignType === "chiến dịch của tôi" && (
                <div>
                  <p className="text-lg font-semibold my-4 text-center uppercase">
                    Lịch sử quyên tặng
                  </p>
                  <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-center border border-gray-300">STT</th>
                        <th className="px-4 py-2 text-center border border-gray-300">
                          Người quyên tặng
                        </th>
                        <th className="px-4 py-2 text-center border border-gray-300">
                          Số tiền (ETH)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(allDonationData) &&
                      allDonationData.length > 0 ? (
                        <>
                          {allDonationData.map((donate, i) => (
                          <tr key={i} className="border-b">
                            <td className="px-4 py-2 text-center border border-gray-300">{i + 1}</td>
                            <td className="px-4 py-2 text-center border border-gray-300">{donate.donator}</td>
                            <td className="px-4 py-2 text-right border border-gray-300">{donate.donation}</td>
                          </tr>
                          ))}
                          <tr className="font-bold">
                            <td colSpan="2" className="px-4 py-2 text-center border border-gray-300">Tổng</td>
                            <td className="px-4 py-2 text-right border border-gray-300">
                              {allDonationData.reduce((total, donate) => total + parseFloat(donate.donation || 0), 0)}
                            </td>
                          </tr>
                        </>
                      ) : (
                        <tr>
                          <td colSpan="3" className="px-4 py-2 text-center">
                            Không có dữ liệu quyên tặng
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {compaignType !== "chiến dịch của tôi" && (
                <>
                {campaign.deadline < new Date() && (
                  <p className="text-lg font-semibold my-4 text-center uppercase text-red-500">
                    Chiến dịch đã kết thúc
                  </p>
                )}
                {campaign.startDate > new Date() && (
                  <p className="text-lg font-semibold my-4 text-center uppercase text-gray-600">
                    Chiến dịch sẽ bắt đầu vào ngày {new Date(campaign.startDate).toLocaleDateString()}
                  </p>
                )}
                </>
              )}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="border-2 text-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModel(false)}
              >
                Đóng
              </button>
              {(compaignType !== "chiến dịch của tôi" && campaign.startDate < new Date() && campaign.deadline > new Date()) && (
                <button
                  className="bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 ml-4 rounded shadow mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => createDonation()}
                >
                  Quyên tặng
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
