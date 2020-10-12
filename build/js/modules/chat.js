"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var messageForm = document.getElementById("message-form");
  var messageField = document.getElementById("message-field");
  var messageList = document.getElementById("messages");
  var chatBlock = document.querySelector(".js-chat");
  messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var scrollToBottom = function scrollToBottom() {
      if (messageList.scrollHeight > chatBlock.offsetHeight) {
        chatBlock.scrollTop = messageList.scrollHeight;
      }
    };

    var getAnswer = function getAnswer() {
      setTimeout(function () {
        var answerEl = document.createElement("li");
        var placeholder = document.createElement("div");
        var textEl = document.createElement("p");
        placeholder.classList.add("chat__placeholder");

        for (var i = 0; i < 3; i++) {
          var dot = document.createElement("span");
          placeholder.appendChild(dot);
        }

        answerEl.appendChild(placeholder);
        answerEl.classList.add("chat__message");
        answerEl.classList.add("chat__message--incoming");
        answerEl.classList.add("chat__message--last");
        var answer = Math.floor(Math.random() * 2);
        var answerText;

        if (answer) {
          answerText = "\u0414\u0430";
        } else {
          answerText = "\u041D\u0435\u0442";
        }

        textEl.innerText = answerText;
        textEl.classList.add("hidden");
        answerEl.appendChild(textEl);
        messageList.appendChild(answerEl);
        scrollToBottom();
        setTimeout(function () {
          var lastMessage = document.querySelector(".chat__message--last");

          if (lastMessage) {
            var lastMessagePlaceholder = lastMessage.querySelector(".chat__placeholder");
            var lastMessageText = lastMessage.querySelector("p");
            lastMessagePlaceholder.classList.add("chat__placeholder--hidden");
            setTimeout(function () {
              lastMessagePlaceholder.remove();
            }, 400);
            lastMessageText.classList.remove("hidden");
            lastMessage.classList.remove("chat__message--last");
          }
        }, 700);
      }, 700);
    };

    var postQuestion = function postQuestion() {
      if (messageField.value) {
        var messageEl = document.createElement("li");
        messageEl.classList.add("chat__message");
        var messageText = messageField.value;
        var text = document.createElement("p");
        text.innerText = messageText;
        messageEl.appendChild(text);
        messageEl.classList.add("chat__message--outcoming");
        messageList.appendChild(messageEl);
        messageField.value = "";
        messageField.setAttribute("disabled", "true");
        scrollToBottom();
        getAnswer();
        messageField.removeAttribute("disabled");
        messageField.focus();
      }
    };

    postQuestion();
  });
};

exports["default"] = _default;