// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(object) {
    const hdr = document.createElement('div');
    hdr.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2019';
    hdr.append(date);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Lambda Times';
    hdr.append(title);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    hdr.append(temp);

    return hdr;
}

let header = document.querySelector('.header-container');
header.append(Header()); 
