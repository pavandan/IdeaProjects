package ca.assignment2.userdata;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/input","/process"})
public class Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getServletPath();
        String jspPath = "/WEB-INF/jsp/";
        String view = "input";

        switch (action){
            case "/input":
                view = "input";
                break;
            case "/process":
                String userName = request.getParameter("userName");
                String emailId = request.getParameter("emailId");
                if(userName==null || userName.trim().isEmpty() ||emailId==null ||emailId.trim().isEmpty()){
                    view = "error";
                }else {
                    User user = new User();
                    user.setName(userName.trim());
                    request.setAttribute("user",user);
                    user.setEmail(emailId.trim());
                    request.setAttribute("email",user);
                    view = "output";
                }
                break;
                default:
                    response.sendError(404);
                    return;
        }
        request.getRequestDispatcher(jspPath+view+".jsp").forward(request,response);
    }
}
