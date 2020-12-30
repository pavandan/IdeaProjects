package sheridan.patel.pyramid1;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller

public class PyramidController {

    @RequestMapping(value = {"/","/Input.do"})
    public static ModelAndView  input(){
        return new ModelAndView("Input","form",new PyramidForm());
    }
    @RequestMapping("Calculate.do")
    public static String calculate(@ModelAttribute(name="form")PyramidForm form, Model model){
        List<String> errors=PyramidFormValidator.validate(form);
        if(errors.isEmpty()){
            Pyramid pyramid=new Pyramid();
            //convert and move the data
            model.addAttribute("pyramid",pyramid);
            return "Output";
        }else{
            model.addAttribute("form",form);
            model.addAttribute("errors",errors);
            return "Input";
        }

    }
}

