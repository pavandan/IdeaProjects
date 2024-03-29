package sheridan.ahmadbil.mymovies.errors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import sheridan.ahmadbil.mymovies.model.Movie;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    public ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request){

        BindingResult bindingResult = ex.getBindingResult();
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        List<String> errors =  new ArrayList<>();
        for(FieldError fieldError: fieldErrors){
            errors.add(fieldError.getDefaultMessage() + ": "
                    + fieldError.getField() + "=" + fieldError.getRejectedValue());
        }
        ApiError apiError =
                new ApiError(HttpStatus.BAD_REQUEST, "Illegal input data", errors);
        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({MovieNotFoundException.class})
    ResponseEntity<ApiError> handleStudentNotFound(MovieNotFoundException ex){
        ApiError apiError =
                new ApiError(HttpStatus.NOT_FOUND,
                        "Student data is not found", ex.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }
}
