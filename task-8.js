
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login = prompt("Введите новый логин от 4 до 16 символов");

const isLoginValid = function (login) {
    if (login.length < 4 && login.length > 16) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');

        return false;   
}
    return true;
};

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        alert('Такой логин уже используется!');
        return false;
    }

    return true;

};


const addLogin = function (allLogins, login) {
if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
alert('Логин успешно добавлен!');
logins.push(login);

}

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'