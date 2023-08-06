// Находим нужную кнопку
const btn = document.querySelector('.header__symbol');
// Прослушиваем нажатие на кнопку
btn.addEventListener('click', function() {
    // Переключаем (добавляем/удаляем) класс .dark-theme
    document.body.classList.toggle('dark-theme'); 
})

$(document).ready(function (){
    $('.respect__name').click(function(){
        if ($(this).siblings('.respect__text').hasClass('respect__text--hide')){
            $('.respect__text').removeClass('respect__text--hide');
            $(this).siblings('.respect__text').removeClass('respect__text--hide');
            $('.respect__name').removeClass('respect__name--hide');
            $(this).removeClass('respect__name--hide');
        } else {
            $(this).siblings('.respect__text').addClass('respect__text--hide');
            $(this).addClass('respect__name--hide');
        }
    })
})





