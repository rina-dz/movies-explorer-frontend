class authApi {
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


    
    //регистрация 
    registration(info) {
        const newName = info.name;
        const newEmail = info.email;
        const newPassword = info.password;
        return this._request(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": newName,
                "password": newPassword,
                "email": newEmail
            })
        })
    }


    //авторизация 
    authorization(password, email) {
        return this._request(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email})
        })
    }

}

const newAuthApi = new authApi({
    baseUrl: 'http://api.movies-explorer.rindz.nomoreparties.sbs'
})

export { newAuthApi };