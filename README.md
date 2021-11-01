For using this web application you have to install -
1.	apache tomcat server 9.0.1

for exe file- https://drive.google.com/file/d/1b8viQ2U8uAr5cCWqtN3h3mTJg0Db1zVJ/view?usp=sharing 

for installation  snapshot- https://drive.google.com/drive/folders/1eVums-c2JCpkGCbnPTP2_kD65RxUQE1l?usp=sharing

2.	MySQL work bench 8.0

For exe file-https://drive.google.com/file/d/1TSRV-QoyKm9vzJTAZp9dJJd7oXIh54s6/view?usp=sharing

for installation  snapshot- https://docs.google.com/document/d/18rN6NCKOoiGtxUGYujRVnTdvtHLFC8XS/edit?usp=sharing&ouid=111206665713559193641&rtpof=true&sd=true

**note-use Password(for both Mysql and Tomcat) – 1234 

You have required some jar files also and placed them into the lib folder of tomcat application and then add environment variable(user and system both) for them 

![img1](/_assignment/images/rs1.png)
1.	java-MySQL-connector jar 8.0.20
https://drive.google.com/file/d/1fBmPHzMZAzaCiWrpZ1kjYHNyi1l322ij/view?usp=sharing
2.	java json jar 1.1.2
https://drive.google.com/file/d/13X_sTrd8nEwguHm5cWlXTSpBikIXEqzi/view?usp=sharing
https://drive.google.com/file/d/1bi9zFCN4sEd2dt5LystEOs7akfWmXp2p/view?usp=sharing
3.	java simplified encryption JASYPT jar 1.9.2-https://drive.google.com/file/d/1WLFK0GMKAdhV0CSJBG5aZN_TK3jJMJ7r/view?usp=sharing	
4.	gson jar 2.8.6
https://drive.google.com/file/d/1eox1_rmk_iydp7tZ8eMuEt8vsMO3tYF-/view?usp=sharing

after setup of these jars the place the _assignment folder into webapps folder under the tomcat folder and then you need  to compile the java files like this-
  ![img2](/_assignment/images/rs2.png)
	
Open your tomcat folder go to bin and click on tomcat9.exe to start the server.
For run this application open browser and then type – http://localhost:8080/_assignment/

for database sql file are in _assignment/database folder file name-elderlycare.sql.

Working-
User needs to register first using email address and then login with their credentials to access the content.

