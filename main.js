/* Массив `let users` содержит список объектов пользователей, где каждый объект представляет пользователя с
различными свойствами, такими как индекс, статус isActive, баланс, имя, пол, номер телефона и адрес. */

let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

/* Строки `let comma = /,/gi;` и `let currency = /$/gi;` создают регулярные выражения в
JavaScript. */
let comma = /,/gi;
let currency = /\$/gi;

/* Эта строка кода фильтрует массив `users` на основе условия, где проверяется, является ли баланс
каждого пользователя больше, чем  и создает новый массив с номерами телефонов. */
let usersPhoneNumber = users.filter(user => parseFloat(user.balance.replace(currency, '').replace(comma, '')) > 2000).map(user => user.phone);

console.log(usersPhoneNumber);

/* Эта строка кода использует метод `reduce` для массива `users`, чтобы вычислить сумму балансов
для всех пользователей */
let usersBalanceSum = users.reduce((sum, user) => sum + parseFloat(user.balance.replace(currency, '').replace(comma, '')), 0);

console.log(usersBalanceSum);
