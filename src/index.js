import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import $ from "jquery";
import "./styles/style.css";
import main from "./scripts/view/main.js";
import dataSource from "./scripts/data/data-source.js";


const displayTime = () => {
    moment.locale("id");
    $(".date-time").text(`${moment().format("LL")} - ${moment().format("LTS")}`);
}

const updateTime = () => {
    displayTime()
    setTimeout(updateTime, 1000);
}

const clickedRowMostCases = () => {
    $("#most_cases tr").on("click", function () {
        const name_country = $(this).children(".name_country").html();
        const dataCountry = document.querySelector("data-country");

        dataSource.searchCountry(name_country)
            .then(function (result) {
                dataCountry.country = name_country;
                dataCountry.values = result;
            })
    })
}

updateTime();
clickedRowMostCases();

document.addEventListener("DOMContentLoaded", main);