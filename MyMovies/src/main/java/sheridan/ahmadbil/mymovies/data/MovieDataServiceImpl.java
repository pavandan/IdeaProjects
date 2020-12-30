package sheridan.ahmadbil.mymovies.data;

import sheridan.ahmadbil.mymovies.controller.MovieDataController;
import sheridan.ahmadbil.mymovies.model.Movie;
import sheridan.ahmadbil.mymovies.model.MovieData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import sheridan.ahmadbil.mymovies.model.MovieDataList;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class MovieDataServiceImpl implements MovieDataService{
    private MovieRepository movieRepository;

    @Autowired
    MovieDataServiceImpl(MovieRepository movieRepository){
        this.movieRepository=movieRepository;
    }
    private static void copyDataToMovie(MovieData data,int id,Movie movie){
        movie.setId(id);
        movie.setMovie(data.getMovie());
        movie.setRating(data.getRating());
    }

    private static void copyMovieToData(Movie movie,MovieData data){
        Link link=ControllerLinkBuilder
                .linkTo(MovieDataController.class)
                .slash(movie.getId()).withSelfRel();
        data.add(link);
        data.setMovie(movie.getMovie());
        data.setRating(movie.getRating());
    }
    @Override
    public MovieData insertMovieData(MovieData data){
        Movie movie = new Movie();
        copyDataToMovie(data,0,movie);
        movie=movieRepository.save(movie);
        movieRepository.flush();
        Link link = ControllerLinkBuilder
                .linkTo(MovieDataController.class)
                .slash(movie.getId()).withSelfRel();
        data.add(link);
        return data;
    }


    @Override
    public MovieDataList getAllMovieData(){
        List<MovieData> dataList = new ArrayList<>();
        List<Movie> movieList = movieRepository.findAll();
        for (Movie movie:movieList){
            MovieData data = new MovieData();
            copyMovieToData(movie,data);
            dataList.add(data);
        }
        return new MovieDataList(dataList);
    }
    @Override
    public void deleteAllMovieData(){
        movieRepository.deleteAll();
    }
    @Override
    public void deleteMovieData(int id){
        movieRepository.deleteById(id);
    }

    @Override
    public MovieData getMovieData(int id){
        Optional<Movie> result = movieRepository.findById(id);
        if(result.isPresent()){
            MovieData data = new MovieData();
            Movie movie = result.get();
            copyMovieToData(movie,data);
            return data;
        }
        return null;
    }

    @Override
    public MovieData updateMovieData(MovieData data,int id){
        Optional<Movie> result= movieRepository.findById(id);
        if(result.isPresent()){
            Movie movie=result.get();
            copyDataToMovie(data,id,movie);
            movieRepository.save(movie);
            movieRepository.flush();
            Link link = ControllerLinkBuilder
                    .linkTo(MovieDataController.class)
                    .slash(movie.getId()).withSelfRel();
            data.add(link);
            return data;
        }else {
            return null;
        }
    }










}
