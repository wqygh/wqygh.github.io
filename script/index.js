var i = 0;
var speed = 60;
var error_massage = 'Typing......Oos......spmething wrong......'
var caption = 'Hi, this is Qiyuan Wu and welcome to my site. '+
              'I am a material scientist who likes coding. '+
            'Away from lab or computer, I play poker games, badminton, and shoot some photos. '+
            'Hope you find some fun here.'

var cap = document.getElementById('caption');
cap.innerHTML = '_';
var n = 0;
var typeTimer = setInterval(function() {
  n = n + 1;
  cap.innerHTML = caption.slice(0, n) + '_';
  if (n === caption.length) {
    clearInterval(typeTimer);
    cap.innerHTML = caption;
  };
}, speed)