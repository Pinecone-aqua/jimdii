import users from "../utils/user.dummy.json";

export default function Users() {
	const test = users.filter((user) => user._id);
	console.log(test);

	return <div className="w-full h-full bg-neutral-500">users</div>;
}
