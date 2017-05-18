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
        return "{" +
"  \"ACC\":" +
"    {\"ACC-I-1\":[\"ID\",\"NAME\",\"EMAIL\"], \"ACC-I-2\":[\"ID\"], \"ACC-I-3\":[\"EMAIL\"]}," +
"  \"COM\":" +
"    {\"COM-I-1\":[\"ID\"], \"COM-I-2\":[\"EMAIL\"],\"COM-I-3\":[\"NAME\"]}," +
"  \"CON\":" +
"    {\"CON-I-1\":[\"ID\",\"NAME\",\"EMAIL\"]}," +
"  \"CRE\":" +
"    {\"CRE-I-1\":[\"ID\"]}," +
"  \"CPL\":" +
"    {\"CPL-I-1\":[\"ID\",\"NAME\"]}" +
"  }";
    }
 
}
