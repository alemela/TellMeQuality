//Objects received by the server
var fields=
{"accuracy":
{"Syntactic":["ID","NAME","EMAIL"], "Semantic":["ID"], "Data_Assurance":["EMAIL"],"Risk":["NAME"]},
"completness":
{"Record":["ID"], "Attribute":["EMAIL"],"Completness":["NAME"]},
"consistency":
{"Integrity":["ID","NAME","EMAIL"]},
"credibility":
{"Values":["ID"]},
"compliance":
{"Regulatory":["ID","NAME"]}
};
var list_field=["ID","NAME","DATE","EMAIL","CHART"]

//Object already stored in the server(ALL the possible type of measurement)
var classes =
{"accuracy":
  {"Syntactic":"Ratio of closeness of the data values to a set of values defined in a domain",
  "Semantic":"Ratio of closeness of the data values to a set of values defined in a domain",
  "Data_Assurance":"Ratio of closeness of the data values to a set of values defined in a domain",
  "Risk":"Ratio of closeness of the data values to a set of values defined in a domain",
  },
 "completness":
  {"Record":"Record Ratio of closeness of the data values to a set of values defined in a domain",
  "Attribute":"attribute Ratio of closeness of the data values to a set of values defined in a domain",
  "Completness":"completness Ratio of closeness of the data values to a set of values defined in a domain",
  "Category4":"category4 Ratio of closeness of the data values to a set of values defined in a domain",
  },
 "consistency":
  {"Integrity":"For each value of one attribute of a table exists the same value of the same attribute in a different table; i.e there is a link between the same attribute represented in different tables and they contain te same values"
  },
 "credibility":
  {"Values":"Degree to wich information items are regarded as true, real and credible"
  },
 "compliance":
  {"Regulatory":"Degree to which data values and/or format comply with specific standards, conventions or regulations"
  }
};

var definition=
{"accuracy":
  "Accuracy measures provide the degree to which data has attributes that correctly represent the true value of the intended attribute of a concept or event in a specific context of use." ,
 "completness":
  "Completness measures provide the degree to which data associated with a target entity has expected values for all related properties of target entity in a specific context of use",
 "consistency":
  "Consistency measures provide the degree to which data has attributes that are free from contradiction and are coherent with other data in specific context of use. They can be either or both among data regarding one target entity and across similar data for comparable target entities",
 "credibility":
  "Credibility measures provie the degree to which data has attributes that are regarded as true and believable by users in a specific context of use. Credibility can be measured from the \"Inherent\" point of view only.",
 "compliance":
  "Compliance measures provide the degree to whic data has attributes that adhere to standards,conventions or regulations in force and similar rules relating to data quality in a specific context of use. Compliance is measured both from \"Inherent\" and \"System dependent\" point of view."
};
