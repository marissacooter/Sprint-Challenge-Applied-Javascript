// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res => {
    // console.log('[tab server response]', res);
    let topics = res.data.topics;
    // console.log('checking new topics', topics);
    let topicsContainer = document.querySelector('.topics');
    topics.map(topic => {
        topicsContainer.append(tabGenerator(topic))
    })
})
.catch(err => {
    console.log(err);
});

const tabGenerator = topic => {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = topic;
    // console.log('checking topic in func', topic);

    return newTab;
};