import React from "react";
import BlogSection from "./BlogSection";
import AboutSection from "./AboutSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <section className="main animation-view-delay feature-post  inset-0 ">
        <div className="relative border my-10 mx-8 inset-0 lg:my-28 lg:mx-20">
          <div className="header absolute -top-7 -left-0.5 border bg-color p-2 px-6">
            <h4 className="font-normal tracking-widest">Feature Post</h4>
          </div>
          <img
            src="/book_01.png"
            className="w-full object-cover h-full"
            alt="Book reading Post"
          />
          <div className="details inset-0 p-4 md:p-10">
            <p className="cation">Admin</p>
            <p className="caption">
              Mar 23, 2023 &nbsp;&nbsp;●&nbsp;&nbsp; 2 min read
            </p>
            <h5 className="mt-5">
              Back to Fiction: What I'm Reading This Summer
            </h5>
            <p className="mt-1 text-muted">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
          </div>
        </div>
      </section>
      <div className="divider-x my-4"></div>
      <main className="main-lg px-2 md:p-5">
        <div className="w-full grid gap-1 inset-0 grid-cols-1 xl:grid-cols-[65%_0.1%_34.9%]">
          <div className="px-1">
            <BlogSection />
          </div>
          <div className="divider-y hidden xl:block"></div>
          <div className="divider-x xl:hidden mt-10 block"></div>
          <div className="px-1">
            <AboutSection />
          </div>
        </div>
      </main>
    </main>
  );
}
