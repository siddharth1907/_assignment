package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ShowHealthyEatingPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{

		request.getRequestDispatcher("HealthyEating.jsp").forward(request,response);				
	}
}