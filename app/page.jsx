import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Chatum: Discover & Chat
        <br />
        <span className="orange_gradient text-center">
          Chat & Post & Discover
        </span>
      </h1>
      <p className="desc text-center">
         Post your ideas and meet people with similar interest. Discover blogs of other people.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
