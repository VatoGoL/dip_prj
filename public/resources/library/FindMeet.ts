/**
 * Функция для установки определенного куки взята со страницы https://learn.javascript.ru/cookie 
 * @param name - Название поля куки
 * @param value - Значение поля куки
 * @param options - Опции для поля куки
 * @returns - Возвращает значение поля куки
 */
export function setCookie(name: string, value: string, options: {[key: string]: any} = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
/**
 * Функция для установки определенного куки взята со страницы https://learn.javascript.ru/cookie 
 * @param name - Название поля куки
 * @returns - Возвращает значение поля куки
 */
export function getCookie(name:string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
     * @function
     * @param {number} max - число до которого нужно сгенерировать случайное значение 
     * @returns Возвращается сгенерированное случайное значение
     */
export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}