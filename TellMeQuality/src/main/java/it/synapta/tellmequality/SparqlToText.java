package it.synapta.tellmequality;

import it.synapta.tellmequality.arqext.isDataType;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSetFactory;
import org.apache.jena.query.ResultSetRewindable;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.sparql.function.FunctionRegistry;


public class SparqlToText {
    
    public static String run (String queryString, Model graph) {
        FunctionRegistry.get().put("http://tmq.com/ext/isDataType", isDataType.class);

        
        Query query = QueryFactory.create(queryString);
        QueryExecution qexec = QueryExecutionFactory.create(query, graph);
        
        try {
            ResultSetRewindable results = ResultSetFactory.makeRewindable(qexec.execSelect());

            while ( results.hasNext() ) {
                QuerySolution soln = results.nextSolution();
                Literal res = soln.getLiteral("result");
                return res.getValue().toString();
            }

            results.reset();
        } finally {
            qexec.close();
        }

        return ""; //XXX
    }
}
