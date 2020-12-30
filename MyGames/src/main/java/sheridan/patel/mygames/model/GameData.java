package sheridan.patel.mygames.model;
import org.springframework.hateoas.ResourceSupport;

import javax.validation.constraints.*;

public class GameData extends ResourceSupport {

    @NotBlank(message = "Title name is empty")
    @Size(max = 30,message = "Title name is too long")
    @Pattern(regexp = "[A-Za-x]*",message = "Title name is illegal")
    private String title="";

    @NotNull(message = "rating is null")
    @Min(value = 1,message = "rating is illegal")
    @Max(value = 5,message = "rating is illegal")
    private Integer rating;

    public GameData(){}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
