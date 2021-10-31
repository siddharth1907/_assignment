package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ShowHealthSolutionPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{

		request.getRequestDispatcher("HealthSolution.jsp").forward(request,response);				
	}
}