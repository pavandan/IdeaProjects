package sherdian.helloservlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "Servlet2",urlPatterns={"/hello"})
public class Servlet2 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getServletPath();
        String view;

        switch (action){
            case "/page1":{
                view = "page1";
                break;
            }
            case "/page2":{
                view = "page4";
                break;
            }
            case "/page3":{
                response.sendRedirect("page4");
                return;
            }
            case "/page4":{
                view = "page4";
                break;
            }
            default:{
                response.sendError(404);
                return;
            }
        }

        request.getRequestDispatcher("WEB-INF/jsp/"+view+".jsp").forward(request,response);

    }

}

