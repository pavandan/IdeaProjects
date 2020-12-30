package sheridan.ahmadbil.mymovies.model;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import sheridan.ahmadbil.mymovies.controller.MovieDataController;

import java.util.List;

public class MovieDataList extends ResourceSupport{

    private List<MovieData> dataList;
    public List<MovieData> getMovies(){
        return dataList;
    }
    public MovieDataList(List<MovieData> dataList){
        this.dataList=dataList;
        Link link = ControllerLinkBuilder.linkTo(MovieDataController.class).withSelfRel();
        add(link);
    }

}
