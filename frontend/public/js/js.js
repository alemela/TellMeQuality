
//Script per tell_me_quality_client
   //Sript per il primo pulsante upload
   $('.upload').on('click', function (){//Attiva il pulsante con CSS
   $('#upload-input').click();
   });
   //Seleziona il file caricato

   $('#upload-input').on('change', function(){

   var files = $(this).get(0).files;

   if (files.length > 0){
   // One or more files selected, process the file upload

   // create a FormData object which will be sent as the data payload in the
   // AJAX request
   var formData = new FormData();

   // loop through all the selected files
   for (var i = 0; i < files.length; i++) {
     var file = files[i];

     // add the files to formData object for the data payload
     formData.append('uploads[]', file, file.name);
   }
   $.ajax({
     url: '/upload',
     type: 'POST',
     data: formData,
     processData: false,
     contentType: false,
     success: function(data){
         console.log('upload successful!');
     }
   })
   }
   });


//script per wizard.html

$('#add').click(function(){
  $.ajax({
  type: 'POST',
  // make sure you respect the same origin policy with this url:
  // http://en.wikipedia.org/wiki/Same_origin_policy
  url: 'http://localhost:8070/load',
  data: {



      'type':  $("#metadata0").val(),
      'value': $("#tfnewsearch0").val(),
      'type1':  $("#metadata1").val(),
      'value1': $("#tfnewsearch1").val(),
      'type2':  $("#metadata2").val(),
      'value2': $("#tfnewsearch2").val(),
      'type3':  $("#metadata3").val(),
      'value3': $("#tfnewsearch3").val(),
  },
  success: function(msg){
      alert('wow' + msg);
  }
  })


});
$('#add').click(function(){
$.ajax({
type: 'GET',
// make sure you respect the same origin policy with this url:
// http://en.wikipedia.org/wiki/Same_origin_policy
url: 'http://localhost:8080/public/views/tell_me_quality_client.html',

success: function(msg){
    alert('wow' + msg);
}
})


});
