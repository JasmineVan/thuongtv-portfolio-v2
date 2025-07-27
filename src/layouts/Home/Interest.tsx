const Interest = () => {
  return (
    <div className="flex justify-center py-32">
      {/* Layout 12 cols, 10 working cols */}
      <div className="flex h-60 w-10/12 flex-col items-center justify-center gap-4 rounded-3xl bg-secondary">
        <h1 className="font-primary text-4xl font-semibold text-white">
          Interested in working with me?
        </h1>
        <h1 className="font-primary text-white">Teamwork makes dream work!</h1>
        <div className="group flex w-1/6 flex-row items-center justify-center rounded-xl border-2 border-white p-4 hover:bg-white">
          <h1 className="cursor-pointer font-primary font-semibold text-white group-hover:text-secondary">
            Contact now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Interest;
