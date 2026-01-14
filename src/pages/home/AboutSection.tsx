import Newsletter from "@/components/Newsletter";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const posts = [
  { img: "https://picsum.photos/id/237/400/400", tags: ["dog", "love"] },
  { img: "https://picsum.photos/id/218/400/400", tags: ["dog", "love"] },
  {
    img: "https://picsum.photos/id/231/400/400",
    tags: ["dog", "love", "city", "travel", "pass", "view"],
  },
  { img: "https://picsum.photos/id/219/400/400", tags: ["dog", "love"] },
  { img: "https://picsum.photos/id/233/400/400", tags: ["dog", "love"] },
  { img: "https://picsum.photos/id/234/400/400", tags: ["dog", "love"] },
];
export default function AboutSection() {
  return (
    <section className="p-5 space-y-16">
      <article className="">
        <h4 className="w-full text-center">ABOUT ME</h4>
        <div className="pl-3 sm:pl-8 mt-5">
          <p className="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            obcaecati voluptatum voluptates atque, quae culpa, eaque architecto
            ipsam aut aliquam voluptate temporibus reprehenderit repellat
            tenetur quidem sapiente nihil odit, et eos eveniet veritatis sed
            voluptas asperiores. Porro dicta sunt doloremque, vel corporis, et
            laborum ut consequuntur nulla a ipsum provident!
          </p>
          <a href="/blog" className="text-button mt-6 block">
            Read More ▶
          </a>
        </div>
      </article>
      <div className="divider-x my-20"></div>
      <article className="">
        <h4 className="w-full text-center mb-10">FOLLOW ME</h4>
        <div className=" w-full grid px-0 xl:px-10 grid-cols-3 xl:grid-cols-2 gap-8">
          {posts.map((i) => (
            <div className="post relative" key={i.img}>
              <div className="absolute opacity-0 hover:opacity-100 inset-0 flex justify-center items-center text-center z-10 text-white bg-slate-600/70">
                <p className="body1 flex flex-wrap w-2/3">
                  {i.tags.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </p>
              </div>
              <img
                alt={i.tags.join()}
                src={i.img}
                className="h-fit w-fit aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </article>
      <article className="space-y-5">
        <div className="divider-x"></div>
        <div className="flex justify-between mx-[20%]">
          <button>
            <FaFacebookF className="text-2xl" />
          </button>
          <button>
            <FaInstagram className="text-2xl" />
          </button>
          <button>
            <FaPinterestP className="text-2xl" />
          </button>
          <button>
            <FaXTwitter className="text-2xl" />
          </button>
        </div>
        <div className="divider-x"></div>
      </article>
      <article>
        <h4 className="mb-10 text-center">NEVER MISS A NEW POST.</h4>
        <div className="px-10">
          <Newsletter />
        </div>
      </article>
      <div className="divider-x my-16"></div>
      <h4 className="mb-2 text-center">
        MY PICK <br /> OF THE MONTH
      </h4>
      <div className="px-5">
        <div className="my-2">
          <img
            src="https://picsum.photos/id/319/700/700"
            alt="my pick of the month"
            className="w-fit aspect-video object-cover"
          />
        </div>
        <p className="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          obcaecati voluptatum voluptates atque, quae culpa, eaque architecto
          ipsam aut aliquam voluptate temporibus reprehenderit repellat tenetur
          quidem sapiente nihil odit, et eos eveniet veritatis sed voluptas
          asperiores. Porro dicta sunt doloremque, vel corporis, et laborum ut
          consequuntur nulla a ipsum provident!
        </p>
        <a href="/blog" className="text-button mt-6 block">
          Read More ▶
        </a>
      </div>
    </section>
  );
}
