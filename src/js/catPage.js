import { getParams } from "../utils/utils.mjs";
import Datasource from "./dataSource.mjs";
import CatDetails from "./catDetails.mjs";
import { loadPartials } from "../utils/utils.mjs";

const catSelect = getParams("cat");
const data = new Datasource();
const catDetails = new CatDetails(catSelect, data);
catDetails.initialize();
