package it.synapta.tellmequality.metrics;

import it.synapta.tellmequality.SparqlToText;
import org.apache.jena.rdf.model.Model;

public class Test {
    
    static String queryString = 
            "PREFIX tmq: <http://tmq.com/>" +
            "PREFIX tmqe: <http://tmq.com/ext/>" +
            "PREFIX sh: <https://www.w3.org/TR/shacl/>" +
            "SELECT ?o ?datatype " +
            "WHERE {" +
            "  ?bn sh:predicate tmq:payment ." +
            "  ?bn sh:datatype ?datatype ." +
            "  ?s tmq:payment ?o ." +
            "  FILTER tmqe:isDataType(?o, ?datatype)" +
            "}";
    
    public static void run (Model graph) {
        SparqlToText.run(queryString, graph);
    }
    
}
