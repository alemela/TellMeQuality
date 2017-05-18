
$("#hidden-field-template").load("/views/template/measure_tmp-value.html", function(res, status, xhr) {
  var template = document.getElementById('tmp-value').innerHTML;
  for (var i=0; i<Object.keys(fields[current]).length; i++)
  {
    var field = Object.keys(fields[current])[i];
    var output = Mustache.render(template,{"value":field, "title":classes[current][field].title, "description":classes[current][field].description});
    $("#new-home").append(output);

  }
})
