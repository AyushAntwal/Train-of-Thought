import AnimatedWrapper from "./AnimatedWrapper";

export default function TopHeader() {
  return (
    <section>
      <div
        id="header"
        className="prose w-full p-5 flex-col text-center flex justify-center items-center h-[50dvh]"
      >
        <div className="animate-slide-in-bottom">
          <h5 className=" md:leading-loose md:tracking-widest animate-slide-in-bottom">
            EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
          </h5>
          <h1 className="animate-slide-in-bottom">Train of Thoughts</h1>
        </div>
      </div>
    </section>
  );
}
