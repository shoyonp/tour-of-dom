// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li')
li.innerText = 'shitakundu'

// 3. add the child
placesList.appendChild(li)


// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const scetion = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
scetion.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'burger';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'pizza';
ul.appendChild(li3);

scetion.appendChild(ul);

mainContainer.appendChild(scetion);

// set inner html directly

const scetionDress = document.createElement('section')
scetionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Shirt</li>
    <li>Pant</li>
</ul>
`
mainContainer.appendChild(scetionDress);