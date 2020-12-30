package ca.midterm.patel;

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

        switch (action) {
            case "/input":
                view = "input";
                break;
            case "/process":
                String name = request.getParameter("name");

                String department=request.getParameter("department");


                if (name == null || name.trim().isEmpty()) {
                    view = "error";
                }
                else {
                    Employee employee=new Employee();

                    employee.setName(name.trim());
                    request.setAttribute("name",employee);

                    employee.setDepartment(department.trim());
                    request.setAttribute("department",employee);

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
