import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const Home = ({ searchQuery }) => {
  const [trending, setTrending] = useState([]);
  const [indiaNews, setIndiaNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const trackRef = useRef(null);

  const slideLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setLoading(true);

    const baseURL = searchQuery
      ? `http://localhost:5000/api/news?q=${searchQuery}`
      : `http://localhost:5000/api/news`;

    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
        setLoading(false);
      });

    if (!searchQuery) {
      fetch(`http://localhost:5000/api/news?q=india`)
        .then((res) => res.json())
        .then((data) => setIndiaNews(data));

      fetch(`http://localhost:5000/api/news?q=world`)
        .then((res) => res.json())
        .then((data) => setWorldNews(data));
    }
  }, [searchQuery]);

  return (
    <main className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
      <section>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            {searchQuery ? `Results for "${searchQuery}"` : "Trending News"}
          </h2>

          <div className="flex gap-3">
            <button
              onClick={slideLeft}
              className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg"
            >
              ‹
            </button>
            <button
              onClick={slideRight}
              className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg"
            >
              ›
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:flex md:overflow-x-auto gap-4 scroll-smooth pb-2"
          >
            {loading ? (
              <div>Loading...</div>
            ) : trending.length === 0 ? (
              <div className="text-gray-500 font-medium">NO RESULT FOUND</div>
            ) : (
              trending.map((item) => (
                <div className="min-w-[220px] max-w-[220px]" key={item.id}>
                  <NewsCard
                    title={item.webTitle}
                    image={item.fields?.thumbnail}
                    url={item.webUrl}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {!searchQuery && (
        <>

          <section className="mt-14">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl md:text-2xl font-semibold">Top India</h2>
              <Link
                to="/india"
                className="text-blue-700 text-sm hover:underline"
              >
                More →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {indiaNews.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.webTitle}
                  image={item.fields?.thumbnail}
                  url={item.webUrl}
                />
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl md:text-2xl font-semibold">Top World</h2>
              <Link
                to="/world"
                className="text-blue-700 text-sm hover:underline"
              >
                More →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {worldNews.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.webTitle}
                  image={item.fields?.thumbnail}
                  url={item.webUrl}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
