const NewsLater = () => {
  return (
    <section className="w-11/12 mx-auto my-12 py-10 md:py-14 rounded-lg bg-gradient-to-r from-bgColor/30 to-secondary/30 space-y-5">
      <div className="space-y-2 text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Subscribe to our Newslater
        </h3>
        <p className="font-medium">
          Get the latest courses & tips—straight to your inbox!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form action="">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Your Email Address"
            />
            <button className="btn btn-sm md:btn-md bg-secondary text-primary border-transparent text-base hover:bg-transparent hover:border-primary join-item">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLater;
