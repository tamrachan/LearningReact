import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "John Wick 2", release_date: "2020"},
        {id: 3, title: "John Wick 3", release_date: "2020"},
        {id: 4, title: "John Wick 4", release_date: "2020"},
        {id: 5, title: "John Wick 5", release_date: "2020"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);

        // // Set state after search
        // setSearchQuery("---------");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                // search query
                movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />
        )))}
        </div>
    </div>
}

export default Home;