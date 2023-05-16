import { useUser } from "@/context/UserContext";
import { FormInputProps, UserType } from "@/util/types";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

enum EditedState {
  edited = "save",
  canceled = "cancel",
  default = "edit",
}

export default function UserDetail() {
  const [editState, setEditState] = useState<EditedState>(EditedState.default);
  const [userDetailState, setUserDetailState] = useState<UserType>();
  const [editedDetails, setEditedDetails] = useState<object | null>(null);

  const { currentUser } = useUser();

  const inputStyle = `focus:outline-main mx-2 p-2 bg-${
    editState === EditedState.edited ? "white" : "black"
  } text-${
    editState === EditedState.edited ? "black" : "white"
  } min-w-[300px] caret-main`;

  useEffect(() => {
    if (currentUser) {
      setUserDetailState(currentUser);
    }
  }, [currentUser]);

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

        axios
          .patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}user/editMyDetail`,
            editedDetails,
            {
              headers: { Authorization: token },
            },
          )
          .then(({ data }) => console.log(data))
          .catch((err) => console.log(err));
        setEditState(EditedState.default);
      } catch (err) {
        console.log(err);
      }
      return;
    }
    if (e.target.value === EditedState.canceled && currentUser) {
      setUserDetailState(currentUser);
      setEditedDetails(null);
      setEditState(EditedState.default);
      return;
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedDetails({ ...editedDetails, [e.target.name]: e.target.value });
  }

  return (
    <div className="p-1 lg:p-5">
      <form className="flex flex-col gap-4 my-2">
        <div className="flex gap-8">
          <button
            type="button"
            onClick={handleEditState}
            disabled={false}
            className={`py-2 px-4 border rounded-lg active:opacity-50 w-32 ${
              editState === EditedState.default || editedDetails
                ? "bg-main"
                : "opacity-50"
            }`}
          >
            {editState}
          </button>
          {editState === EditedState.edited && (
            <input
              type="button"
              className="py-2 px-4 border rounded-lg active:opacity-50 w-32 cursor-pointer"
              onClick={handleEditState}
              value={EditedState.canceled}
            />
          )}
        </div>
        <FormInput
          type="text"
          inputStyle={inputStyle}
          readOnly={editState !== EditedState.edited}
          defaultValue={userDetailState?.username}
          name="username"
          onChange={handleInputChange}
        />
        <FormInput
          type="email"
          inputStyle={inputStyle}
          readOnly={editState !== EditedState.edited}
          defaultValue={userDetailState?.email}
          name="email"
          onChange={handleInputChange}
        />
        <FormInput
          type="date"
          inputStyle={inputStyle}
          readOnly={editState !== EditedState.edited}
          defaultValue={userDetailState?.birth_date}
          name="birthdate"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

function FormInput(props: FormInputProps) {
  const { type, inputStyle, readOnly, defaultValue, name, onChange } = props;
  console.log(readOnly);

  return (
    <label className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 md:px-20">
      <span className="min-w-[100px]">
        {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}:
      </span>
      <input
        type={type}
        className={inputStyle}
        readOnly={readOnly}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        aria-label={name}
        aria-describedby={`${name}-label`}
      />
    </label>
  );
}
