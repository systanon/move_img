let image = document.getElementById('client');
image.style.position ='relative';
image.style.left = '50px';
 function move_right () {
 	let left = image.style.left;
 	if(left !='') left = parseInt(left);
 	else left = 50;
 	left += 50;
 	image.style.left = left + 'px';
  }
   function move_left () {
 	let left = image.style.left;
 	if(left !='') left = parseInt(left);
 	else left = 50;
 	left -= 50;
 	image.style.left = left + 'px';
  }
let right = document.getElementById('left'),
    left = document.getElementById('right');
right.addEventListener('mouseover',move_right,false);
left.addEventListener('mouseover',move_left,false);   