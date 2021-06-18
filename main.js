$(function() {
  $('#file').change(function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      var data = reader.result
      nbt.parse(data, function(error, data) {
        if (error) {
          throw error;
        }
        var textVal = JSON.stringify(data, null, 2);
        document.getElementById('textarea').value = textVal;
      });
    }

    reader.readAsArrayBuffer(file);
  });
});

function copy() {

}
