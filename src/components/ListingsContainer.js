import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, isLoaded }) {

  function handleDelete(deleteId) {
    fetch(`http://localhost:6001/listings/${deleteId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => updateListings(deleteId))
  }

  function updateListings(id) {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings)
  }

  return isLoaded ? (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              id={listing.id}
              description={listing.description}
              image={listing.image}
              location={listing.location}
              onListingDelete={handleDelete}
            />
          );
        })}
      </ul>
    </main>
  ) : (
    <h3>Loading...</h3>
  );
}

export default ListingsContainer;
