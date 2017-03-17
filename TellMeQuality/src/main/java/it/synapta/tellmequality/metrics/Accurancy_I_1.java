package it.synapta.tellmequality.metrics;

public class Accurancy_I_1 extends Metric {
    
    public Accurancy_I_1(String value) {
        super(queryString(value));
    }
    
    private static String queryString(String value) {
        return
            "PREFIX tmq: <http://tmq.com/>" +
            "PREFIX tmqe: <http://tmq.com/ext/>" +
            "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>" +
            "PREFIX sh: <https://www.w3.org/TR/shacl/>" +
            "SELECT (xsd:integer(?correctValues)/xsd:integer(?totalValues) as ?result) " +
            "WHERE {" +
            "  {" +
            "    SELECT (COUNT(?o) as ?correctValues) " +
            "    WHERE {" +
            "      {" +
            "        SELECT ?datatype ?pattern " +
            "        WHERE {" +
            "          ?shape sh:property ?bn ." +
            "          ?bn sh:predicate tmq:payment ." +
            "          OPTIONAL { ?bn sh:datatype ?datatype }" +
            "          OPTIONAL { ?bn sh:pattern ?pattern }" +
            "        }" +
            "      }" +
            "      ?s tmq:payment ?o ." +
            //"      FILTER regex(?o, ?pattern, \"i\")" +
            "      FILTER tmqe:isDataType(?o, ?datatype)" +
            "    }" +
            "  }" +
            "  {" +
            "    SELECT (COUNT(?o) as ?totalValues) " +
            "    WHERE {" +
            "      ?s tmq:payment ?o ." +
            "    }" +
            "  }" +
            "}";
    }

}
