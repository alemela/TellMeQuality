
var field;
$("#hidden-field-template").load("/views/template/tmp-value.html", function(res, status, xhr) {
  var template = document.getElementById('tmp-value').innerHTML;
  console.log(Object.keys(fields[current]).length)
  for (var i=0; i<Object.keys(fields[current]).length; i++)
  {
   field = Object.keys(fields[current])[i]
  var output = Mustache.render(template,{"value":field, "description":classes[current][field]});
  $("#new-home").append(output);

  }
})
