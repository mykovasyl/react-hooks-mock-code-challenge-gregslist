import React, { useState } from "react";

function Search({ onSearch }) {
  const [inputText, setInputText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(inputText);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
