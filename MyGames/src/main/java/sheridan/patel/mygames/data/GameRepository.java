package sheridan.patel.mygames.data;

import org.springframework.data.jpa.repository.JpaRepository;
import sheridan.patel.mygames.model.Game;

public interface GameRepository extends JpaRepository<Game,Integer> {
}
