package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class ShowOtherActivityPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{

		request.getRequestDispatcher("OtherActivity.jsp").forward(request,response);				
	}
}