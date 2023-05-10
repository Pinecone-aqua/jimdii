import { useUser } from "@/context/UserContext";
import { useState } from "react";

export default function UserDetail() {
  const [editUserDetail, setEditUserDetail] = useState(false);
  const { currentUser } = useUser();

  function editHandler() {
    if (!editUserDetail) {
      setEditUserDetail(true);
      console.log("editable");

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
    <div className="p-5">
      <form onSubmit={submitHandler} className="flex flex-col gap-2 my-2">
        <button
          onClick={editHandler}
          className="py-2 px-4 border rounded-lg active:opacity-50 w-32"
        >
          {editUserDetail ? "Save" : "Edit"}
        </button>
        <input
          type="text"
          className={`focus:outline-0 p-2 bg-${
            editUserDetail ? "white" : "black"
          } text-${editUserDetail ? "black" : "white"}`}
          readOnly={editUserDetail ? false : true}
          defaultValue={currentUser?.name}
          name="username"
          onChange={() => console.log("test")}
        />
      </form>
    </div>
  );
}
