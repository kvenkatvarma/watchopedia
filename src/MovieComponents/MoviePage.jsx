import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage=()=>{
    const [movieState,setMovieState] = useState(()=>{
        return {MovieList : ['Die Hard','Harry Potter']};
    })

    function handleAddMovie(newMovie){
        setMovieState((prevstate)=>{
            return{
                ...prevstate, MovieList : prevstate.MovieList.concat([newMovie])
            }
        })
    }

    return(
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie handleAddMovie ={handleAddMovie}/>
            <MovieList movieList ={movieState.MovieList}/>
        </div>
    )
};
export default MoviePage;