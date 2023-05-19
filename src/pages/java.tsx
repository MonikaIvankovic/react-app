import React, { useEffect, useState } from "react";
export type MusicType = {
  artistName: string;
  artistId: number;
  discNumber: number;
  trackNumber: number;
  trackName: string;
};

const Java = () => {
  const [searchData, setSearchData] = useState<MusicType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  //uzimanje podataka sa servera

  const handleSearch = (searchValue: string) => {
    fetch(`https://itunes.apple.com/search?term=${searchValue}&entity=song`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1>Itunes songs</h1>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSearch(searchValue)}>Search</button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Song</th>
              <th>Disc Number</th>
              <th>Track Number</th>
            </tr>
          </thead>

          <tbody>
            {searchData
              ? searchData.map((music: MusicType, index) => {
                  return (
                    <tr key={index}>
                      <td>{music.artistName}</td>
                      <td>{music.trackName}</td>
                      <td>{music.discNumber}</td>
                      <td>{music.trackNumber}</td>
                    </tr>
                  );
                })
              : "nema podataka"}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Java;
