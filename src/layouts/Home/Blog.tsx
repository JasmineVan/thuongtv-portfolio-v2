import { getRandomESG } from "../../utils/getRandomESGImage";
import Blog1 from "../../assets/Blog/blog1.jpg";
import Blog2 from "../../assets/Blog/blog2.jpg";
import Blog3 from "../../assets/Blog/blog3.jpg";
import Author from "../../assets/Home/jasmine.jpeg";

const randomImage = getRandomESG();

const BlogCard = ({
  image,
  title,
  summary,
}: {
  image: string;
  title: string;
  summary: string;
}) => (
  <div className="group flex w-full flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/50 md:w-1/3">
    <img
      src={image}
      alt={title}
      className="h-48 w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="flex items-center gap-3">
      <img
        src={Author}
        alt="Author"
        className="h-10 w-10 rounded-full border border-white/30 object-cover"
      />
      <h1
        className="font-primary text-lg font-semibold text-white"
        style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
      >
        Thuong Trinh Van
      </h1>
    </div>
    <h1
      className="font-primary text-xl font-bold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {title}
    </h1>
    <p
      className="text-justify font-primary text-white/90"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {summary}
    </p>
    <h1
      className="cursor-pointer font-primary font-semibold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      Read more ➝
    </h1>
  </div>
);

const Blog = () => {
  return (
    <div
      className="flex justify-center bg-cover bg-center bg-no-repeat px-4 py-32"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="flex h-auto w-full max-w-7xl flex-col items-center gap-8 rounded-3xl p-6">
        <h1 className="text-center font-secondary text-3xl font-bold text-secondary">
          STATE-OF-THE-ART BLOG
        </h1>
        <h1
          className="text-center font-tertiary text-4xl font-semibold text-white drop-shadow-md"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
        >
          Technical blog
        </h1>

        {/* Cards */}
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <BlogCard
            image={Blog1}
            title="Breaking Down the Basics of Cloud Computing"
            summary="Understanding Cloud Infrastructure and Its Role in Modern Tech Solutions"
          />
          <BlogCard
            image={Blog2}
            title="The Future of Artificial Intelligence in Everyday Life"
            summary="How AI is Transforming Industries, from Healthcare to Finance now a day."
          />
          <BlogCard
            image={Blog3}
            title="The Evolution of Technology: From Web 1.0 to Web 3.0"
            summary="A Journey Through the Key Innovations Shaping the Internet of Tomorrow"
          />
        </div>

        {/* CTA */}
        <div className="group mt-6 cursor-pointer rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white">
          <h1
            className="font-primary font-semibold text-white group-hover:text-secondary"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            View all blog
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
