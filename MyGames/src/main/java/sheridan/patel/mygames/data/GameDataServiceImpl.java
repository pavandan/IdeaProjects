package sheridan.patel.mygames.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.stereotype.Service;
import sheridan.patel.mygames.controller.GameDataController;
import sheridan.patel.mygames.model.Game;
import sheridan.patel.mygames.model.GameData;
import sheridan.patel.mygames.model.GameDataList;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GameDataServiceImpl implements GameDataService {
    private GameRepository gameRepository;

    @Autowired
    GameDataServiceImpl(GameRepository gameRepository){
        this.gameRepository=gameRepository;
    }

    private static void copyDataToGame(GameData data, int id, Game game){
        game.setId(id);
        game.setTitle(data.getTitle());
        game.setRating(data.getRating());
    }
    private static void copyGameToData(Game game,GameData data){
        Link link= ControllerLinkBuilder.linkTo(GameDataController.class)
                .slash(game.getId()).withSelfRel();
        data.add(link);
        data.setTitle(game.getTitle());
        data.setRating(game.getRating());
    }

    @Override
    public GameData insertGameData(GameData data){
        Game game = new Game();
        copyDataToGame(data,0,game);
        game=gameRepository.save(game);
        gameRepository.flush();
        Link link=ControllerLinkBuilder
                .linkTo(GameDataController.class)
                .slash(game.getId()).withSelfRel();
        data.add(link);
        return data;
    }
    @Override
    public GameDataList getAllGameData(){
        List<GameData> dataList = new ArrayList<>();
        List<Game> gameList = gameRepository.findAll();
        for(Game game:gameList){
            GameData data = new GameData();
            copyGameToData(game,data);
            dataList.add(data);
        }
        return new GameDataList(dataList);
    }

    @Override
    public void deleteAllGameData(){
        gameRepository.deleteAll();
    }
    @Override
    public void deleteGameData(int id){
        gameRepository.deleteById(id);
    }
    @Override
    public GameData getGameData(int id){
        Optional<Game> result = gameRepository.findById(id);
        if(result.isPresent()){
            GameData data = new GameData();
            Game game = result.get();
            copyGameToData(game,data);
            return data;
        }
        return null;
    }
    @Override
    public GameData updateGameData(GameData data, int id){
        Optional<Game> result = gameRepository.findById(id);
        if(result.isPresent()){
            Game game = result.get();
            copyDataToGame(data,id,game);
            gameRepository.save(game);
            gameRepository.flush();
            Link link= ControllerLinkBuilder.linkTo(GameDataController.class)
                    .slash(game.getId()).withSelfRel();
            data.add(link);
            return data;
        }else {
            return null;
        }
    }


}
