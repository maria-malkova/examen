// // Выбираем кнопку
// const btn = document.querySelector(".header__symbol");
// // Выбираем элемент link со стилями темы
// const theme = document.querySelector("#theme-link");

// // Ловим нажатие на кнопку
// btn.addEventListener("click", function() {
//   // Если в URL "ligh-theme.css"
//   if (theme.getAttribute("href") == "css/style.css") {
//     // ... переключаем на "dark-theme.css"
//     theme.href = "css/dark-theme.css";
//   // Иначе...
//   } else {
//     // ... переключаем на "light-theme.css"
//     theme.href = "css/style.css";
//   }
// });


// Находим нужную кнопку
const btn = document.querySelector('.header__symbol');

// Прослушиваем нажатие на кнопку
btn.addEventListener('click', function() {
    // Переключаем (добавляем/удаляем) класс .dark-theme
    document.body.classList.toggle('dark-theme'); 
    document.header.classList.toggle('dark-theme'); // не работает

})


