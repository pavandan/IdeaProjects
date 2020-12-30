package vandan.patel.assignment3;

import java.util.ArrayList;
import java.util.List;

public class PyramidFormValidator {
    public static List<String> validate(PyramidForm form){
        List<String> list = new ArrayList<>();

        String error;
        error = validateBaseSide(form.getBaseSide());
        if(!error.isEmpty()){
            list.add(error);
        }
        error=validateHeight(form.getHeight());
        if(!error.isEmpty()){
            list.add(error);
        }

        return list;
    }



    private static String validateBaseSide(String baseSide) {

        if (baseSide == null || baseSide.trim().isEmpty()) {
            return "Base Side is Empty";
        }else{
            try {
                int num = Integer.parseInt(baseSide);
                if(num<=0){
                    return "Base Side must be positive";
                }
            } catch (NumberFormatException e) {
                return "The base Side length is not a number";
            }
        }
        return "";
    }
    private static String validateHeight(String height){
        if(height == null || height.trim().isEmpty()){
            return "Height is empty";
        }else{
            try {
                int num = Integer.parseInt(height);
                if(num <= 0){
                    return "Height must be positive";
                }
            }catch (NumberFormatException e){
                return "The height is not a number";
            }
            return "";
        }
    }


}
