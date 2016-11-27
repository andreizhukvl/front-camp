const API_URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=d1450e81d3cb4c4ba3f2f5c772206b14';

export default class NewsHelper {
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
        `<h1 class="title">${article.title}</h1>
         <img src="${article.urlToImage}"></img>
         <p class="description">${article.description}</p>
         <p class="link_to_article"><a href="${article.url}">Read full article</a></p>
         <p class="author">By ${article.author} on (${new Date(article.publishedAt).toLocaleString()})</p>`;
      }

      this.container.innerHTML = newsHTML;
    });
  }
}