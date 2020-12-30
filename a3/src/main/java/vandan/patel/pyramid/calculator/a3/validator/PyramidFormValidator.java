package vandan.patel.pyramid.calculator.a3.validator;

import vandan.patel.pyramid.calculator.a3.model.PyramidForm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;




public class PyramidFormValidator implements Validator {

    private final Logger logger= LoggerFactory.getLogger(PyramidFormValidator.class);

    @Override
    public boolean supports(Class<?> type){return PyramidForm.class.isAssignableFrom(type);}

   @Override
    public void validate(Object obj,Errors errors){
        logger.trace("The validator is called to validate.");
        PyramidForm form= (PyramidForm) obj;
        if(form.getBaseN().trim().isEmpty()){
            errors.rejectValue("baseN","NotBlank.form.baseN");
        }else{
            try {
                double num = Double.parseDouble(form.getBaseN());
                if (num < 0) {
                    errors.rejectValue("baseN", "Positive.form.baseN");
                }
            }catch (NumberFormatException e){
                errors.rejectValue("baseN","Number.form.baseN");
            }
        }


        if(form.getBaseSide().trim().isEmpty()){
            errors.rejectValue("baseSide","NotBlank.form.baseSide");
        }else{
            try {
                double num = Double.parseDouble(form.getBaseSide());
                if (num < 0) {
                    errors.rejectValue("baseSide", "Positive.form.baseSide");
                }
            }catch (NumberFormatException e){
                    errors.rejectValue("baseSide","Number.form.baseSide");
                }
            }

        if(form.getHeight().trim().isEmpty()){
            errors.rejectValue("height","NotBlank.form.height");
        }else{
            try{
                double num=Double.parseDouble(form.getHeight());
                if(num<0){
                    errors.rejectValue("height","Positive.form.height");
                }
            }catch (NumberFormatException e){
                errors.rejectValue("height","Number.form.height");
            }
        }
   }
}
