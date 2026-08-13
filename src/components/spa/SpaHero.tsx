export default function SpaHero() {
  return (
    <section
      id="spa-hero"
      className="box-border h-screen w-full rounded-b-[15px] bg-white font-header font-light"
    >
      <div className="mx-auto flex h-full max-w-screen-xl flex-col px-[5%] pt-[12vh]">
        <p id="intro-text" className="w-[max(50%,360px)] text-[2rem]">
          Final year Software Engineering Student/Fullstack Software Developer
          on a mission to build simple solutions to complex real-world problems.
        </p>
        <div className="mt-auto flex justify-between pb-[calc(100vh/6)]">
          <div>
            Fullstack <br /> Software Developer
          </div>
          <div>
            Based in <br /> Lagos, Nigeria.
          </div>
          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
              target="_blank"
              className="link-underline h-fit text-inherit no-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/5omto"
              target="_blank"
              className="link-underline h-fit text-inherit no-underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
