import { getLocalStorage, setLocalStorage } from "../utils/utils.mjs";

export default class CatDetails {
  constructor(catID, dataSource) {
    this.catID = catID;
    this.dataSource = dataSource;
    this.cat = [];
  }

  async initialize() {
    this.cat = await this.dataSource.findCatById(this.catID);
    this.renderCatDetails("main");

    // add event-listener later for the "add to favorites
  }

  renderCatDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("afterBegin", catDetailTemplate(this.cat));
  }
}

function catDetailTemplate(cat) {
  return `<div class=cat-detail>
    <h1>${cat.name} Cat</h3>
    <h3><a href="${cat.vetstreet_url}">Vetstreet Page</a>
    <br>
    <p>Origin: ${cat.origin}</p>
    <p>Weight: ${cat.weight.imperial} pounds</p>
    <p>Temperament: ${cat.temperament}</p>
    <p>Lifespan: ${cat.life_span} years
    <br>
    <p>${cat.description}</p>
    `;
  //<div class="addFav"><button id=favButton data-id="${cat.id}">Add to Favorites</button></div>
}
