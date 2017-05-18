package it.synapta.tellmequality.rest;

import it.synapta.tellmequality.Loader;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.apache.jena.rdf.model.Model;
import org.json.JSONObject;
 
@Path("upload")
public class Upload {
    
    String filePath;
    String configPath;
 
    @POST
    @Path("data")
    @Consumes(MediaType.TEXT_PLAIN)     
    @Produces(MediaType.TEXT_PLAIN)
    public String saveData(String json) {
        
        filePath = json;
        
        System.out.println(filePath);
        return "OOOOK";
    }
    
    @POST
    @Path("configuration")
    @Consumes(MediaType.TEXT_PLAIN)     
    @Produces(MediaType.TEXT_PLAIN)
    public String saveConfig(String json) {
        
        configPath = json;
        
        System.out.println(configPath);
        return "OOOOK";
    }
    
    @GET
    @Path("finish")
    @Consumes(MediaType.TEXT_PLAIN)     
    @Produces(MediaType.TEXT_PLAIN)
    public String start() {
        
        System.out.println("Finish!!!");
        
        Loader loader = new Loader();
        Model inputData = loader.loadRdfData("../frontend/uploads/data.ttl");
        Model shape = loader.loadRdfShape("../frontend/uploads/config.ttl");
        loader.mergeDataWithShape(inputData, shape);
        
        return "OOOOK";
    }
 
}
