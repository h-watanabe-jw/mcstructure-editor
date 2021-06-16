var copy = document.getElementById('copy');


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
        var outputJson = JSON.stringify(data));
        document.getElementById('textarea').value = outputJson;

      });
    }
 alert('a');
    reader.readAsArrayBuffer(file);
  });
});
function copyText() {
  var textarea = document
  // テキストエリアの値を選択
  copyFrom.select();
  // コピーコマンド発行
  var retVal = document.execCommand('copy');
}
