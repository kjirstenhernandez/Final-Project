import { renderListWithTemplate } from "../utils/utils.mjs";

export default class BreedList {
  constructor(data, parentElement) {
    this.dataSource = data;
    this.element = parentElement;
  }

  async initialize() {
    const catData = await this.dataSource.getData();
    console.log(catData);
    const imageData = await this.dataSource.getImageList();
    console.log(imageData);
    this.buildCatList(catData, imageData);
  }

  // buildList(){}

  buildCatList(catData, imageData) {
    console.log(imageData);
    renderListWithTemplate(basicCatCardTemplate, this.element, catData);
  }
}

// basic template for each cat card (used for "Breeds")
function basicCatCardTemplate(cat, image) {
  return `<li class="cat-card">
    <a class="card_image" href="/breed_detail/?cat=${cat.id}">
        <img
            src="${image}"
            alt="${cat.name} Cat"
            width="100">
        <p class="card_name">${cat.name}</p>
    </a>
    </li>`;
}
