package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

import models.User;

public class LoginServlet extends HttpServlet{
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
		HttpSession session = request.getSession();
		String nextPage = "login.do";
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
	
		User user = new User(email,password);

		int loginResp = user.LoginUser();
		
		if(loginResp==4){
			session.setAttribute("user",user);
			nextPage = "HealthyEating.do";
		}else if(loginResp==3){
			request.setAttribute("errmsg","Incorrect Password");
		}else if(loginResp==2){
			request.setAttribute("errmsg","You are not Registered.");
		}else if(loginResp==1){
			request.setAttribute("errmsg","Invalid Email...");
		}		
		
		request.getRequestDispatcher(nextPage).forward(request,response);		
	}
}