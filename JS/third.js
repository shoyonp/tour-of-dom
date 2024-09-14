const main = document.getElementById('main-container');
const scetion = document.createElement('section');
scetion.innerHTML =`
<h1>My dynamic section</h1>
<p>Extra text added inside paragraph</p>
<ul>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
</ul>
`

main.appendChild(scetion);