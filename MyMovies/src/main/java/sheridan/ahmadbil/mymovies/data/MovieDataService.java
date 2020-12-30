package sheridan.ahmadbil.mymovies.data;

import sheridan.ahmadbil.mymovies.model.MovieData;
import sheridan.ahmadbil.mymovies.model.MovieDataList;

public interface  MovieDataService {
    MovieData insertMovieData(MovieData data);

    MovieDataList getAllMovieData();

    void deleteAllMovieData();

    void deleteMovieData(int id);

    MovieData getMovieData(int id);

    MovieData updateMovieData(MovieData data, int id);
}
