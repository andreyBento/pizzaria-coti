/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package flavors;

/**
 *
 * @author Portal
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/")
public class AliveController {
	
	@GET
	public String loadServer(){
		return "SERVER ON";
	}	
}