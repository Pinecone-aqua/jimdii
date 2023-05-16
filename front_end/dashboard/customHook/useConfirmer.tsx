export function useConfirm() {
  function modal(): JSX.Element {
    return (
      <div className="w-screen h-screen top-0 left-0 bg-gray-300/50 absolute flex justify-center items-center">
        <div className="w-full h-full" />
        <div className="absolute border bg-white px-4 py-2">
          <p className="m-2">Confirm</p>
          <div className="">
            <button
              className="p-2 text-black border"
              onClick={() => console.log("confirm")}
            >
              Confirm
            </button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  return { modal: modal() };
}
