import "../component/search-bar.js";
import "../component/data-country.js";
import dataSource from "../data/data-source.js";

const main = () => {
    dataSource.getGlobalData();
    dataSource.getTopGlobal();

    const searchElement = document.querySelector("search-bar");
    const dataCountry = document.querySelector("data-country");

    const onButtonSearchClicked = (e) => {
        e.preventDefault()
        if (searchElement.value != "") {
            dataSource.searchCountry(searchElement.value)
                .then(renderResult)
                .catch(fallbackResult)
        }
    }

    const renderResult = result => {
        dataCountry.country = searchElement.value;
        dataCountry.values = result;
    }

    const fallbackResult = message => {
        dataCountry.renderError(message);
    }

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;