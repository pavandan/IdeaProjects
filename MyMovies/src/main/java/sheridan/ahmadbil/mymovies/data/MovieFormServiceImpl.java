package sheridan.ahmadbil.mymovies.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sheridan.ahmadbil.mymovies.model.Movie;
import sheridan.ahmadbil.mymovies.model.MovieForm;
@Service
public class MovieFormServiceImpl implements MovieFormService {
    private MovieRepository movieRepository;
    @Autowired
    MovieFormServiceImpl(MovieRepository movieRepository){
        this.movieRepository=movieRepository;
    }


    private static void copyFormToMovie(MovieForm form, Movie movie){
        movie.setId(form.getId());
        movie.setMovie(form.getMovie());
        movie.setRating(form.getRating());
    }

    private static void copyMovieToForm(Movie movie,MovieForm form)
}
