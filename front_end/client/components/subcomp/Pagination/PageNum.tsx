interface PropsType {
  page: number | string;
  currentPage: number;
}

export default function PageNum(props: PropsType) {
  const { page, currentPage } = props;
  console.log(page);
  console.log("current", currentPage);

  return (
    <div
      className={`${
        page === currentPage
          ? "bg-green-200 border-2 p-3 flex justify-center items-center text-black"
          : "bg-none border-2 p-3 flex justify-center items-center"
      }`}
    >
      {page}
    </div>
  );
}
