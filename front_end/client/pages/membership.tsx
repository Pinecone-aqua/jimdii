export default function Membership() {
  return (
    <div className="membership text-white flex flex-col justify-center items-center gap-40 relative min-h-screen">
      <h2 className="text-5xl mt-20">Choose your planning</h2>
      <div className="flex gap-5">
        <div className="offer">
          <div className="border-b border-white h-1/2 flex flex-col justify-center items-center">
            <h3 className="text-3xl">Silver Membership</h3>
            <div>
              <p>$</p>
              <p>30</p>
            </div>
            <p>Short-term trial for beginners</p>
            <p>Valid for one month</p>
            <button className="mainButton">Select</button>
          </div>
          <div>
            <ul>
              <li>im a benefit</li>
              <li>im a benefit</li>
              <li>im a benefit</li>
            </ul>
          </div>
        </div>
        <div className="offer">
          <div className="border-b border-white h-1/2 flex flex-col justify-center items-center">
            <h3 className="text-3xl">Gold Membership</h3>
            <div>
              <p>$</p>
              <p>40</p>
              <p>Every month</p>
            </div>

            <p>Ideal for advanced trainers</p>
            <p>Valid for 12 months</p>
            <button className="mainButton">Select</button>
          </div>
          <div>
            <ul>
              <li>im a benefit</li>
              <li>im a benefit</li>
              <li>im a benefit</li>
            </ul>
          </div>
        </div>
        <div className="offer">
          <div className="border-b border-white h-1/2 flex flex-col justify-center items-center">
            <h3 className="text-3xl">Platinum Membership</h3>
            <div>
              <p>$</p>
              <p>50</p>
            </div>
            <p>Short-term trial for beginners</p>
            <p>Perfect for committed trainers</p>
            <button className="mainButton">Select</button>
          </div>
          <div>
            <ul>
              <li>im a benefit</li>
              <li>im a benefit</li>
              <li>im a benefit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
