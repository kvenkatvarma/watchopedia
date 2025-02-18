import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage=()=>{
    const [movieState,setMovieState] = useState(()=>{
        return {MovieList : ['Die Hard','Harry Potter']};
    })

    return(
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie/>
            <MovieList movieList ={movieState.MovieList}/>
        </div>
    )
};
export default MoviePage;