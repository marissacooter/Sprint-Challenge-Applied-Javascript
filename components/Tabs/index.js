// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// AXIOS REQUEST:

const myTabsParent = document.querySelector(div.cards);

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(repsonse => {
        console.log(response);
        myTabsParent.append(tabsComp(response.data))
    })
    .catch(error =>{
        console.log('The data was not returned', error);
    })    


// MY FUNCTION:

function tabsComp (object){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = 'Topic Here';
}