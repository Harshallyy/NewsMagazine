import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const India = () => {
  const [indiaNews, setIndiaNews] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/news?q=india")
    .then((res) => res.json())
    .then((data) => {
      setIndiaNews(data);
    });
}, []);


  return (
    <main className="px-6 py-6">
      <h2 className="text-2xl font-semibold mb-6">India News</h2>

      <div className="grid grid-cols-5 gap-4">
        {indiaNews.map((item) => (
          <NewsCard
            key={item.id}
            title={item.webTitle}
            image={item.fields?.thumbnail}
            url={item.webUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default India;
