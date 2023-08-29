import Image from "next/image.js";
import Link from "next/link.js";
import shubham from "../public/img/shubham.png";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <Layout metaTitle="Shubham: Web Developer">
      <>
        <div className="text-center h-[90vh] flex flex-col items-center justify-center px-5">
          <div className="h-[150px] w-[150px] mb-6 border-4 border-gray-200 dark:border-gray-700 rounded-full">
            <Image
              src={shubham}
              alt="Shubham"
              width={150}
              height={150}
              placeholder="blur"
              priority
              className="rounded-full"
            />
          </div>

          <p className="text-[22px] capitalize font-semibold text-green dark:text-mustard">
            hey, I&#39;m
          </p>
          <p className="font-semibold text-7xl mb-4 mt-2 capitalize">
            Shubham
          </p>
          <p className="md:w-3/4 lg:w-[38rem]">
            A web developer from India. I like creating beautiful,
            engaging, and accessible user experiences.
          </p>
          <div className="sm:flex gap-6 mt-6">
            <Link href="/about">
              <a
                className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
              >
                More About Me
              </a>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
}
