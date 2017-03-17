package it.synapta.tellmequality.metrics;

import it.synapta.tellmequality.SparqlToText;
import org.apache.jena.rdf.model.Model;

public class Metric {
    private String query;
    
    public Metric (String query) {
        this.query = query;
    }
    
    public Metric() {
        this("");
    }
    
    public void run (Model graph) {
        SparqlToText.run(query, graph);
    }
}
