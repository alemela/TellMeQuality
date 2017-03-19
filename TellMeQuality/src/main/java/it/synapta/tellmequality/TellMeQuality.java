package it.synapta.tellmequality;

import org.apache.jena.rdf.model.Model;
import java.io.IOException;

import com.sun.jersey.api.container.httpserver.HttpServerFactory;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import com.sun.net.httpserver.HttpServer;
import static it.synapta.tellmequality.Scheduler.schedule;
import org.json.JSONObject;


public class TellMeQuality {

    public static Model mainGraph;

    public static void main(String[] args) throws IOException {

        Loader loader = new Loader();
        Model inputData = loader.loadRdfData("/home/alessio/Scrivania/tmq/pay-example.ttl");
        Model shape = loader.loadRdfShape("/home/alessio/Scrivania/tmq/shape.ttl");
        loader.mergeDataWithShape(inputData, shape);
        
        JSONObject conf = new JSONObject("{\"Com-I-2\":[\"tmq:payment\"],\"Acc-I-1\":[\"tmq:payment\",\"tmq:id\"]}");
        System.out.println(schedule(conf).toString(4));

        /*System.out.println("Starting HTTPServer...\n");
        HttpServer HTTPServer = createHttpServer();
        HTTPServer.start();
        System.out.println("Started HTTPServer Successfully!!!");*/
    }
    
    private static HttpServer createHttpServer() throws IOException {
        ResourceConfig ResourceConfig = new PackagesResourceConfig("it.synapta.tellmequality.rest");
        return HttpServerFactory.create("http://localhost:8085/", ResourceConfig);
    }

}
