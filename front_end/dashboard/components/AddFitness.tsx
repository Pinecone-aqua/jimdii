import axios from "axios";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface PropType {
  setAddFitness: Dispatch<SetStateAction<boolean>>;
}

export default function AddFitness(prop: PropType) {
  const { setAddFitness } = prop;
  const [files, setFiles] = useState<File[] | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();
    // const imageArr = [];
    if (e.target.file.files) {
      const imageFrom = new FormData();
      const files: File[] = e.target.file.files;
      Array.from(files).forEach((file) => imageFrom.append("image", file));

      // imageFrom.append("name", e.target.title.value);
      console.log(e.target.file.files);
      axios
        .post("http://localhost:7003/fitness/test", imageFrom)
        .then((res) => console.log(res));
    }
  }

  function showImages(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files: FileList = e.target.files;
      setFiles(Object.values(files));
    }
  }

  return (
    <div className="w-screen h-screen top-0 left-0 bg-gray-300/50 absolute flex justify-center items-center">
      <div className="w-full h-full" onClick={() => setAddFitness(false)} />
      <div className="w-10/12 h-5/6 bg-white absolute">
        <form className="p-5" onSubmit={submitHandler}>
          <>
            <input type="file" name="file" multiple onChange={showImages} />
            <div className="overflow-x-scroll snap-x flex">
              {files?.map((file: File, i: number) => (
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
          <div>
            <input type="text" className="bg-gray-300" name="title" />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
