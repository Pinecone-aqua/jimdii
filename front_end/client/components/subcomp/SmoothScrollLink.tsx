/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Link } from "react-scroll";

const SmoothScrollLink = ({
  to,
  children,
}: {
  to: any;
  children: React.ReactNode;
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const targetElement = document.getElementById(to);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
