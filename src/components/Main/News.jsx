import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?page=${page - 1}`
        );
        setPosts(response.data.hits);

        setPageQty(response.data.nbPages);
        if (posts) {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  if (loading) {
    return <h2 className="news__loading">Loading...</h2>;
  }

  return (
    <section className="news container">
      <h2 className="news__title">Latest News</h2>
      <ul className="news__list">
        {posts.map((post) => (
          <li key={post.objectID} className="news__item">
            <Link to={post.story_url}>{post.story_title}</Link>
          </li>
        ))}
      </ul>
      <Pagination page={page} pageQty={pageQty} setPage={setPage} />
    </section>
  );
};

export default News;
