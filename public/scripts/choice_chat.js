var Card = /** @class */ (function () {
    function Card(name, surname, groups, photo_url) {
        if (photo_url === void 0) { photo_url = ""; }
        this.id = Card.count;
        this.name = name;
        this.surname = surname;
        this.groups = groups;
        this.photo_url = photo_url;
        Card.count++;
    }
    Card.getCount = function () {
        return Card.count;
    };
    Card.prototype.getId = function () {
        return this.id;
    };
    Card.prototype.drawCard = function () {
        var create = true;
        var card = " <div class=\"card\">\n                        <div class=\"card__image-box\">\n                            <img class=\"card__image\" src=\"".concat(this.photo_url, "\" alt=\"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ").concat(this.id, "\"/>\n                        </div>\n                        <div class=\"card__info-box\">\n                            <p class=\"card__info-name card__text-centr\">").concat(this.name, " ").concat(this.surname, "</p>\n                            <h4 class=\"card__info-text card__text-centr\">\u0427\u0442\u043E \u0443 \u0432\u0430\u0441 \u043E\u0431\u0449\u0435\u0433\u043E?</h4>\n                            <p class=\"card__info-title card__s\">\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E:</p>\n                            <ul class=\"card__ul\">");
        for (var i = 0; i < this.groups.length; i++) {
            card += "<li class=\"card__info-text-li\">\n                        ".concat(this.groups[i], "\n                    </li>");
        }
        card += "</ul>\n                \n            </div>\n            <form class=\"card__chat\" action=\"../chat/chat.html\">\n                <span class=\"card__start-span\">\n                    <input type=\"submit\" class=\"card__start-chat\" value=\"\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0449\u0435\u043D\u0438\u0435!\"/>\n                </span>\n            </form>\n        </div>";
        var catalog = document.getElementsByClassName('catalog')[0];
        catalog.insertAdjacentHTML("beforeend", card);
        return create;
    };
    Card.count = 0;
    return Card;
}());
//разбор get запроса
var get_request = new URLSearchParams(window.location.search);
var gender_s = get_request.get('gender');
var min_age = get_request.get('age-min');
var max_age = get_request.get('age-max');
var city = get_request.get('city');
/*let card_1 = new Card("Анатолий", "Батонов", ["Мемуары ценителей научных мемов","Cut the Crap"], "../../resources/choise-chat/one.png");*/
var token = document.cookie.slice(5); //"code=" - 5 символов
var url = "https://api.vk.com/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";
var req = fetch(url, {
    method: 'GET',
    headers: {
        "Origin": "http://localhost",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
    }
}).
    then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
});
//let code: string = document.location.search
/* https://htmlweb.ru/geo/api_get_data.php */
