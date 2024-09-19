import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import SearchResultCard from "../components/Search/SearchResultCard";

function SearchResult() {
  const { searchResult } = useContext(TextContext)
  
  return (
    <div>
      {
        searchResult.map((data) => (
          <SearchResultCard data = {data} />
          
        ))
      }
      <div className="h-20" />
    </div>
  );
}

export default SearchResult;
