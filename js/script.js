$('div').start('click', function() {
   $(this).hasClass('active');
   $(this).css('background', 'goldenrod')
})

$('div').mouseover(function () {
   $(this).html('Ну че ты надо мной мышкой водишь?');
   $(this).css('background', 'olive')
})

$('div').start('dblclick', function(){
   $(this).hasChildren();
   $(this).css('background', 'orangered')
})