package sheridan.patel.mygames.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sheridan.patel.mygames.data.GameDataService;
import sheridan.patel.mygames.errors.GameNotFoundException;
import sheridan.patel.mygames.model.GameData;
import sheridan.patel.mygames.model.GameDataList;

@RestController
@RequestMapping("/api/games")
public class GameDataController {
    private GameDataService gameDataService;

    @Autowired
    public GameDataController(GameDataService gameDataService){
        this.gameDataService=gameDataService;
    }

    @GetMapping
    HttpEntity<GameDataList> listGames(){
        GameDataList gameDataList= gameDataService.getAllGameData();
        return new ResponseEntity<>(gameDataList,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public HttpEntity<GameData> gameDetails(@PathVariable int id){
        GameData data = gameDataService.getGameData(id);
        if(data!=null){
            return new ResponseEntity<>(data,HttpStatus.OK);
        }else {
            throw new GameNotFoundException(id);
        }
    }
    @PostMapping
    public HttpEntity<GameData> insertGame(@Validated @RequestBody GameData data){
        gameDataService.insertGameData(data);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public HttpEntity<GameData> updateGame(@Validated @RequestBody GameData data,
                                           @PathVariable int id){
        GameData saved = gameDataService.updateGameData(data,id);
        if(saved!=null){
            return new ResponseEntity<>(data,HttpStatus.OK);
        }else {
            throw new GameNotFoundException(id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteGame(@PathVariable int id){
        GameData data = gameDataService.getGameData(id);
        if(data!=null){
            gameDataService.deleteAllGameData();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


























}
