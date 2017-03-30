package it.synapta.tellmequality.metrics;

public class Completness_I_2 extends Metric {
      
    public Completness_I_2(String value) {
        super(queryString(value));
    }
    
    private static String queryString(String value) {
        return 
            "PREFIX tmq: <http://tmq.com/>" +
            "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>" +
            "SELECT ((xsd:integer(?recordCount) - xsd:integer(?recordWithNull)) / xsd:integer(?recordCount) as ?result) " +
            "WHERE {" +
            "  {" +
            "    SELECT (COUNT(DISTINCT ?record) as ?recordWithNull)" +
            "    WHERE {" +
            "      ?record a tmq:csvLine" +
            "      MINUS {?record " + value + " ?o}" +
            "    }" +
            "  }" +
            "  {" +
            "    SELECT (COUNT(DISTINCT ?record) as ?recordCount)" +
            "    WHERE {" +
            "      ?record a tmq:csvLine" +
            "    }" +
            "  }" +
            "}";
    }
    
}
