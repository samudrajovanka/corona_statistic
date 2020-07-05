import $ from "jquery";

class dataSource {
    // baseURL = "https://covid19.mathdro.id/api";

    static getGlobalData() {
        return fetch("https://covid19.mathdro.id/api")
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                const date = responseJson.lastUpdate.substring(8, 10);
                const month = responseJson.lastUpdate.substring(5, 7);
                const year = responseJson.lastUpdate.substring(0, 4)

                $("#global-time-update").text(`Data per tanggal ${date}-${month}-${year}`);
                $("#global-confirmed-value").text(`${responseJson.confirmed.value}`);
                $("#global-deaths-value").text(`${responseJson.deaths.value}`);
                $("#global-recovered-value").text(`${responseJson.recovered.value}`);
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
                $("#country_1").text(`${responseJson[0].countryRegion}`)
                $("#country_1_confirmed").text(`${responseJson[0].confirmed}`)

                $("#country_2").text(`${responseJson[1].countryRegion}`)
                $("#country_2_confirmed").text(`${responseJson[1].confirmed}`)

                $("#country_3").text(`${responseJson[2].countryRegion}`)
                $("#country_3_confirmed").text(`${responseJson[2].confirmed}`)

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