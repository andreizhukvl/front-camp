const API_URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=d1450e81d3cb4c4ba3f2f5c772206b14';

class NewsHelper {
  constructor(container) {
    this.container = container;
  }

  load() {
    fetch(API_URL).then(result => {
      if (result.ok)
      {
        return result.json();
      }
    }).then(data => {
      let newsHTML = ``;
      for(let article of data.articles) {
        newsHTML += 
        `<div class='article'>
           <a href="${article.url}">
             <div>
               <h2>${article.title}</h2>
               <img src="${article.urlToImage}"></img>
               <p>${article.description}</p>
             </div>
           </a>
         </div>`;
      }

      this.container.innerHTML = newsHTML;
    });
  }
}