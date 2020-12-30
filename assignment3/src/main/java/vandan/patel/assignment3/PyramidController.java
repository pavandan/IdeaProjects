package vandan.patel.assignment3;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller

public class PyramidController {
    private static final String[] shapes = {"Triangle (N = 3)", "Square (N = 4)",
            "Pentagon (N = 5)", "Hexagon (N = 6)"};




    @RequestMapping(value = {"/","/Input.do"})
    public static ModelAndView  input(){
        ModelAndView modelAndView = new ModelAndView("Input","form",new PyramidForm());
        modelAndView.addObject("shapes",shapes);

        return modelAndView;
    }

    @RequestMapping("Calculate.do")
    public static String calculate(@ModelAttribute(name="form")PyramidForm form, Model model){
        List<String> errors=PyramidFormValidator.validate(form);
        if(errors.isEmpty()){
            Pyramid pyramid=new Pyramid();
            //convert and move the data

            pyramid.setBaseN(Integer.parseInt(form.getBaseN()));

            pyramid.setBaseSide(Integer.parseInt(form.getBaseSide()));
            pyramid.setHeight(Integer.parseInt(form.getHeight()));
            pyramid.setBaseArea(Integer.parseInt(form.getBaseN()));
            pyramid.setVolume(Integer.parseInt(form.getBaseN()));

            model.addAttribute("pyramid",pyramid);
            return "Output";
        }else{
            model.addAttribute("shapes",shapes);
            model.addAttribute("form",form);
            model.addAttribute("errors",errors);
            return "Input";
        }
    }
}

