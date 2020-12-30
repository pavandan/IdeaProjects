package sheridan.ahmadbil.mymovies.model;
import org.springframework.hateoas.ResourceSupport;

import javax.validation.constraints.*;
public class MovieData extends ResourceSupport{
    @NotBlank(message = "Movie name is empty")
    @Size(max = 30,message = "Movie name is too long")
    @Pattern(regexp = "[A-Za-x]*",message = "Movie name is illegal")
    private String movie="";

    @NotBlank(message = "Rating is empty")
    @Size(max = 30,message = "Rating is too long")
    @Pattern(regexp = "[A-Za-x]*",message = "Rating is illegal")
    private String rating="";

    public MovieData(){}
    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }
}
