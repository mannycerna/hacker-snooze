
let container = document.querySelector('.container');
container.className = "cursor cursor-circle cursor-hover";
container.id = 'container';

let hackerURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';


let getNews = async () => {
  
    let response = await fetch(hackerURL);

    let data = await response.json();

    let storyData = '';

    for (let i = 0; i < 100; i++){
        
        // console.log(data[i]);
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

        storyData = await storyResponse.json();
        // return storyData;
        appendData(storyData);
        // console.log(storyData)
        // appendData(storyData);
        }
      
       
    }
    
    // let newData = getNews(); 

    function appendData(data) {
        // console.log('hello')//test code

            //creating dynamic elements
            let row = document.querySelector('#row');
            let col = document.querySelector('.col');

            let card = document.createElement('card');
            card.id = 'card';
            card.className = 'card border-warning text-bg-dark mb-1';
            // card.style='width: 18rem';

            let title = document.createElement('h5');
            title.className = 'card-title';
            title.innerHTML = `${data.title} &#160;&#160;&#160;&#160 `;
            title.href = `${data.url}`;

            let subtitle = document.createElement('h6');
            subtitle.className = 'card-subtitle mb-2 text-muted';
            subtitle.innerHTML = `Score: ${data.score} &#160;&#160;&#160;&#160 Comments: ${data.descendants} &#160;&#160;&#160;&#160   Author:  ${data.by}`

            let newsURL = document.createElement('a');
            newsURL.href = `${data.url}`;
            newsURL.className = 'card-link'
            newsURL.innerHTML = `${data.url}`;

            let commentBtn = document.createElement('button');

            //appending html elements
            
            card.appendChild(title);
            card.appendChild(newsURL);
            card.appendChild(subtitle);
            col.appendChild(card);
            row.appendChild(col);
            container.appendChild(row);
            card.appendChild(commentBtn);
            // container.appendChild(card);
            console.log(data);
        
    }
    

 getNews();
 