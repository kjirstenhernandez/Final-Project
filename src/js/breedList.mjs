export default class BreedList{

    constructor (data, parentElement) {
        this.dataSource = data;
        this.element = parentElement;
    }

    async initialize(){
        buildCatList(data);
        }

    // buildList(){}

    buildCatList(catData) {
        renderListWithTemplate(catCardTemplate, this.element, catData)
    }

}

function catCardTemplate(cat) {
    return `<li class="cat-card">
    <a href="/cat_detail/?cat=${cat.id}">
        <img
            src="https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}"
            alt="${cat.name} Cat">
        <p class="card_name>${cat.name}</p>
    </a>
    </li>`;
}