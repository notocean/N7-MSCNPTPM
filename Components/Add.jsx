import React, { useState } from "react";

const Add = ({ titleData, createCampaign }) => {
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
      formData.append("image", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
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
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <div className="relative px-10 pt-8 pb-8 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pxp-24">
          <div className="flex flex-col items-center justify-between">
            <div className="w-full xl:px-8 xl:w-10/12">
              <div className="bg-white rounded-xl shadow-2xl px-10 py-6 border-2 border-gray-300">
                <h3 className="mb-4 text-xl font-bold sm:text-center sm:text-2xl">
                  CHIẾN DỊCH
                </h3>
                <form
                  onSubmit={(e) => createNewCampaign(e)}
                  className="grid grid-cols-1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="title"
                        className="inline-block mb-1 font-medium"
                      >
                        Tiêu đề
                      </label>
                      <input
                        value={campaign.title}
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            title: e.target.value,
                          })
                        }
                        placeholder="Tiêu đề"
                        required
                        type="text"
                        className="w-full h-12 px-3 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="amount"
                        className="inline-block mb-1 font-medium"
                      >
                        Số tiền mục tiêu
                      </label>
                      <input
                        value={campaign.amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!isNaN(value) && value.trim() !== "") {
                            setCampaign({
                              ...campaign,
                              amount: value,
                            });
                          } else {
                            setCampaign({ amount: "" });
                          }
                        }}
                        placeholder="Số tiền mục tiêu (ETH)"
                        required
                        type="text"
                        className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="amount"
                        name="amount"
                      />
                    </div>
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium"
                    >
                      Mô tả
                    </label>
                    <input
                      value={campaign.description}
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="Mô tả"
                      required
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="startDate"
                        className="inline-block mb-1 font-medium"
                      >
                        Ngày bắt đầu
                      </label>
                      <input
                        value={campaign.startDate}
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            startDate: e.target.value,
                          })
                        }
                        placeholder="Ngày"
                        required
                        type="date"
                        // min={new Date().toISOString().split("T")[0]}
                        className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="startDate"
                        name="startDate"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="deadline"
                        className="inline-block mb-1 font-medium"
                      >
                        Ngày mục tiêu
                      </label>
                      <input
                        value={campaign.deadline}
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            deadline: e.target.value,
                          })
                        }
                        placeholder="Ngày"
                        required
                        type="date"
                        // min={campaign.startDate}
                        className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="deadline"
                        name="deadline"
                      />
                    </div>
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="image"
                      className="inline-block mb-1 font-medium"
                    >
                      Ảnh minh họa
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      placeholder="Ảnh"
                      required
                      className="w-full h-12 pt-2 pl-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none"
                      id="image"
                      name="image"
                    />
                  </div>

                  <div className="mt-4 mb-2 sm:m-4 flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-5/12 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md border-2 bg-blue-500 font-bold"
                    >
                      Tạo chiến dịch
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 sm:text-sm text-center">
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

export default Add;
