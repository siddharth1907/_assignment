package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import models.*;
import com.google.gson.Gson;

public class RegisterUserServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
		String resp = "unsuccessful";
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		String userName = request.getParameter("userName");
			if(User.registerUser(password,email,userName)){
			resp = "success";
			}
		response.getWriter().write(resp);
	}
}