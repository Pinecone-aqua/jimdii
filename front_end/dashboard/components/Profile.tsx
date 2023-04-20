import user from "../utils/user.test.json";

export default function Profile() {
  console.log(user);

  return (
    <div className="flex flex-col items-center mb-6">
      <picture className="w-1/2">
        <img src={user.profile_img} alt="" />
      </picture>
      <h1 className="text-white">Username</h1>
    </div>
  );
}
