function findAnswer() {
  var target_rgb = document.getElementById('problem_text').innerHTML.split('<br>')[1];
  var target = document.getElementById('col_' + target_rgb.substring(1));
  target.click();
}

var btns = document.getElementsByClassName('start_btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(event) { findAnswer(); });
}
