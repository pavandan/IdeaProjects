package sheridan.patel.mygames.model;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "game")
public class Game {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id=0;
    
    @Column(name = "game_title")
    private String title="";
    
    @Column(name = "rating")
    private Integer rating;
    
    public Game(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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
