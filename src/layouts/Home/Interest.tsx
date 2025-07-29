import { getRandomESG } from "../../utils/getRandomESGImage";

const randomImage = getRandomESG();

const Interest = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="glassmorphism flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-10 shadow-lg backdrop-blur-md">
        <h1
          className="text-center font-primary text-5xl font-bold text-white"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
        >
          Interested in working with me?
        </h1>
        <h1
          className="text-center font-primary text-2xl text-white"
          style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
        >
          Teamwork makes dream work!
        </h1>
        <div className="group mt-8 cursor-pointer rounded-2xl border border-white/30 bg-white/10 px-10 py-4 backdrop-blur transition-all duration-300 hover:bg-white">
          <h1
            className="font-primary text-xl font-semibold text-white group-hover:text-secondary"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Contact now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Interest;
