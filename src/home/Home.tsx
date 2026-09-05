import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import myProjects from "@/data/Projects";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import myExperience from "@/data/Experience";

export default function Home() {
  function getLogo(domain: string, size: number = 64) {
    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${domain}`;
  }

  const experienceList = [...myExperience].reverse();

  return (
    <div className="w-screen font-body">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="w-full overflow-hidden rounded-lg h-28 relative">
          <Image
            src="https://pbs.twimg.com/media/HQEvPjzbAAAEJFw?format=jpg&name=large"
            alt="Home"
            className="w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
            fill
          />
        </div>

        <hr className="border-gray-300" />

        <div className="mt-4 ">
          <div className="w-full gap-2 flex flex-row-reverse font-regular text-sm">
            <Link
              href="mailto:somtochukwujf@gmail.com"
              className="border-b-2 text-sm"
            >
              mail
            </Link>

            <Link href="/notes" className="border-b-2 text-sm">
              resume
            </Link>

            <Link href="/notes" className="border-b-2 text-sm">
              blog
            </Link>

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
                  <span className="text-gray-500">
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

        <div className="space-y-2">
          <div className="w-full min-h-[15vw] relative rounded-lg overflow-hidden grayscale hover:grayscale-0 object-cover object-center transition-all duration-300">
            <Image
              src="https://pbs.twimg.com/media/HQd290Pb0AAuFrV?format=jpg&name=4096x4096"
              alt="Somtochukwu"
              className="w-full object-cover object-center"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
