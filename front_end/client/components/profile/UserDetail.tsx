import { useUser } from "@/context/UserContext";
import { useState } from "react";

export default function UserDetail() {
  const [editUserDetail, setEditUserDetail] = useState(false);
  const [editedDetail, setEditedDetail] = useState({});
  const { currentUser } = useUser();

  const inputStyle = `focus:outline-main mx-2 p-2 bg-${
    editUserDetail ? "white" : "black"
  } text-${editUserDetail ? "black" : "white"} min-w-[200px] caret-main`;
  const labelStyle =
    "flex flex-col md:flex-row md:items-center gap-2 md:w-1/2 lg:w-1/4 md:justify-between";
  const labelTextStyle = "w-1/2";

  console.log(currentUser);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function handleEditState(e: any) {
		if (e.target.innerText === EditedState.default) {
			setEditState(EditedState.edited);
			return;
		}
		if (e.target.innerText === EditedState.edited) {
			console.log("asd");

			try {
				const token = Cookies.get("token");
				if (!token) return;
				console.log(token);

      return;
    } else {
      setEditUserDetail(false);
      console.log("saved");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();
    if (editUserDetail) return;
    console.log(e.target.username.value);
  }

  return (
    <div className="p-1 md:p-5">
      <div onSubmit={submitHandler} className="flex flex-col gap-4 my-2">
        <button
          onClick={editHandler}
          className="py-2 px-4 border rounded-lg active:opacity-50 w-32"
        >
          {editUserDetail ? "Save" : "Edit"}
        </button>
        <label className={labelStyle}>
          <p className={labelTextStyle}>Username:</p>
          <input
            type="text"
            className={inputStyle}
            readOnly={editUserDetail ? false : true}
            defaultValue={currentUser?.name}
            name="username"
            onChange={(e) =>
              setEditedDetail({ ...editedDetail, name: e.target.value })
            }
          />
        </label>
        <label className={labelStyle}>
          <p className={labelTextStyle}>Email:</p>
          <input
            type="text"
            className={inputStyle}
            readOnly={editUserDetail ? false : true}
            defaultValue={currentUser?.email}
            name="birthdate"
            onChange={(e) =>
              setEditedDetail({ ...editedDetail, email: e.target.value })
            }
          />
        </label>
        <label className={labelStyle}>
          <p className={labelTextStyle}>Birthdate:</p>
          <input
            type="date"
            className={inputStyle}
            readOnly={editUserDetail ? false : true}
            defaultValue={currentUser?.birth_date}
            name="birthdate"
            onChange={(e) =>
              setEditedDetail({ ...editedDetail, birthDate: e.target.value })
            }
          />
        </label>
      </div>
    </div>
  );
}
