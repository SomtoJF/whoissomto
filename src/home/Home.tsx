import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import myProjects from "@/data/Projects";
import { GithubFilled } from "@ant-design/icons";
import myExperience from "@/data/Experience";
import Header from "@/components/latest/header";
import Footer from "@/components/latest/footer";

export default function Home() {
  function getLogo(domain: string, size: number = 64) {
    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${domain}`;
  }

  const experienceList = [...myExperience].reverse();

  return (
    <div className="w-screen font-body">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <Header />
        <div className="mt-4 ">
          <div className="w-full flex justify-between font-regular items-center">
            <h1 className="font-bold text-2xl">I'm Somtochukwu Francis </h1>
          </div>
          <div className="w-full flex flex-col gap-2 text-gray-600 text-sm">
            <p>
              {" "}
              A Software Engineer with nearly three years of experience in the
              fintech, automotive, and salestech industries. Developed software
              supporting over 40,000 users, including platforms used by
              employees at Fortune 50 companies.
            </p>
            <p>
              {" "}
              I love to learn new things, and I am always looking for ways to
              improve my skills. Outside of work, I have taught myself to play
              the guitar and I am currently learning french.
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="mb-2 text-xl font-bold font-regular">Experience</h1>

          <ul className="list-none text-gray-700 space-y-4">
            {experienceList.map((experience) => (
              <li key={experience.company} className="flex-col space-y-1">
                <div className="flex items-center gap-2">
                  {experience.site && (
                    <Image
                      src={getLogo(experience.site)}
                      alt={experience.company}
                      width={64}
                      height={64}
                      className="inline-block w-5 h-5 rounded-sm"
                    />
                  )}
                  <Link
                    href={experience.site || "#"}
                    target="_blank"
                    className="border-b-2"
                  >
                    {experience.company}
                  </Link>
                  <span className="text-gray-500 text-sm">
                    {experience.position}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  {experience.description}
                </p>
              </li>
            ))}
          </ul>
          {/* <Projects /> */}
        </div>

        <div className="space-y-2">
          <h1 className=" text-xl font-bold font-regular">Projects</h1>
          <ul className="mb-6">
            {myProjects.slice(0, 3).map((project) => (
              <li key={project.name} className="mb-2">
                <div className="w-full">
                  <div className="inline-flex items-center">
                    <Link
                      href={project.liveLink || project.githubLink}
                      target="_blank"
                      className="border-b-2 mr-2"
                    >
                      {project.name}
                    </Link>
                    <GithubFilled
                      className="mr-1.5 w-4 h-4 text-gray-300"
                      shape="square"
                    />
                  </div>
                  <span className="text-gray-500 text-sm">
                    {project.shortDescription || project.description}
                  </span>
                </div>
                {/* <SocialPreview
                  provider="twitter"
                  variant="compact"
                  className="mt-2"
                  url={project.liveLink || project.githubLink}
                  title={project.name}
                  description={project.linkDescription || project.description}
                  image="https://applywithiris.com/logo.png"
                /> */}
              </li>
            ))}
          </ul>
          <GitHubCalendar
            username="SomtoJF"
            blockRadius={3}
            blockSize={9}
            colorScheme="light"
          />
          {/* <Projects /> */}
        </div>

        <hr className="border-gray-300" />

        <Footer />
      </div>
    </div>
  );
}
