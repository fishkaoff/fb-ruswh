const chatid = "1704484637"
const token = "6917799849:AAHWJS-fFu4saFUuSnSLmxpmZ_64r9FJaxA"



const form = document.getElementById('form');


function sendMsg(data) {
    if (!data.name || !data.email) {
        alert("Необходимо заполнить все поля")
        return 0
    }

    var url = 'https://api.telegram.org/bot' + token + '/sendMessage'; 
    var body = JSON.stringify({ 
        chat_id: chatid,
        parse_mode: 'Markdown', 
        text: '*Новая заявка*\n\n*Имя*: ' + data.name + '\n*Почта для связи:* ' + data.email + '\n*Контактный телефон:* ' + data.phone + '\n*Сообщение пользователя:* ' + data.message
    });
    var xhr = new XMLHttpRequest(); 
    xhr.open('POST', url, true); 
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 
    xhr.send(body);
    alert("Сообщение отправлено")
}

function handleSubmit(e) {
    e.preventDefault();
    
    const name = form.querySelector('[name="name"]'),
        email = form.querySelector('[name="email"]'),
        phone = form.querySelector('[name="phone"]'),
        message = form.querySelector('[name="message"]')

    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }

    sendMsg(data)
}


form.addEventListener('submit', handleSubmit);

