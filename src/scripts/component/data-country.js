class DataCountry extends HTMLElement {

    set country(country) {
        this._country = country
    }

    set values(values) {
        this._values = values;
        this.render();
    }

    render() {
        const date = this._values.lastUpdate.substring(8, 10);
        const month = this._values.lastUpdate.substring(5, 7);
        const year = this._values.lastUpdate.substring(0, 4)

        const confirmed = this.numberWithPoint(this._values.confirmed.value);
        const death = this.numberWithPoint(this._values.deaths.value);
        const recovered = this.numberWithPoint(this._values.recovered.value);

        this.innerHTML = `
            <h3 class="mt-4 mb-4 text-center text-capitalize">${this._country}</h3>
                <div class="card-deck">
                    <div class="card">
                        <h5 class="card-header text-center" id="header-confirmed">Terkonfirmasi</h5>
                        <div class="card-body">
                            <p class="card-text text-center" id="country-confirmed-value">${confirmed}</p>
                        </div >
                    </div >

    <div class="card">
        <h5 class="card-header text-center" id="header-deaths">Meninggal</h5>
        <div class="card-body">
            <p class="card-text text-center" id="country-deaths-value">${death}</p>
        </div>
    </div>

    <div class="card">
        <h5 class="card-header text-center" id="header-recovered">Sembuh</h5>
        <div class="card-body">
            <p class="card-text text-center" id="country-recovered-value">${recovered}</p>
        </div>

    </div>
                </div >
    <h6 class="mt-3">Terakhir diperbarui: ${date}-${month}-${year}</h6>`;
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        <style>
            .placeholder {
                font- weight: lighter;
                -webkit - user - select: none;
                color: rgba(0, 0, 0, 0.5);
                -ms - user - select: none;
                -moz - user - select: none;
                user - select: none;
            }
        </style >
        <h2 class="placeholder mt-4">${message}</h2>`
    }

    numberWithPoint(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

customElements.define("data-country", DataCountry);