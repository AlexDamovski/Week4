import movieModel from '../models/movies.js';

export function DisplayMovieList(req,res,next){
    movieModel.find(function(err,moviesCollection){
        if(err){
            console.error(err);
            res.end(error);
        }
        res.render('index', {title: 'Movie List', page: 'movies/list', movies: moviesCollection});
    })
}
