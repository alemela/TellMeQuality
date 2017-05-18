package it.synapta.tellmequality.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.json.JSONObject;
 
@Path("configure")
public class Configure {
 
    @GET
    @Path("allFields")
    @Produces(MediaType.APPLICATION_JSON)
    public String allFields () {
        return "[\"ID\",\"NAME\",\"DATE\",\"EMAIL\",\"CHART\"]";
    }
    
    @GET
    @Path("activeFields")
    @Produces(MediaType.APPLICATION_JSON)
    public String activeFields () {
        return "{\"accuracy\":\n" +
"  {\"Syntactic\":[\"ID\",\"NAME\",\"EMAIL\"], \"Semantic\":[\"ID\"], \"Data_Assurance\":[\"EMAIL\"],\"Risk\":[\"NAME\"]},\n" +
"\"completness\":\n" +
"  {\"Record\":[\"ID\"], \"Attribute\":[\"EMAIL\"],\"Completness\":[\"NAME\"]},\n" +
"\"consistency\":\n" +
"  {\"Integrity\":[\"ID\",\"NAME\",\"EMAIL\"]},\n" +
"\"credibility\":\n" +
"  {\"Values\":[\"ID\"]},\n" +
"\"compliance\":\n" +
"  {\"Regulatory\":[\"ID\"]}\n" +
"};";
    }
 
}
