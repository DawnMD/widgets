import React, { useState, useEffect } from "react";
import wikisearch from "../apis/wikisearch";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("javascript");
  const [results, setResults] = useState([]);
  const search = (term) => {
    setSearchTerm(term.target.value);
  };
  useEffect(() => {
    const wikiApi = async () => {
      const { data } = await wikisearch.get("", {
        params: {
          srsearch: searchTerm,
        },
      });
      setResults(data.query.search);
    };
    if (searchTerm && !results.length) {
      wikiApi();
    } else {
      const timerId = setTimeout(() => {
        if (searchTerm) {
          wikiApi();
        }
      }, 500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [searchTerm]);
  const renderedList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Search on Wiki
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input value={searchTerm} className="input" onChange={search} />
        </div>
      </div>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default Search;
