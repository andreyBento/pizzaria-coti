/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package flavors;

import java.sql.SQLException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 *
 * @author Portal
 */
@Path("/produtos")
public class FlavorsController extends Object {
    
    private IFlavorsDao FlavorsDao;
	
    public FlavorsController() {
        this.FlavorsDao = new IFlavorsDao();
    }
    
    @Path("/getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        try {
            return Response.ok(MediaType.APPLICATION_JSON).entity( this.FlavorsDao.getAll()).build();

        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException | SQLException e) {
            return null;
        }				
    };
    
}
