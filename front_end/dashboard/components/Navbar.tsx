import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/users"}>
          <li>Users</li>
        </Link>
        <Link href={"/fitness"}>
          <li>Fitness</li>
        </Link>
        <Link href={"/setting"}>
          <li>Setting</li>
        </Link>
      </ul>
    </nav>
  );
}
