var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Card = /** @class */ (function () {
    function Card(person_id, name, surname, groups, photo_url) {
        if (photo_url === void 0) { photo_url = ""; }
        this.person_id = person_id;
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
    Card.prototype.getPersonId = function () {
        return this.person_id;
    };
    Card.prototype.drawCard = function () {
        var create = true;
        var card = " <div class=\"card\">\n                        <div class=\"card__image-box\">\n                            <img class=\"card__image\" src=\"".concat(this.photo_url, "\" alt=\"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ").concat(this.id, "\"/>\n                        </div>\n                        <div class=\"card__info-box\">\n                            <p class=\"card__info-name card__text-centr\">").concat(this.name, " ").concat(this.surname, "</p>\n                            <h4 class=\"card__info-text card__text-centr\">\u0427\u0442\u043E \u0443 \u0432\u0430\u0441 \u043E\u0431\u0449\u0435\u0433\u043E?</h4>\n                            <p class=\"card__info-title card__s\">\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E:</p>\n                            <ul class=\"card__ul\">");
        card += "<li class=\"card__info-text-li\">\n                    ".concat(this.groups, "\n                </li>");
        card += "</ul>\n                \n            </div>\n            <form class=\"card__chat\" action=\"../preview/preview.html\" method=\"get\">\n                <span class=\"card__start-span\">\n                    <input type=\"text\" class=\"card__none\" name=\"id\"/>\n                    <input type=\"submit\" class=\"card__start-chat\" value=\"\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0449\u0435\u043D\u0438\u0435!\"/>\n                </span>\n            </form>\n        </div>";
        var catalog = document.getElementsByClassName('catalog')[0];
        catalog.insertAdjacentHTML("beforeend", card);
        this.initialize();
        return create;
    };
    Card.prototype.initialize = function () {
        //записываем id человека в форму чтобы потом обработать
        var temp = document.getElementsByClassName('card__none');
        temp[this.id]["value"] = this.person_id;
    };
    Card.count = 0;
    return Card;
}());
//Функция для генерации случайного числа от 0 до max взята с сайта mdn
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
//чтение кода для работы с аккаунтом пользователя
var search = new URLSearchParams(document.location.search);
var code = search.get("token");
var old_code = getCookie("code");
//Проверка на то что это новый код
if (typeof (old_code) !== undefined) {
    if (old_code !== code) {
        var date = new Date(86400 - Date.now());
        var time = date.toISOString();
        document.cookie = encodeURIComponent("code") + "=" + encodeURIComponent(code) + "; path=/" + ";max-age=" + encodeURIComponent(time) + ";";
    }
}
var max_future_friends = 3;
var max_members = 100;
/*let card_1 = new Card("Анатолий", "Батонов", ["Мемуары ценителей научных мемов","Cut the Crap"], "../../resources/choise-chat/one.png");*/
var token = document.cookie.slice(5); //"code=" - 5 символов
var url = "/method/" + "groups.get?" + "&access_token=" + token + "&v=5.131";
var fGroup = fetch(url, {
    method: 'GET',
    headers: {
        "Origin": "http://localhost",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
    }
})
    .then(function (response) { return response.json(); })
    .then(function (data) {
    return data["response"]["items"];
});
fGroup.then(function (data) {
    //Получаем колличество участников групп
    function getCountMembers() {
        return __awaiter(this, void 0, void 0, function () {
            var r, i, group_id, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        r = [[], []];
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < max_future_friends)) return [3 /*break*/, 4];
                        group_id = data[getRandomInt(data.length)];
                        url = "/method/" + "groups.getById?" + "group_id=" + group_id + "&fields=members_count" + "&access_token=" + token + "&v=5.131";
                        r[0][i] = group_id;
                        _a = r[1];
                        _b = i;
                        return [4 /*yield*/, fetch(url).then(function (response) {
                                return response.json();
                            })
                                .then(function (data) {
                                return data["response"][0]["members_count"];
                            })];
                    case 2:
                        _a[_b] = _c.sent();
                        _c.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        ;
                        return [2 /*return*/, r];
                }
            });
        });
    }
    function getMembers(count) {
        return __awaiter(this, void 0, void 0, function () {
            var r, _loop_1, out_j_1, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = [[], []];
                        _loop_1 = function (j) {
                            var i, _b, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        i = j;
                                        if (count[1][i] < max_members) {
                                            url = "/method/" + "groups.getMembers?" +
                                                "group_id=" + count[0][i] +
                                                "&count=" + count[1][i] +
                                                "&access_token=" + token + "&v=5.131";
                                        }
                                        else {
                                            url = "/method/" + "groups.getMembers?" +
                                                "group_id=" + count[0][i] +
                                                "&offset=" + Math.floor(count[1][i] / max_members) +
                                                "&count=" + max_members +
                                                "&access_token=" + token + "&v=5.131";
                                        }
                                        r[0][i] = count[0][i];
                                        _b = r[1];
                                        _c = i;
                                        return [4 /*yield*/, fetch(url).then(function (response) {
                                                return response.json();
                                            })
                                                .then(function (data) {
                                                if (data["response"] !== undefined) {
                                                    var result = data["response"]["items"];
                                                    return result[getRandomInt(result.length)];
                                                }
                                                else {
                                                    j--;
                                                }
                                            })];
                                    case 1:
                                        _b[_c] = _d.sent();
                                        out_j_1 = j;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        j = 0;
                        _a.label = 1;
                    case 1:
                        if (!(j < max_future_friends)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(j)];
                    case 2:
                        _a.sent();
                        j = out_j_1;
                        _a.label = 3;
                    case 3:
                        j++;
                        return [3 /*break*/, 1];
                    case 4:
                        ;
                        return [2 /*return*/, r];
                }
            });
        });
    }
    function createFriend(data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, i, gr_name, person, friends, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < max_future_friends)) return [3 /*break*/, 5];
                        url = "/method/" + "groups.getById?" +
                            "group_id=" + data[0][i] +
                            "&access_token=" + token + "&v=5.131";
                        return [4 /*yield*/, fetch(url).then(function (response) { return response.json(); })
                                .then(function (data) {
                                return data["response"][0]["name"];
                            })];
                    case 2:
                        gr_name = _a.sent();
                        url = "/method/" + "users.get?" +
                            "user_ids=" + data[1][i] +
                            "&fields=photo_200" +
                            "&name_case=nom" +
                            "&access_token=" + token + "&v=5.131";
                        return [4 /*yield*/, fetch(url).then(function (response) { return response.json(); })
                                .then(function (data) {
                                return data["response"][0];
                            })];
                    case 3:
                        person = _a.sent();
                        result[i] = {
                            "group_name": gr_name,
                            "friend_firstname": person["first_name"],
                            "friend_lastname": person["last_name"],
                            "friends_photo": person["photo_200"],
                            "friend_id": person["id"]
                        };
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        friends = [];
                        for (i = 0; i < max_future_friends; i++) {
                            friends[i] = new Card(result[i]["friend_id"], result[i]["friend_firstname"], result[i]["friend_lastname"], result[i]["group_name"], result[i]["friends_photo"]);
                            friends[i].drawCard();
                        }
                        document.getElementsByClassName("notification")[0].innerHTML = "Если не нравятся подобранные люди, нажми f5!";
                        return [2 /*return*/];
                }
            });
        });
    }
    //получаем колличество участников групп
    var c_members = getCountMembers();
    //получаем потенциальных друзей
    var members = c_members.then(function (data) {
        var result;
        //Возникают непонятные ошибки, будто нет в ответе поля "items", а решается она тем что нужно отправить запрос повторно
        result = getMembers(data);
        return result;
    });
    members.then(function (data) {
        //data - массив с id группы [0] и id участника группы [1]
        createFriend(data);
    });
});
//let code: string = document.location.search
/* https://htmlweb.ru/geo/api_get_data.php */
