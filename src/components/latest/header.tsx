import Image from "next/image";
import websiteImage from "../../../public/website_image.jpeg";
import Link from "next/link";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";

export default function Header({ isBlog }: { isBlog?: boolean }) {
  return (
    <div className="space-y-4">
      <div className="w-full overflow-hidden rounded-lg h-36 relative">
        <Image
          src={websiteImage}
          alt="Home"
          className="w-full object-cover object-center"
          fill
        />
      </div>

      <hr className="border-gray-300" />

      <div className="w-full gap-2 flex flex-row-reverse font-regular text-sm">
        <Link
          href="mailto:somtochukwujf@gmail.com"
          className="border-b-2 text-sm"
        >
          mail
        </Link>

        {/* <Link href="/notes" className="border-b-2 text-sm">
          resume
        </Link> */}

        {!isBlog && (
          <Link href="/blog" className="border-b-2 text-sm">
            blog
          </Link>
        )}

        <button>
          <LinkedinFilled className="mr-1.5 w-3 h-3 mt-auto" />
          <Link
            href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
            target="_blank"
            className="border-b-2 text-sm"
          >
            linkedin
          </Link>
        </button>

        <button>
          <GithubFilled className="mr-1.5 w-3 h-3 mt-auto" />
          <Link
            href="https://github.com/somtojf"
            target="_blank"
            className="border-b-2 text-sm"
          >
            github
          </Link>
        </button>
      </div>
    </div>
  );
}
