import MainLogo from "@/components/subcomp/MainLogo";
import React from "react";

export default function signUpGym(): JSX.Element {
  interface FitnessType {
    name: string;
    description: string;
    price: number;
  }

  function submitHandler(e: any) {
    e.preventDefault();

    const newFitness = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: {
        oneMonth: e.target.oneMonth.value,
        year: e.target.year.value,
      },
      address: {
        district: e.target.districts.value,
        descripton: e.target.addressDescription.value,
      },
      timetable: {
        Monday: e.target.workDay.value,
        Tuesday: e.target.workDay.value,
        Wednesday: e.target.workDay.value,
        Thursday: e.target.workDay.value,
        Friday: e.target.workDay.value,
        Saturday: e.target.weekend.value,
        Sunday: e.target.weekend.value,
      },
      discount: [
        {
          name: e.target.discountName.value,
          discount: e.target.discountPer.value,
        },
      ],
      spec: {
        wifi: e.target.specWifi.value,
        shower: e.target.specShower.value,
        parking: e.target.specParking.value,
      },
      contact: {
        phone_number: e.target.phonenumber.value,
        social: e.target.social.value,
      },
    };
    console.log(newFitness);
    // fetch("http://localhost:3030/fitness/addFitness", {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify(newFitness),
    // });
  }

  return (
    <div className="w-full h-fit bg-slate-300">
      <div className="w-[50%] mx-auto py-[35px]">
        <div className="flex">
          <div className="hidden lg:inline w-[50%] rounded-l-lg">
            <div className="w-full h-full flex justify-center items-center bg-[#4D9799] rounded-l-lg  ">
              <MainLogo />
            </div>
          </div>

          <div className="bg-slate-700 text-white rounded-r-lg w-[50%]">
            <div className=" text-white flex justify-center items-center h-[50px] text-lg font-bold rounded-t-lg p-[30px]">
              <h2>Gym Registration Form</h2>
            </div>
            <form onSubmit={submitHandler} className="w-[80%] mx-auto">
              <label className="block">
                <h2>НЭР :</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Gym Name"
                  className="w-full bg-slate-700 border rounded-lg p-[5px]"
                  required
                />
              </label>
              <label>
                <h2>ДЭЛГЭРЭНГҮЙ :</h2>

                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full bg-slate-700 border rounded-lg p-[5px]"
                  required
                />
              </label>
              <label>
                <h2>ҮНЭ :</h2>

                <div className="flex justify-between">
                  <input
                    type="text"
                    name="oneMonth"
                    placeholder="Month"
                    className="w-[48%] bg-slate-700 border rounded-lg p-[5px]"
                    required
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    className="w-[48%] bg-slate-700 border rounded-lg p-[5px]"
                  />
                </div>
              </label>
              <label className="block ">
                <h2>ADDRESS :</h2>
                <select
                  name="districts"
                  id="districts"
                  className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                >
                  <option value="Бүх дүүрэг/сум..." className="w-[50%]">
                    Дүүрэг...
                  </option>
                  <option value="Bayangol">Bayangol</option>
                  <option value="Khan-uul">Khan-uul</option>
                  <option value="Bayanzurkh">Bayanzurkh</option>
                  <option value="Sukhbaatar">Sukhbaatar</option>
                  <option value="Songino-Khairkhan">Songino-Khairkhan</option>
                  <option value="Chingeltei">Chingeltei</option>
                </select>
                <h2>ХАЯГ :</h2>
                <input
                  type="text"
                  name="addressDescription"
                  placeholder="Description"
                  className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                />
              </label>
              <label className="block">
                <h2>ЦАГИЙН ХУВААРЬ:</h2>

                <div>
                  <h2>Ажлын өдөр:</h2>

                  <input
                    type="text"
                    name="workDay"
                    id="workDay"
                    placeholder="Хэдээс хэдэн цаг хүртэл"
                    className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                  />
                </div>
                <div>
                  <h2>Амралтын өдөр:</h2>

                  <input
                    type="text"
                    name="weekend"
                    id="weekend "
                    placeholder="Хэдээс хэдэн цаг хүртэл"
                    className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                  />
                </div>
              </label>
              <label>
                <h2>ХӨНГӨЛӨЛТ :</h2>

                <div>
                  Хөнгөлөлтийн нэр:
                  <input
                    type="text"
                    name="discountName"
                    placeholder="Discount name"
                    className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                  />
                </div>
                <div>
                  Хөнгөлөлтийн хувь:
                  <input
                    type="text"
                    name="discountPer"
                    placeholder="Discount Percentage"
                    className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                  />
                </div>
              </label>
              <label>
                <h2>НЭМЭЛТ :</h2>
                <div className="flex gap-[20px]">
                  <div className="flex gap-[10px]">
                    <h3>Wifi :</h3>
                    <input type="checkbox" name="specWifi" />
                  </div>

                  <h3>Shower: </h3>
                  <input type="checkbox" name="specShower" />
                  <h3>Parking: </h3>
                  <input type="checkbox" name="specParking" />
                </div>
              </label>
              <label>
                
                <div>
                  <h3>УТАСНЫ ДУГААР :</h3>
                  <input
                    type="number"
                    name="phonenumber"
                    placeholder="Phone Number"
                    className="text-white w-full bg-slate-700 border rounded-lg p-[5px]"
                  />
                  <h3>СОШИАЛ :</h3>
                  <input type="url" name="social" placeholder="Social Link" className="text-white w-full bg-slate-700 border rounded-lg p-[5px]" />
                </div>
              </label>
              {/* <label>
                   Image: 
                    <input type="file" name="Upload Images" multiple placeholder="Image" required/>
                </label> */}
              <button type="submit" className="bg-[#4D9799] my-[20px] p-[15px] w-full rounded-lg">
                Add New Gym
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
