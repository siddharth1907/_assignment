package controllers;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

import models.User;

public class ChangePasswordServlet extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
		HttpSession session = request.getSession();
		String resp = "unsuccessful";
		User user = (User)session.getAttribute("user");
		if(user!=null){
			String oldpass = request.getParameter("oldpass");
			String newpass = request.getParameter("newpass");
			String confpass = request.getParameter("confpass");
			
			int chpresp = user.changePassword(oldpass,newpass,confpass);
			
			if(chpresp==2){
				resp = "New Password and Confirm Password are Not Matched";
			}else if(chpresp==1){
				resp = "Incorrect Old Password";
			}else{
				resp = "success";
			}

		}
		response.getWriter().write(resp);
	}
}