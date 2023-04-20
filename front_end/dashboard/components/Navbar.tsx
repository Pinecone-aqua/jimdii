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
    icon: <IoIosHome size={"2em"} />,
  },
  {
    name: "Users",
    url: "/users",
    icon: <IoMdPerson size={"2em"} />,
  },
  {
    name: "Fitness",
    url: "/fitness",
    icon: <IoIosFitness size={"2em"} />,
  },
  {
    name: "Settings",
    url: "/setting",
    icon: <IoMdSettings size={"2em"} />,
  },
];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string | null>("Home");
  const route = useRouter();

  useEffect(() => {
    if (localStorage.getItem("currentPage")) {
      const btn: string | null = localStorage.getItem("currentPage");
      setCurrentPage(btn);
    }
  }, []);

  const activeBtn = "bg-white text-xl";
  const unactiveBtn = "text-white";

  function pageHandler(page: PageType) {
    setCurrentPage(page.name);
    localStorage.setItem("currentPage", page.name);
    route.push(page.url);
  }
  return (
    <nav className="w-full">
      <ul>
        {pages.map((page, i) => (
          <li
            className={`${
              currentPage == page.name ? activeBtn : unactiveBtn
            } flex items-center w-full px-4 py-2 rounded-l-lg justify-center m-2`}
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
