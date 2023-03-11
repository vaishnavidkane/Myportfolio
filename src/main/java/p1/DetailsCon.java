package p1;


import java.util.*;  
import java.sql.*;  
public class DetailsCon {
	
	public static Connection getConnection(){  
        Connection con=null;  
        try{  
        	Class.forName("com.mysql.jdbc.Driver");
             con = DriverManager.getConnection("jdbc:mysql://localhost:3306/proj","root","12345678"); //2 
        }
        catch(Exception e)
        {System.out.println(e);}  
        return con;  
    }  
    public static int save(Details  e){  
        int status=0;  
        try{  
            Connection con=DetailsCon.getConnection();  
            PreparedStatement ps=con.prepareStatement(  
                         "insert into  details(name,contact,email,msg) values (?,?,?,?)");  
            ps.setString(1,e.getName());  
            ps.setString(2,e.getConatct());  
            ps.setString(3,e.getEmail());  
            ps.setString(4,e.getMsg());  
           
              
            status=ps.executeUpdate();  
              
            con.close();  
        }catch(Exception ex){ex.printStackTrace();}  
          
        return status; //1  
    }  

}
