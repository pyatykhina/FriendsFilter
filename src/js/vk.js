VK.init({
    apiId: 6674400
})

function authorization() {
    return new Promise(function (resolve, reject) {
        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}

function callAPI(method, params) {
    params.v = 5.76;
  
    return new Promise(function (resolve, reject) {
        VK.api(method, params, function (data) {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.response);
            }
        });
    })
}

export {
    authorization,
    callAPI
}