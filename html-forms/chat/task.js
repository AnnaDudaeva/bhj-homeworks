const chatWidget = document.querySelector('div.chat-widget');

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

const messages = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages-container');

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && input.value != '') {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let botMessages = [
      'Добрый день! До свидания!',
      'Кто тут?',
      'К сожалению все операторы заняты. Не пишите нам больше',
      'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
      'Мы ничего не будем вам продавать!',
      'Где ваша совесть?',
    ];
    const botSay = botMessages[Math.floor(Math.random() * botMessages.length)];

    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
          ${input.value}
        </div>
      </div>
      `;

      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
          ${botSay}
        </div>
      </div>
      `;

      messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
    }
  })