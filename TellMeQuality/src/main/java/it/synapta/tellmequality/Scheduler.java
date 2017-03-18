package it.synapta.tellmequality;

import static it.synapta.tellmequality.TellMeQuality.mainGraph;
import it.synapta.tellmequality.metrics.Accurancy_I_1;
import it.synapta.tellmequality.metrics.Completness_I_2;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONObject;

public class Scheduler {
    
    public static JSONObject schedule(JSONObject conf) {
        
        JSONObject result = new JSONObject();
        
        JSONObject j_ACC_I_1 = new JSONObject();
        JSONObject j_COM_I_2 = new JSONObject();

        Iterator<?> keys = conf.keys();        

        while( keys.hasNext() ) {
            String key = (String)keys.next();
            JSONArray array = conf.getJSONArray(key);
            for(int i = 0 ; i < array.length() ; i++) {
                String field = array.get(i).toString();
                
                switch(key) {
                    case "Acc-I-1":
                        Accurancy_I_1 AccI1 = new Accurancy_I_1(field);
                        j_ACC_I_1.put(field, AccI1.run(mainGraph));
                        break;

                    case "Com-I-2":
                        Completness_I_2 ComI2 = new Completness_I_2(array.get(i).toString());
                        j_COM_I_2.put(field, ComI2.run(mainGraph));
                        break;
                        
                    default:
                }
            }
            
            if (j_ACC_I_1.length() > 0) {
                result.put("Acc-I-1", j_ACC_I_1);
            }
            if (j_COM_I_2.length() > 0) {
                result.put("Com-I-2", j_COM_I_2);
            }
        }
        
        return result;
    }
}
