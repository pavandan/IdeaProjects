package ca.midterm.part2.p2;

import java.util.ArrayList;
import java.util.List;

public class Validator {

    public static List<String> validate(Employee form){
        List<String> list = new ArrayList<>();

        String error;
        error= validateName(form.getName());
        if(!error.isEmpty()){
            list.add(error);
        }

        return list;
    }
    private static String validateName(String name){
        if(name==null || name.trim().isEmpty()){
            return "Name is Empty";
        }else if(name.contains("<")||name.contains(">")){
            return "Illegal Name";
        }else {
            return "";
        }
    }
}
