import { useEffect, useState } from "react";
import { PageType } from "@/utils/types";
import { useRouter } from "next/router";
import {
  IoIosFitness,
  IoMdPerson,
  IoMdSettings,
  IoIosHome,
} from "react-icons/io";

const pages: PageType[] = [
  {
    name: "Home",
    url: "/",
    icon: <IoIosHome size={"1.5em"} />,
  },
  {
    name: "Users",
    url: "/users",
    icon: <IoMdPerson size={"1.5em"} />,
  },
  {
    name: "Fitness",
    url: "/fitness",
    icon: <IoIosFitness size={"1.5em"} />,
  },
  {
    name: "Setting",
    url: "/setting",
    icon: <IoMdSettings size={"1.5em"} />,
  },
];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<PageType | null>(pages[0]);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("currentPage")) {
      const btn: string | null = localStorage.getItem("currentPage");
      const checkStorage = pages.find((page) => page.name === btn);
      console.log(checkStorage);

      if (checkStorage) {
        setCurrentPage(checkStorage);
        router.push(checkStorage.url);
      } else {
        router.push("/");
      }
    }
  }, []);

  const activeBtn = "bg-white text-xl";
  const unactiveBtn = "text-white hover:bg-red-900";

  function pageHandler(page: PageType) {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.name);
    router.push(page.url);
  }

  return (
    <nav className="w-full">
      <ul className="w-full">
        {pages.map((page, i) => (
          <li
            className={`${
              currentPage?.name == page.name ? activeBtn : unactiveBtn
            } flex items-center w-full px-4 py-2 rounded-l-lg m-6 justify-center cursor-pointer `}
            onClick={() => pageHandler(page)}
            key={i}
          >
            {page.icon}
            <p className="ml-5 w-4/5">{page.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
