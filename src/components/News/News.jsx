import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./News.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function News() {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(3); 

  const url =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=3fbd14659231481bb8ea8a57584cd579";

  async function fetchNews() {
    try {
      const response = await axios.get(url);
      setNews(response.data.articles);
      setDisplayedNews(response.data.articles.slice(0, displayIndex));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews();
    AOS.init({duration: 2000})
  }, []);

  const loadMore = () => {
    setDisplayedNews(news.slice(0, displayIndex + 3));
    setDisplayIndex(displayIndex + 3);
  };

  return (
    <div data-aos='fade-up'>
      {displayedNews.map((data, index) => (
        <NewsCard
          key={index}
          author={data.author}
          title={data.title}
          description={data.description}
          link={data.url}
        />
      ))}
      <div className="load-more" onClick={loadMore}>Load More</div>
    </div>
  );
}
