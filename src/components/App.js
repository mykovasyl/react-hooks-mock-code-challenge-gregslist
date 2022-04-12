import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [searchText, setSearchText] = useState('')
const [listings, setListings] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        setListings(data);
        setIsLoaded(true);
      });
  }, []);


  const listingsToDisplay = listings.filter(listing =>
    listing.description.toLowerCase().includes(searchText.toLowerCase())
  )

  function handleSearch(inputText) {
    setSearchText(inputText)
  }
  
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={listingsToDisplay} setListings={setListings} isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
