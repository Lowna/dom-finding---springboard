document.getElementById('container');
const containerId = document.querySelector('#container');
document.querySelectorAll('.second');
document.querySelector('#container > ol > li.third');

containerId.append('hello');
containerId.prepend('hello');

const footerClass = document.querySelector('.footer');
footerClass.classList.add('main');
footerClass.remove('.footer');
footerClass.classList.remove('main');

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText = 'four';

const ol = document.querySelector('ol');
const liOl = document.querySelectorAll('ol > li');
for (let lis of liOl) {
	lis.style.background = 'green';
	lis.style.marginBottom = '5px';
}
