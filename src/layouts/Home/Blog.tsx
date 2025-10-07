import { motion, useReducedMotion } from "framer-motion";
import { getRandomESG } from "../../utils/getRandomESGImage";
import Blog1 from "../../assets/Blog/blog1.jpg";
import Blog2 from "../../assets/Blog/blog2.jpg";
import Blog3 from "../../assets/Blog/blog3.jpg";
import Author from "../../assets/Home/jasmine.jpeg";

const randomImage = getRandomESG();

/* Motion variants */
const containerV = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const headerV = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ctaV = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const BlogCard = ({
  image,
  title,
  summary,
  index,
}: {
  image: string;
  title: string;
  summary: string;
  index: number;
}) => (
  <motion.div
    variants={cardV}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    transition={{ delay: index * 0.05 }}
    className="group flex w-full flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/50"
  >
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
    <h2
      className="font-primary text-xl font-bold text-white group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {title}
    </h2>
    <p
      className="text-justify font-primary text-white/90"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
    >
      {summary}
    </p>
    <button
      className="w-fit cursor-pointer font-primary font-semibold text-white transition-colors group-hover:text-secondary"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
      aria-label={`Read more: ${title}`}
    >
      Read more ➝
    </button>
  </motion.div>
);

const Blog = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-8 pt-16"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {/* Readability overlay on top of random image */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.28),rgba(0,0,0,0.55))]"
        initial={{ opacity: prefersReducedMotion ? 0.45 : 0 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.1,
          ease: "easeOut",
        }}
      />

      <motion.div
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="relative z-10 mt-12 flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:w-10/12 md:p-10 lg:w-8/12"
      >
        <motion.div
          variants={headerV}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h1 className="font-secondary text-2xl font-bold text-secondary sm:text-3xl">
            STATE-OF-THE-ART BLOG
          </h1>
          <h2
            className="mb-4 font-tertiary text-3xl font-semibold text-white drop-shadow-md sm:text-4xl"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Technical blog
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            image={Blog1}
            title="Breaking Down the Basics of Cloud Computing"
            summary="Understanding Cloud Infrastructure and Its Role in Modern Tech Solutions"
            index={0}
          />
          <BlogCard
            image={Blog2}
            title="The Future of Artificial Intelligence in Everyday Life"
            summary="How AI is Transforming Industries, from Healthcare to Finance now a day."
            index={1}
          />
          <BlogCard
            image={Blog3}
            title="The Evolution of Technology: From Web 1.0 to Web 3.0"
            summary="A Journey Through the Key Innovations Shaping the Internet of Tomorrow"
            index={2}
          />
        </div>

        {/* CTA */}
        <motion.div
          variants={ctaV}
          className="group mt-2 cursor-pointer rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white"
        >
          <h3
            className="font-primary font-semibold text-white group-hover:text-secondary"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            View all blog
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;
