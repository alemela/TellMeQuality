package it.synapta.tellmequality.rest;

import static it.synapta.tellmequality.Scheduler.schedule;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.json.JSONObject;
 
@Path("do")
public class Api {
 
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String get() {
        JSONObject conf = new JSONObject("{\"Com-I-2\":[\"tmq:payment\"],\"Acc-I-1\":[\"tmq:payment\",\"tmq:id\"]}");
        System.out.println(schedule(conf).toString(4));
        return "hola";
    }
 
}
