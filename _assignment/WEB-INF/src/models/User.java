package models;
import java.sql.*;
import java.util.*;
import java.text.*;
import org.jasypt.util.password.*;
import org.jasypt.util.text.*;

public class User{
	private int userId;
    private String userName;
	private String email;
	private boolean registered;
	private String password;

	static StrongPasswordEncryptor spe = new StrongPasswordEncryptor();
	static StrongTextEncryptor ste = new StrongTextEncryptor();

	public User(){

	}

	public User(int userId){
		this.userId = userId;
	}

	public User(String email,String password){
	 this.email=email;
	 this.password=password;
	}


	public static boolean registerUser(String password,String email,String userName){
		boolean flag = false;
		Connection con = null;
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/elderlycare?user=root&password=1234");
			String query = "insert into users(password,email,uname,registered) values(?,?,?,?)";
			PreparedStatement pst = con.prepareStatement(query);;
			pst.setString(1,spe.encryptPassword(password));
			pst.setString(2,email);	   
			pst.setString(3,userName);	   
			pst.setBoolean(4,true);	   

			int res = pst.executeUpdate();
			if(res==1){
			flag=true;
			}
		}
		catch(ClassNotFoundException|SQLException e){
			e.printStackTrace();
		}finally{
		try{
			con.close();
		}catch(SQLException e){
			e.printStackTrace();
		}
	}
	return flag;
	}


	
	public int LoginUser(){
		int loginResp = 1; 
		//loginResp: 1(Invalid UserName),2(Not Registered),3(Incorrect Password),4(Login succesfully);

		Connection con = null;
		
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/elderlycare?user=root&password=1234");

			String query = "select user_id,uname,email,password,registered from users where email=?";

			PreparedStatement ps = con.prepareStatement(query);

			ps.setString(1,email);

			ResultSet rs = ps.executeQuery();

			if(rs.next()){
				if(rs.getBoolean(5)){
				if(spe.checkPassword(password,rs.getString(4))){													
						loginResp = 4;
						userId = rs.getInt(1);
						userName = rs.getString(2);
						email = rs.getString(3);
				}else{
					loginResp = 3;
				}
			}else{
				loginResp = 2;
			}
		}else{
				loginResp = 1;
		}
		}catch(SQLException|ClassNotFoundException e){
			e.printStackTrace();
		}

		return loginResp;
	}



public int changePassword(String oldpass,String newpass,String confpass){
		int resp = 1; 
		//resp: 1(Incorrect old password),2(new password and confirm password are not matched),3(password change succesfully);
		
		Connection con = null;
		if(newpass.equals(confpass)){
			if(password.equals(oldpass)){
				try{
					Class.forName("com.mysql.cj.jdbc.Driver");
					con = DriverManager.getConnection("jdbc:mysql://localhost:3306/elderlycare?user=root&password=1234");

					String query = "update users set password=? where email=?";

					PreparedStatement ps = con.prepareStatement(query);

					ps.setString(1,spe.encryptPassword(newpass));
					ps.setString(2,email);

					int res = ps.executeUpdate();
					if(res==1){
						resp=3;
					}
				}catch(SQLException|ClassNotFoundException e){
					e.printStackTrace();
				}
			}else{
				resp=1;
			}
		}else{
			resp=2;
		}
		return resp;
	}



	public int getUserId(){
		return userId;
	}
	public void setUserId(int userId){
		this.userId=userId;
	}

	public String getUserName(){
		return userName;
	}
	public void setUserName(String userName){
		this.userName=userName;
	}

	public String getEmail(){
		return email;
	}
	public void setEmail(String email){
		this.email=email;
	}

	public String getPassword(){
		return password;
	}
	public void setPassword(String password){
		this.password=password;
	}

}