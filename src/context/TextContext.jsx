import { createContext,useState} from "react";

export const TextContext = createContext();

import React from "react";

function TextProvider({ children }) {
  const [value, setValue] = useState("");
  const [searchResult,setSearchResult] = useState([])
  const URL = "https://www.googleapis.com/youtube/v3/"
  return (
    <TextContext.Provider value={{ value, setValue, searchResult,setSearchResult,URL }}>
      {children}
    </TextContext.Provider>
  );
}

export default TextProvider;
