class MoviesApi {
    constructor(data) {
        this.baseUrl = data.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }


    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }


    //получение фильмов с сервера
    getInitialMovies() {
        return this._request(`${this.baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }



};

const newMoviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})

export { newMoviesApi };