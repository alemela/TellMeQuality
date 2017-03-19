package it.synapta.tellmequality;

import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;

public class Loader {
    
    public static Model mainGraph;
        
    public Model loadRdfData(String path) {
        return FileManager.get().loadModel(path, null, "TURTLE");
    }
    
    public Model loadRdfShape(String path) {
        return FileManager.get().loadModel(path, null, "TURTLE");
    }
    
    public void mergeDataWithShape(Model inputData, Model shape) {
        mainGraph = ModelFactory.createDefaultModel();
        mainGraph.add(inputData);
        mainGraph.add(shape);
    }
}
