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
    <div className="w-full h-[100vh] bg-slate-300">
      <div className="w-[50%] mx-auto pt-[35px]">
        <div className="bg-black text-white flex justify-center items-center h-[50px] text-lg font-bold rounded-t-lg">
          Gym Registration Form
        </div>
        <div className="bg-slate-200">
          <form onSubmit={submitHandler} className="w-[80%] mx-auto">
            <label className="block">
              Name:
              <input type="text" name="name" placeholder="Name" required />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </label>
            <label>
              Price:
              <input type="text" name="oneMonth" placeholder="Month" required />
              <input type="text" name="year" placeholder="Year" />
            </label>
            <label className="block">
              Address:
              <select name="districts" id="districts">
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
              Хаяг：
              <input
                type="text"
                name="addressDescription"
                placeholder="Description"
              />
            </label>
            <label className="block">
              Цагийн хуваарь:
              <div>
                Ажлын өдөр:
                <input
                  type="text"
                  name="workDay"
                  id="workDay"
                  placeholder="Working Day"
                />
              </div>
              <div>
                Амралтын өдөр:
                <input
                  type="text"
                  name="weekend"
                  id="weekend "
                  placeholder="Weekend"
                />
              </div>
            </label>
            <label>
              Хөнгөлөлт:
              <div>
                Хөнгөлөлтийн нэр:
                <input
                  type="text"
                  name="discountName"
                  placeholder="Discount name"
                />
              </div>
              <div>
                Хөнгөлөлтийн хувь:
                <input
                  type="text"
                  name="discountPer"
                  placeholder="Discount Percentage"
                />
              </div>
            </label>
            <label>
              Нэмэлт:
              <div className="flex gap-[5px]">
                <h3>Wifi: </h3>
                <input type="checkbox" name="specWifi" />
                <h3>Shower: </h3>
                <input type="checkbox" name="specShower" />
                <h3>Parking: </h3>
                <input type="checkbox" name="specParking" />
              </div>
            </label>
            <label>
              Холбогдох:
              <div>
                <h3>Утасны дугаар</h3>
                <input
                  type="number"
                  name="phonenumber"
                  placeholder="Phone Number"
                />
                <h3>Сошиал</h3>
                <input type="url" name="social" placeholder="Social Link" />
              </div>
            </label>
            {/* <label>
                   Image: 
                    <input type="file" name="Upload Images" multiple placeholder="Image" required/>
                </label> */}
            <button type="submit">Add New Gym</button>
          </form>
        </div>
      </div>
    </div>
  );
}
