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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( res => {
    console.log('[cards server respsonse]', res);
    let articles = res.data.articles;
    // console.log('[checking new articles]', articles);
    let articlesContainer = document.querySelector('.cards-container');
    articles.javascript.map(article => {
        articlesContainer.append(articleGenerator(article));
    });

    articles.bootstrap.map(article => {
        articlesContainer.append(articleGenerator(article));
    });

    articles.technology.map(article => {
        articlesContainer.append(articleGenerator(article));
    });

    articles.jquery.map(article => {
        articlesContainer.append(articleGenerator(article));
    });

    articles.node.map(article => {
        articlesContainer.append(articleGenerator(article));
    });

})
.catch( err => {
    console.log(err);
});

const articleGenerator = article => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    newCard.append(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    newCard.append(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.append(imgContainer);

    const img = document.createElement('img');
    img.setAttribute('src', article.authorPhoto);
    imgContainer.append(img);

    const span = document.createElement('span');
    span.textContent = `By ${article.authorName}`;
    author.append(span);

    return newCard;
}