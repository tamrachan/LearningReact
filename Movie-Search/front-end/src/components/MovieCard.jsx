import "../css/MovieCard.css";

function MovieCard({movie}) {

    function onFavClick({movie}) {
        alert("clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={moveBy.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={onFavClick}>
                        ♡
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;