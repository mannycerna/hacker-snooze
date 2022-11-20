
let container = document.querySelector('.container');

container.id = 'container';

let newsCards = document.querySelector('.news-cards')

let hackerURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';


let getNews = async () => {
  
    let response = await fetch(hackerURL);

    let data = await response.json();

    let storyData = '';

    for (let i = 0; i < 100; i++){
        
        // console.log(data[i]);
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

        storyData = await storyResponse.json();
        // return storyData; //--testing--
        appendData(storyData);
        // console.log(storyData) //--testing--
        }   
    }
    
    // let newData = getNews(); 

    function appendData(data) {
        // console.log('hello')//test code

            //creating dynamic html elements


            newsCards.innerHTML += `
                <div class = "card text-bg-dark mb-3">
                <h5> <a href=${data.url}>${data.title}</a> </h5>
                <div class = "card-subtitle mb-2 text-muted"> Score: ${data.score} Comments: ${data.descendants} Author: ${data.by}</div>
            `

            container.appendChild(newsCards);
            console.log(data);

            //----------------First iteration-------------
            // let card = document.createElement('div');
            // card.id = 'card';
            // card.className = 'card border-warning text-bg-dark mb-1';
      

            // let title = document.createElement('h5');
            // title.className = 'card-title';
            // title.innerHTML = `${data.title} &#160;&#160;&#160;&#160 `;
            // title.href = `${data.url}`;

            // let subtitle = document.createElement('h6');
            // subtitle.className = 'card-subtitle mb-2 text-muted';
            // subtitle.innerHTML = `Score: ${data.score} &#160;&#160;&#160;&#160 Comments: ${data.descendants} &#160;&#160;&#160;&#160   Author:  ${data.by}`

            // let newsURL = document.createElement('a');
            // newsURL.href = `${data.url}`;
            // newsURL.className = 'card-link'
            // newsURL.innerHTML = `${data.url}`;

            //appending html elements

            // card.appendChild(title);
            // card.appendChild(newsURL);
            // card.appendChild(subtitle);
            // container.appendChild(card);

     
        
    }
    //stretch goal
    function getComments(){

    }
    

 getNews();
 