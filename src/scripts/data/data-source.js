import $ from "jquery";

function numberWithPoint(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

class dataSource {

    static getGlobalData() {
        return fetch("https://covid19.mathdro.id/api")
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                const date = responseJson.lastUpdate.substring(8, 10);
                const month = responseJson.lastUpdate.substring(5, 7);
                const year = responseJson.lastUpdate.substring(0, 4)

                const confirmed = numberWithPoint(responseJson.confirmed.value);
                const death = numberWithPoint(responseJson.deaths.value);
                const recovered = numberWithPoint(responseJson.recovered.value);

                $("#global-time-update").text(`Data per tanggal ${date}-${month}-${year}`);
                $("#global-confirmed-value").text(`${confirmed}`);
                $("#global-deaths-value").text(`${death}`);
                $("#global-recovered-value").text(`${recovered}`);
            })
            .catch(error => {
                alert(error);
            })
    }

    static getTopGlobal() {
        return fetch("https://covid19.mathdro.id/api/confirmed")
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                const confirmedCountry1 = numberWithPoint(responseJson[0].confirmed);
                const confirmedCountry2 = numberWithPoint(responseJson[1].confirmed);
                const confirmedCountry3 = numberWithPoint(responseJson[2].confirmed);

                $("#country_1").text(`${responseJson[0].countryRegion}`)
                $("#country_1_confirmed").text(`${confirmedCountry1}`)

                $("#country_2").text(`${responseJson[1].countryRegion}`)
                $("#country_2_confirmed").text(`${confirmedCountry2}`)

                $("#country_3").text(`${responseJson[2].countryRegion}`)
                $("#country_3_confirmed").text(`${confirmedCountry3}`)

            })
            .catch(error => {
                alert(error);
            })
    }

    static searchCountry(country) {
        return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.confirmed) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${country} is not found`);
                }
            })
    }

}

export default dataSource;