package p1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class indexServ extends HttpServlet {
	
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		
		response.setContentType("text/html");  
        PrintWriter out=response.getWriter();  
        
       
        String name=request.getParameter("txtname");  //rahul
        String contact=request.getParameter("txtphone");   //
        String email=request.getParameter("txtemail");  //
        String msg=request.getParameter("txtmsg");  
        
        
        Details  e=new Details(); //e=> 9,rahul......
       
        e.setName(name);  
         e.setConatct(contact); 
        e.setEmail(email);
        e.setMsg(msg);
          
        int status=DetailsCon.save(e);  
        if(status>0)
        {  
            out.print("<p>Record saved successfully!</p>");  
            request.getRequestDispatcher("index.html").include(request, response);  
        }else{  
            out.println("Sorry! unable to save record");  
        }  
          
        out.close();  
		
	}

}
