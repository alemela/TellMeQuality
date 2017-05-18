//Objects received by the server
var fields = {
  "ACC":
    {"ACC-I-1":["ID","NAME","EMAIL"], "ACC-I-2":["ID"], "ACC-I-3":["EMAIL"],"ACC-I-4":["NAME"]},
  "COM":
    {"COM-I-1":["ID"], "COM-I-2":["EMAIL"],"COM-I-3":["NAME"]},
  "CON":
    {"CON-I-1":["ID","NAME","EMAIL"]},
  "CRE":
    {"CRE-I-1":["ID"]},
  "CPL":
    {"CPL-I-1":["ID","NAME"]}
  };
var list_field=["ID","NAME","DATE","EMAIL","CHART"]

//Object already stored in the server(ALL the possible type of measurement)
var classes = {
    "ACC": {
      "ACC-I-1":{title:"Syntactic", description:"Ratio of closeness of the data values to a set of values defined in a domain"},
      "ACC-I-2":{title:"Semantic", description:"Ratio of closeness of the data values to a set of values defined in a domain"},
      "ACC-I-3":{title:"Data Assurance", description:"Ratio of closeness of the data values to a set of values defined in a domain"},
      "ACC-I-4":{title:"Risk", description:"Ratio of closeness of the data values to a set of values defined in a domain"},
    },
    "COM": {
      "COM-I-1":{title:"Record", description:"Record Ratio of closeness of the data values to a set of values defined in a domain"},
      "COM-I-2":{title:"Attribute", description:"attribute Ratio of closeness of the data values to a set of values defined in a domain"},
      "COM-I-3":{title:"Completness", description:"completness Ratio of closeness of the data values to a set of values defined in a domain"},
    },
    "CON": {
      "CON-I-1":{title:"Integrity", description:"For each value of one attribute of a table exists the same value of the same attribute in a different table; i.e there is a link between the same attribute represented in different tables and they contain te same values"},
    },
    "CRE": {
      "CRE-I-1":{title:"Values", description:"Degree to wich information items are regarded as true, real and credible"},
    },
    "CPL": {
      "CPL-I-1":{title:"Regulatory", description:"Degree to which data values and/or format comply with specific standards, conventions or regulations}"
    }
  }
};

var definition=
{"ACC":{title:"Accuracy", description:"Accuracy measures provide the degree to which data has attributes that correctly represent the true value of the intended attribute of a concept or event in a specific context of use."},
 "COM":{title:"Completness", description:"Completness measures provide the degree to which data associated with a target entity has expected values for all related properties of target entity in a specific context of use"},
 "CON":{title:"Consistency", description:"Consistency measures provide the degree to which data has attributes that are free from contradiction and are coherent with other data in specific context of use. They can be either or both among data regarding one target entity and across similar data for comparable target entities"},
 "CRE":{title:"Credibility", description:"Credibility measures provie the degree to which data has attributes that are regarded as true and believable by users in a specific context of use. Credibility can be measured from the \"Inherent\" point of view only."},
 "CPL":{title:"Compliance", description:"Compliance measures provide the degree to whic data has attributes that adhere to standards,conventions or regulations in force and similar rules relating to data quality in a specific context of use. Compliance is measured both from \"Inherent\" and \"System dependent\" point of view."}
};

var initialDict = {
 "accuracy":"ACC",
 "completness":"COM",
 "consistency":"CON",
 "credibility":"CRE",
 "compliance":"CPL"
}
