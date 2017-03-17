package it.synapta.tellmequality.arqext;

import org.apache.jena.graph.Node;
import org.apache.jena.sparql.expr.NodeValue;
import org.apache.jena.sparql.function.FunctionBase2;

public class isDataType extends FunctionBase2
{
    public isDataType() { super(); }

    public NodeValue exec(NodeValue v, NodeValue datatype) {
        String str = v.toString().replace("\"", "");
        String type = datatype.toString().replace("\"", "");

        if ("<http://www.w3.org/2001/XMLSchema#float>".equals(type)) {
            try {
              Double.parseDouble(str);
              return v;
            } catch(NumberFormatException e) {
              return null;
            }
        } else {
            return v;
        }
    }
}