import { useEffect, useState } from "react";
import PageNum from "./subcomp/Pagination/PageNum";
import Link from "next/link";

export default function Pagination() {
  const [lastPageNum, setLastPageNum] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const testPageNum = 101;

  useEffect(() => {
    setLastPageNum(Math.ceil(testPageNum / 10));
  }, [testPageNum]);

  return (
    <div className="flex gap-3 h-10 m-5">
      {currentPage > 1 && (
        <Link href={"test"} onClick={() => setCurrentPage(currentPage - 1)}>
          <PageNum page={"Өмнөх"} currentPage={currentPage} />
        </Link>
      )}
      <Link href={"test"} onClick={() => setCurrentPage(currentPage)}>
        <PageNum page={currentPage} currentPage={currentPage} />
      </Link>
      <Link href={"test"} onClick={() => setCurrentPage(currentPage + 1)}>
        <PageNum page={currentPage + 1} currentPage={currentPage} />
      </Link>
      <Link href={"test"} onClick={() => setCurrentPage(currentPage + 2)}>
        <PageNum page={currentPage + 2} currentPage={currentPage} />
      </Link>
      {lastPageNum > currentPage + 2 && (
        <>
          <p className="">...</p>
          <Link href={"test"} onClick={() => setCurrentPage(lastPageNum)}>
            <PageNum page={lastPageNum} currentPage={currentPage} />
          </Link>
        </>
      )}
    </div>
  );
}
