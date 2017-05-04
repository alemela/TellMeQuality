var object= {value:"marco", description:"HELLOWROLD" }

$("#hidden-field-template").load("/views/template/tmp-value.html", function(res, status, xhr) {
  alert("sssss")
  var template = document.getElementById('tmp-value').innerHTML;
  var output = Mustache.render(template,object);
  $("#new-home").append(output);
})
