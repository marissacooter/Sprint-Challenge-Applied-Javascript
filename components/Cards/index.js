// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// AXIOS REQUEST:

// const myArticleParent = document.querySelector(div.cards);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);
    // myArticleParent.append(articleCard(response.data))
    }) 
    .catch(error => {
    console.log("the data was not returned", error)
  })


// MY FUNCTION:

function articleCard (object){
    const crd = document.createElement('div');
    crd.classList.add('card');

    const hdLine = document.createElement('div');
    hdLine.classList.add('headline');
    hdLine.textContent = `${object.headline}`;
    crd.append(hdline);

    const author = document.createElement('div');
    author.classList.add('author');
    crd.append(author);

    const imgContain = document.createElement('div');
    imgContain.classList.add('img-container');
    author.append('imgContain');

    const crdImg = document.createElement('img');
    // img_url? having trouble finding it in the object
    crdImg.setAttribute('src',object.favicon.ico);
    imgContain.append(crdImg);

    const byAuthor = document.createElement('span');
    byAuthor.textContent = `By ${object.author}`;
    author.append(byAuthor);

    return crd;
}
