import Link from "next/link.js";

export default function Logo() {
 
  return (
    <Link href="/">
      <h3
        className="cursor-pointer fill-green hover:fill-gray-700 dark:fill-mustard dark:hover:fill-white"
        height="2rem"
        viewBox="0 0 146 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
       SHUBHAM</h3>
    </Link>
  );
}
