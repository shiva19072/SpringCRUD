# SpringCRUD
This is my first spring project which demonstrate CRUD operations on a Table

Objective : I developed a small Spring Boot project that performs CRUD operations (Create, Read, Update, Delete) on a table called studentdata in my local mysql database. The project is a simple web application designed to manage student records efficiently. This project mainly focuses on basic data manipulation operations which could be performed on table.This could be sample module in Spring developed to showcase and understand about the frondend and backend working

Contents : This project includes the database setup,backend code for functionality and the frontend web pages to manipulate data using the RESTful API connections to table in database. Understanding about the contents of the project is important in order to understand the functionality of the the overall project. Here are the contents of this project:

Tools Used: HTML, CSS, Bootstrap, Javascript, SpringToolSuite, Java, Mysql, Hibernate, Postman

Database: The database need to be created in the MySQL Workbench and then create a table.I created the database called student_database and table as studentdata

Attributes in Table:

  -> id (P_key)

  -> name

  -> college

  -> roll

  -> qualification

  -> year
  
  -> certificate

Backend: I used Java language and Hibernate to develop code for backend functionality.The code is having a Model class,Controller class ,Service class,Repository interface,application file to run the Spring app. These are the java files in the project:

Java Files in project:

-> StudentData.java

-> StudentDataController.java

-> StudentDataService.java

-> StudentDataModuleApplication.java

-> StudentDataRepository.java

Frontend: I used HTML,CSS,Bootstrap and javascript for front end development.The web pages codes are stored in the templates file and the images are stored in the static file in project Folder.

-> Html,css,javascript files : src/main/resources/static

Testing: I used Postman for testing REST API connections and checked wheather the data entry and manipulation is working in table or not.
