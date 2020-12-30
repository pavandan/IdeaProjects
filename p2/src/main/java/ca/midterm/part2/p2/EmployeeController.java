package ca.midterm.part2.p2;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
@Controller

public class EmployeeController {
    @RequestMapping(value = {"/","/Input.do"})
    public static ModelAndView input() {
        ModelAndView modelAndView =
                new ModelAndView("Input", "form", new Employee());

        return modelAndView;
    }

    @RequestMapping("Output.do")
    public static String Output(@ModelAttribute("form") Employee form, Model model){

        List<String> errors = Validator.validate(form);
        if(errors.isEmpty()){
            Employee employee = new Employee();

            employee.setName(form.getName());
            employee.setDepartment(form.getDepartment());
            model.addAttribute("employee",employee);
            return "Output";
        }else{
            model.addAttribute("form",form);
            model.addAttribute("errors",errors);

            return "Input";
        }
    }
}
