package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ShowPhysicalActivityPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{

		request.getRequestDispatcher("PhysicalActivity.jsp").forward(request,response);				
	}
}