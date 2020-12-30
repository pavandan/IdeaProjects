package sheridan.ahmadbil.mymovies.data;

import org.springframework.data.jpa.repository.JpaRepository;
import sheridan.ahmadbil.mymovies.model.Movie;

public interface MovieRepository extends JpaRepository<Movie,Integer> {
}
