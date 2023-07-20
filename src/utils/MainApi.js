class MainApi {
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


    //получение сохранённых фильмов с сервера
    getSavedMovies() {
        const token = localStorage.getItem('token');
        return this._request(`${this.baseUrl}movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }

    //добавить фильм в сохранённые
    saveMovie(movie) {
        const token = localStorage.getItem('token');
        return this._request(`${this.baseUrl}movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: (`https://api.nomoreparties.co/${movie.image.url}`),
                trailerLink: movie.trailerLink,
                thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
        })
    }

    //удалить фильм из сохранённых
    removeMovie(movieId) {
        const token = localStorage.getItem('token');
        return this._request(`${this.baseUrl}movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }


    //получения информации о пользователе с сервера
    getUserInfo() {
        const token = localStorage.getItem('token');
        return this._request(`${this.baseUrl}users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }

    //изменение информации о пользователе
    changeUserInfo(newInfo) {
        const token = localStorage.getItem('token');
        const newName = newInfo.name;
        const newEmail = newInfo.email;
        return this._request(`${this.baseUrl}users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: newName,
                email: newEmail
            })
        })
    }

};

const newMainApi = new MainApi({
    baseUrl: 'http://api.movies-explorer.rindz.nomoreparties.sbs/'
})

export { newMainApi };