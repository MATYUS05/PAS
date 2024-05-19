import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hotelAPI.css';
import { Link } from "react-router-dom";

function HotelList() {
  const [hotelData, setHotelData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBy, setSortedBy] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  const [bookmarkedHotels, setBookmarkedHotels] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/locations', {
          params: {
            name: searchTerm,
            locale: 'id',
            city_ids: '289251'
          },
          headers: {
            'X-RapidAPI-Key': '063041d651mshf3c0857c192f57ep13c57ajsn08506019b5c4',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
        });
        setHotelData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotelData();
  }, [searchTerm]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  const handleSort = sortBy => {
    setSortedBy(sortBy);
    setIsAscending(prevValue => !prevValue);
    const sortedHotels = [...hotelData].sort((a, b) => {
      if (sortBy === 'name') {
        return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
    });
    setHotelData(sortedHotels);
  };

  const handleBookmark = hotel => {
    setBookmarkedHotels(prevBookmarks => {
      if (prevBookmarks.find(b => b.dest_id === hotel.dest_id)) {
        return prevBookmarks.filter(b => b.dest_id !== hotel.dest_id);
      } else {
        return [...prevBookmarks, hotel];
      }
    });
  };

  const filteredHotels = hotelData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="HotelApi">
      <div className="container-hotel1">
        <h1 className="title">Hotel and Destinations in Jakarta</h1>
        <div className="search-sort-container">
          <div className="search-container">
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={handleSearch}
                onKeyPress={handleKeyPress}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="sort-buttons">
            <button onClick={() => handleSort('name')}>
              Sort by Name {sortedBy === 'name' && (isAscending ? '↑' : '↓')}
            </button>
          </div>
        </div>
        <div className="search-results">
          <div className="hotel-list">
            {filteredHotels.map(hotel => (
              <div key={hotel.dest_id} className="hotel-card">
                <img className="hotel-image" src={hotel.image_url} alt={hotel.name} />
                <div className="hotel-info">
                  <h2 className="hotel-name">{hotel.name}</h2>
                  <p className="hotel-address">{hotel.address}</p>
                  <button
                    className="bookmark-button"
                    onClick={() => handleBookmark(hotel)}
                  >
                    {bookmarkedHotels.find(b => b.dest_id === hotel.dest_id) ? 'Remove Bookmark' : 'Add to Bookmarks'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bookmarked-section">
          <h2 className="title">Bookmarked Hotels</h2>
          <div className="hotel-list">
            {bookmarkedHotels.map(hotel => (
              <div key={hotel.dest_id} className="hotel-card">
                <img className="hotel-image" src={hotel.image_url} alt={hotel.name} />
                <div className="hotel-info">
                  <h2 className="hotel-name">{hotel.name}</h2>
                  <p className="hotel-address">{hotel.address}</p>
                  <button
                    className="bookmark-button"
                    onClick={() => handleBookmark(hotel)}
                  >
                    Remove Bookmark
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="tombol-balikapi"><Link to="/">Back</Link></button>
    </div>
  );
}

export default HotelList;
