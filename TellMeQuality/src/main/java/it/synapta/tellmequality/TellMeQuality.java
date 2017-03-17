package it.synapta.tellmequality;

import it.synapta.tellmequality.metrics.Accurancy_I_1;
import it.synapta.tellmequality.metrics.Completness_I_2;
import it.synapta.tellmequality.metrics.Test;
import java.util.Iterator;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;
import org.json.JSONArray;
import org.json.JSONObject;


public class TellMeQuality {

    public static void main(String[] args) {
        Model inputData = FileManager.get().loadModel("/home/alessio/Scrivania/tmq/pay-example.ttl", null, "TURTLE");
        Model shape = FileManager.get().loadModel("/home/alessio/Scrivania/tmq/shape.ttl", null, "TURTLE");
        
        Model mainGraph = ModelFactory.createDefaultModel();
        mainGraph.add(inputData);
        mainGraph.add(shape);
        
        JSONObject conf = new JSONObject("{\"Com-I-2\":[\"tmq:payment\"],\"Acc-I-1\":[\"tmq:payment\",\"tmq:id\"]}");
        scheduler(conf, mainGraph);
    }

    private static void scheduler(JSONObject conf, Model mainGraph) {
        //Test.run(mainGraph);
        Iterator<?> keys = conf.keys();

        while( keys.hasNext() ) {
            String key = (String)keys.next();
            JSONArray array = conf.getJSONArray(key);
            for(int i = 0 ; i < array.length() ; i++){
                switch(key) {
                    case "Acc-I-1":
                        Accurancy_I_1 AccI1 = new Accurancy_I_1(array.get(i).toString());
                        AccI1.run(mainGraph);
                        break;

                    case "Com-I-2":
                        Completness_I_2 ComI2 = new Completness_I_2(array.get(i).toString());
                        ComI2.run(mainGraph);
                        break;
                    default:
                }
            }
        }       
    }
    
}
