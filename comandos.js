<<<<<<< HEAD
$(document).ready(() => {
$('.prudutos-item').on("click", "button#mais", function (event) {
    const novaQuantidade = Number($('#qtd').text()) + 1
    const valor = $('.valor-lanche')
    const novoValor = (valor.text().replace(/\D/g, '')/100) * novaQuantidade
  
    $('#qtd').text(novaQuantidade )
    console.log($('.valor-final-item'))
    $('.valor-final-item').text(  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        novoValor,
      ),)
 
    
});

$('.prudutos-item').on("click", "button#menos", function (event) {

    if (Number($('#qtd').text()) > 0) {
    const novaQuantidade = Number($('#qtd').text()) - 1
    const valor = $('.valor-lanche')
    const novoValor = (valor.text().replace(/\D/g, '')/100) * novaQuantidade
  
    $('#qtd').text(novaQuantidade )
    console.log($('.valor-final-item'))
    $('.valor-final-item').text(  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        novoValor,
      ),)
}});

=======
$(document).ready(() => {
$('.prudutos-item').on("click", "button#mais", function (event) {
    const novaQuantidade = Number($('#qtd').text()) + 1
    const valor = $('.valor-lanche')
    const novoValor = (valor.text().replace(/\D/g, '')/100) * novaQuantidade
  
    $('#qtd').text(novaQuantidade )
    console.log($('.valor-final-item'))
    $('.valor-final-item').text(  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        novoValor,
      ),)
 
    
});

$('.prudutos-item').on("click", "button#menos", function (event) {

    if (Number($('#qtd').text()) > 0) {
    const novaQuantidade = Number($('#qtd').text()) - 1
    const valor = $('.valor-lanche')
    const novoValor = (valor.text().replace(/\D/g, '')/100) * novaQuantidade
  
    $('#qtd').text(novaQuantidade )
    console.log($('.valor-final-item'))
    $('.valor-final-item').text(  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        novoValor,
      ),)
}});

>>>>>>> 36ea862127fbf8b75d52ac61d42854840463f3bd
})