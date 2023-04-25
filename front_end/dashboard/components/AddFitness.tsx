import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

interface PropType {
  setAddFitness: Dispatch<SetStateAction<boolean>>;
}

export default function AddFitness(prop: PropType) {
  const { setAddFitness } = prop;
  const [files, setFiles] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();

    console.log(e.target.file.files[0]);
    const imageFrom = new FormData();
    imageFrom.append("file", e.target.file.files[0]);
    axios.post("http://localhost:7003/fitness/test", imageFrom);
  }

  return (
    <div className="w-screen h-screen top-0 left-0 bg-gray-300/50 absolute flex justify-center items-center">
      <div className="w-full h-full" onClick={() => setAddFitness(false)} />
      <div className="w-10/12 h-5/6 bg-white absolute">
        <form className="p-5" onSubmit={submitHandler}>
          <>
            <input
              type="file"
              name="file"
              multiple
              onChange={(e) =>
                e.target.files &&
                typeof e.target.files === "object" &&
                setFiles(Object.values(e.target.files))
              }
            />
            <div className="overflow-x-scroll snap-x flex">
              {files?.map((file, i) => (
                <picture key={i} className="m-10 snap-center">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="h-20 border-2 border-red-500"
                  />
                  <p className="w-1/2 truncate ...">{file.name}</p>
                </picture>
              ))}
            </div>
          </>
          <div className=" bg-black">a</div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
