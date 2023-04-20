import user from "../utils/user.test.json";

export default function Profile() {
  console.log(user);

  return (
    <div className="flex flex-col items-center">
      <picture className="w-1/2">
        <img src={user.profile_img} alt="" />
      </picture>
      <h1>Username</h1>
    </div>
  );
}
