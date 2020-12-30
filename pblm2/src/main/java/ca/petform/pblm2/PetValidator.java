package ca.petform.pblm2;

import java.util.ArrayList;
import java.util.List;

public class PetValidator {
    public static List<String> validate(Pet form){
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
    private static String validateVaccinated(String vaccinated){
        String pattern="yes||no";
        if(vaccinated==null || vaccinated.trim().isEmpty()){
            return "Vaccination status is not defined";
        }else if(!vaccinated.matches(pattern)){
            return "Illegal vaccinated data";
        }else {
            return "";
        }
    }


}

