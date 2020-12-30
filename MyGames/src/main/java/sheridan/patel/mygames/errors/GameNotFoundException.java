package sheridan.patel.mygames.errors;

public class GameNotFoundException extends RuntimeException {
    private int id =0;

    public GameNotFoundException(int id){
        super("Game data is not found for id="+id);
        this.id=id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
