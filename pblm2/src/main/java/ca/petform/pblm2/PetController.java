package ca.petform.pblm2;

import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

import java.util.List;

@Controller
public class PetController {

    private static final String[] programs = {"Computer Programmer", "Systems Technology",
            "Engineering Technician", "Systems Technician"};

    @RequestMapping(value = {"/","/Input.do"})
    public static ModelAndView input() {
       ModelAndView modelAndView =
        new ModelAndView("Input", "form", new Pet());
        modelAndView.addObject("programs", programs);
       return modelAndView;
    }

    @RequestMapping("Output.do")
    public static String Output(@ModelAttribute("form") Pet form,Model model){
        form.setVaccinated((form.getVaccinated()==null)?"no" : "yes");
        List<String> errors = PetValidator.validate(form);
        if(errors.isEmpty()){
            Pet pet = new Pet();

            pet.setName(form.getName());
            pet.setVaccinated(form.getVaccinated());
            pet.setRadio(form.getRadio());
            pet.setDropdown(form.getDropdown());
            model.addAttribute("pet",pet);
            return "Output";
        }else{
            model.addAttribute("form",form);
            model.addAttribute("errors",errors);
            model.addAttribute("programs", programs);
            return "Input";
        }
    }


}
