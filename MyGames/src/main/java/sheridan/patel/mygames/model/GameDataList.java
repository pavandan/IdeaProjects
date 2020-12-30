package sheridan.patel.mygames.model;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import sheridan.patel.mygames.controller.GameDataController;

import java.util.List;
public class GameDataList extends ResourceSupport {
    private List<GameData> dataList;

    public List<GameData> getGames(){return dataList;}

    public GameDataList(List<GameData> dataList){
        this.dataList=dataList;
        Link link = ControllerLinkBuilder.linkTo(GameDataController.class)
                .withSelfRel();
        add(link);
    }
}
