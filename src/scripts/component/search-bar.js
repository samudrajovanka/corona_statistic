class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    get clicked() {
        return this._clickEvent;
    }

    render() {
        this.innerHTML = `
        <form>
            <div class="row">
                <div class="col-10">
                    <input class="form-control mr-sm-2" type="search" id="searchElement" placeholder="Search Country"
                        aria-label="Search">
                </div>
                <div class="col">
                    <button class="btn btn-success my-2 my-sm-0" id="searchButtonElement" type="submit">Search</button>
                </div>
            </div>
        </form>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);

    }
}

customElements.define("search-bar", SearchBar);