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
 
    @POST
    @Consumes(MediaType.TEXT_PLAIN)     
    @Produces(MediaType.TEXT_PLAIN)
    public String save(String json) {
        
        Loader loader = new Loader();
        Model inputData = loader.loadRdfData("src/main/resources/files/pay-example.ttl");
        Model shape = loader.loadRdfShape("src/main/resources/files/shape.ttl");
        loader.mergeDataWithShape(inputData, shape);
        
        System.out.println(json);
        return "OOOOK";
    }
 
}
