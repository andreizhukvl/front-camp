const API_URL = 'https://newsapi.org/v1/sources?apiKey=d1450e81d3cb4c4ba3f2f5c772206b14';


export default class SourcesHelper {
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
      let sources = data.sources;

      for (let source of sources) {
        var option = document.createElement("option");
        option.text = source.name;
        option.value = source.id;

        this.container.options.add(option);
      }
    }).catch(() => {});
  }
}