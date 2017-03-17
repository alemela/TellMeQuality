package it.synapta.tellmequality;

import it.synapta.tellmequality.metrics.Accurancy_I_1;
import it.synapta.tellmequality.metrics.Completness_I_2;
import it.synapta.tellmequality.metrics.Test;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;


public class TellMeQuality {

    public static void main(String[] args) {
        Model inputData = FileManager.get().loadModel("/home/alessio/Scrivania/tmq/pay-example.ttl", null, "TURTLE");
        Model shape = FileManager.get().loadModel("/home/alessio/Scrivania/tmq/shape.ttl", null, "TURTLE");
        
        Model mainGraph = ModelFactory.createDefaultModel();
        mainGraph.add(inputData);
        mainGraph.add(shape);

        Completness_I_2 ComI2 = new Completness_I_2("tmq:id");
        ComI2.run(mainGraph);
        
        Accurancy_I_1 AccI1 = new Accurancy_I_1("tmq:payment");
        AccI1.run(mainGraph);
        //Test.run(mainGraph);
    }
    
}
