package it.synapta.tellmequality.rest;

import static it.synapta.tellmequality.Scheduler.schedule;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.apache.jena.rdf.model.Model;
import org.json.JSONObject;
 
@Path("measure")
public class Measure {
 
    @POST
    @Consumes(MediaType.TEXT_PLAIN)     
    @Produces(MediaType.TEXT_PLAIN)
    public String save(String json) {
        JSONObject conf = new JSONObject("{\"Com-I-2\":[\"tmq:payment\"],\"Acc -I-1\":[\"tmq:payment\",\"tmq:id\"]}");
        return schedule(conf).toString(4);
    }
 
}
