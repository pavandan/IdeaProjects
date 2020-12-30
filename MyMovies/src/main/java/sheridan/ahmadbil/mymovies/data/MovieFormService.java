package sheridan.ahmadbil.mymovies.data;

import sheridan.ahmadbil.mymovies.model.MovieForm;

import java.util.List;

public interface MovieFormService {
    void insertMovieForm(MovieForm form);

    List<MovieForm> getAllMovieForms();

    void deleteAllMovieForms();

    void deleteMovieForm(int id);

    MovieForm getMovieForm(int id);

    void updateMovieForm(MovieForm form);
}
