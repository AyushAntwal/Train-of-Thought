
export default function About() {
  return (
    <div className="main py-10 px-2 xl:py-20 animation-view-delay">
      <div className="border xl:w-2/3  m-auto">
        <img
          src="https://picsum.photos/id/349/1000/500"
          alt="A quiet moment captured in time"
          className="m-auto aspect-video object-cover"
        />

        <div className="divider-x"></div>

        <div className="space-y-10 p-3 md:p-5">
          {/* Intro */}
          <h3 className="text-center my-5 font-semibold">
            Hey! So Glad You're Here.
          </h3>

          <p>
            I’ve always believed that words have a quiet power. They don’t rush,
            they don’t shout—but when placed with care, they stay. My journey
            started with scribbles in old notebooks, turning everyday thoughts
            into small stories that felt honest and familiar. Over time, that
            habit turned into a deep appreciation for clarity, tone, and
            intention.
          </p>

          <p>
            I enjoy observing people, conversations, and moments that often go
            unnoticed. Those little details—how someone pauses before speaking,
            or how a place feels at a certain hour—tend to shape the way I
            express ideas. I try to keep things simple, thoughtful, and real,
            because that’s what connects most.
          </p>

          {/* Philosophy */}
          <div className="space-y-4">
            <h6 className=" font-semibold">How I Think About Work</h6>
            <p>
              I don’t chase perfection; I chase progress. Every piece of work is
              an opportunity to communicate better than before. I focus on
              making content feel human—easy to read, meaningful, and grounded
              in purpose rather than noise.
            </p>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h6 className=" font-semibold">A Few Milestones Along the Way</h6>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Built a consistent writing habit, publishing long-form pieces
                week after week without breaking rhythm.
              </li>
              <li>
                Contributed to multiple digital platforms where clarity and
                storytelling mattered more than trends.
              </li>
              <li>
                Helped shape brand voices by refining tone, structure, and
                messaging for better audience connection.
              </li>
              <li>
                Developed a personal style that balances creativity with
                readability.
              </li>
            </ul>
          </div>

          {/* Current Focus */}
          <div className="space-y-4">
            <h6 className="  font-semibold">What I’m Focused On Now</h6>
            <p>
              Right now, I’m focused on creating content that feels calm in a
              fast-moving world. I’m exploring longer narratives, refining my
              editing process, and learning how to say more with fewer words.
              Growth, for me, is about depth—not speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
