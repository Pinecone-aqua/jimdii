export default function Profile() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-6">
        <div className="relative flex flex-col">
          <div className="w-full h-32 bg-blue-200">bg image</div>
          <div className="absolute top-16 left-10 flex items-center text-lg text-black ">
            <picture className="w-32 h-32 rounded-[100%] bg-black">
              {/* <img
                src=""
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              /> */}
            </picture>
            <p>User name</p>
          </div>
          <nav>
            <ul className="flex bg-gray-700 h-[100px]">
              <li>Profile</li>
              <li>Membership</li>
            </ul>
          </nav>
        </div>
        <div className="">body</div>
      </div>
    </div>
  );
}
