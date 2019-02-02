const buttons = document.getElementsByClassName('buttons');
const loops = document.getElementsByTagName('audio');
let isPlaying = [false,false,false,false];

buttons[0].addEventListener('click',function() {
  console.log('button1')
  if (isPlaying[0] === true ){
    loops[0].pause();
    loops[0].load();
  }
  else{
    loops[0].play();
  }
  isPlaying[0] =!isPlaying[0];
})
buttons[1].addEventListener('click',function() {
  if (isPlaying[1] === true ){
    loops[1].pause();
    loops[1].load();
  }
  else{
    loops[1].play();
  }
  isPlaying[1] =!isPlaying[1];
})
buttons[2].addEventListener('click',function() {
  if (isPlaying[2] === true ){
    loops[2].pause();
    loops[2].load();
  }
  else{
    loops[2].play();
  }
  isPlaying[2] =!isPlaying[2];
})
buttons[3].addEventListener('click',function() {
  if (isPlaying[3] === true ){
    loops[3].pause();
    loops[3].load();
  }
  else{
    loops[3].play();
  }
  isPlaying[3] =!isPlaying[3];
})
