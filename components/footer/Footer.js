import GitHub from "./GitHub.js";
import Linkedin from "./Linkedin.js";
import Mail from "./Mail.js";

export default function Footer() {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="flex items-center gap-4 justify-center flex-col h-40 bg-offWhite dark:bg-gray-800 shadow-3xl dark:shadow-gray-900 px-4">
      <div className="flex gap-6">
        <GitHub />
        <Mail />
        <Linkedin />
      </div>
      <p className="text-lightGrey dark:text-gray-300/80 text-center text-sm">
        <span className="text-base">©</span> {currentYear()} | Designed & coded
        with <span className="text-red-600 text-[19px] self-center">❤</span> by
        Shubham
      </p>
    </footer>
  );
}
