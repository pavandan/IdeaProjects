package vandan.patel.pyramid.calculator.a3.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import vandan.patel.pyramid.calculator.a3.model.Pyramid;
import vandan.patel.pyramid.calculator.a3.model.PyramidForm;
import vandan.patel.pyramid.calculator.a3.validator.PyramidFormValidator;


public class PyramidCalcController {

    private final Logger logger = LoggerFactory.getLogger(PyramidCalcController.class);

    @InitBinder("form")
    protected void initBinder(WebDataBinder binder){
        binder.setValidator(new PyramidFormValidator());
    }

    @RequestMapping(value = {"/","/Input.do"})
    public ModelAndView input(){
        logger.trace("Showing the first input page.");
        return new ModelAndView("Input","form",new PyramidForm());

    }

    @RequestMapping("/Calculate.do")
    public ModelAndView calculate(
        @Validated @ModelAttribute(name = "form") PyramidForm form,
        BindingResult bindingResult){
        logger.trace("Received a user input.");
        if(!bindingResult.hasErrors()){
            logger.trace("The input data is valid");

            Pyramid pyramid=new Pyramid();
            pyramid.setBaseN(Integer.parseInt(form.getBaseN()));
            pyramid.setBaseSide(Double.parseDouble(form.getBaseSide()));
            pyramid.setHeight(Double.parseDouble(form.getHeight()));
            logger.trace("Showing the output page");
            return new ModelAndView("Output","pyramid",pyramid);
        }else {
            logger.trace("The received data is invalid, going back to the inputs.");
            return new ModelAndView("Input","form",form);
        }
    }
}
