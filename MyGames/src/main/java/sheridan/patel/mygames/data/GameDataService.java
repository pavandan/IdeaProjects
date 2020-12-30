package sheridan.patel.mygames.data;

import sheridan.patel.mygames.model.GameData;
import sheridan.patel.mygames.model.GameDataList;

public interface GameDataService {

    GameData insertGameData(GameData data);
    GameDataList getAllGameData();

    void deleteAllGameData();
    void deleteGameData(int id);

    GameData getGameData(int id);

    GameData updateGameData(GameData data, int id);
}
