const Interest = () => {
  return (
    <div className="flex justify-center py-32">
      {/* Layout 12 cols, 10 working cols */}
      <div className="w-10/12 h-60 flex flex-col items-center justify-center bg-secondary rounded-3xl gap-4">
        <h1 className="text-4xl font-semibold text-white font-primary">
          Interested in working with me?
        </h1>
        <h1 className="text-white font-primary">
          Teamwork makes dream work!
        </h1>
        <div className="group flex flex-row justify-center items-center w-1/6 p-4 rounded-xl border-2 border-white hover:bg-white">
          <h1 className="font-semibold cursor-pointer text-white group-hover:text-secondary font-primary">
            Contact now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Interest;
