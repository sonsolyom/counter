let counter = 0;

$('.btn-inc').click(() =>{
    counter++;
    $('h2').text(counter);
})

$('.btn-dec').click(() =>{
    counter--;
    $('h2').text(counter);
})