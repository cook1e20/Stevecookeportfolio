const titles = ['Web Developer.', 'Engineer.', 'Designer.'];

const typed = document.getElementById('typed');
const speed = 150;

let i = 0;
let j = 0;
let title = 0;
let pause = 0;

function setText() {
  if (i < titles[title].length) {
    typed.innerHTML += titles[title].charAt(i);
    i++;
    setTimeout(setText, speed);
  } else if (j < i) {
    if (pause === 0) {
      setTimeout(setText, speed * 2);
      pause++;
    } else {
      j++;
      typed.innerHTML = titles[title].slice(0, titles[title].length - j);
      setTimeout(setText, speed);
    }
  } else if (i === j) {
    title++;
    if (title == titles.length) {
      title = 0;
    }

    i = 0;
    j = 0;
    pause = 0;
    setTimeout(setText, speed);
  }
}


setTimeout(setText, 1000);
