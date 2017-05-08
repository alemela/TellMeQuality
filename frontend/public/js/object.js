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
{"Regulatory":["ID"]}
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
