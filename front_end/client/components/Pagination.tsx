import Link from "next/link";
import { useEffect, useState } from "react";
import PageBtn from "./Pagination/PageNum";
import axios from "axios";
import { useRouter } from "next/router";

export default function Pagination(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}fitness/pages`)
      .then((res) => setLastPage(res.data.length));
  }, []);

  useEffect(() => {
    console.log(router);
    const { page } = router.query;
    if (!page) return;
    const pageNum = Number(page);
    // if (pageNum < 1 || pageNum > lastPage) router.push("1");
    setCurrentPage(pageNum);
  }, [lastPage, router]);

  return (
    <div className="mx-auto">
      {lastPage > 1 && (
        <div className="flex justify-center gap-2 text-white">
          {currentPage !== 1 && (
            <Link
              href={`${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <PageBtn page={"Өмнөх"} currentPage={currentPage} />
            </Link>
          )}
          {currentPage > 2 && (
            <Link href={`1`} onClick={() => setCurrentPage(1)}>
              <PageBtn page={1} currentPage={currentPage} />
            </Link>
          )}
          {currentPage > 3 && "..."}
          {currentPage > 1 && (
            <Link
              href={`${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <PageBtn page={currentPage - 1} currentPage={currentPage} />
            </Link>
          )}

          <Link href={`${currentPage}`}>
            <PageBtn page={currentPage} currentPage={currentPage} />
          </Link>

          {lastPage > currentPage && (
            <Link
              href={`${currentPage + 1}`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <PageBtn page={currentPage + 1} currentPage={currentPage} />
            </Link>
          )}
          {lastPage - 2 > currentPage && "..."}
          {lastPage - 1 > currentPage && (
            <Link href={`${lastPage}`} onClick={() => setCurrentPage(lastPage)}>
              <PageBtn page={lastPage} currentPage={currentPage} />
            </Link>
          )}
          {currentPage !== lastPage && (
            <Link
              href={`${currentPage + 1}`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <PageBtn page={"Дараах"} currentPage={currentPage} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
