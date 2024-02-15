const apiURL = "https://api.thecatapi.com/v1/breeds";

const imageBase =
  "/Users/marketing/Documents/BYU-I/WDD 330/Final Project 2024/final-project/src/public/json/images.json";
export default class Datasource {
  constructor() {}

  async getData() {
    const response = await fetch(apiURL);
    const data = await convertToJson(response);
    return data;
  }

  async getImageList() {
    const response = await fetch(imageBase);
    // const data = await convertToJson(response);
    return response;
  }

  async findImagebyId(id) {
    console.log(imageBase + id);
    const response = await fetch(imageBase + id);
    const data = await convertToJson(response);
    return data;
  }

  async findCatbyId(id) {
    const response = await fetch(apiURL);
    const data = await convertToJson(response);
    const cat = data.filter((item) => item.id == id);
    return cat[0];
  }
}

export function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
