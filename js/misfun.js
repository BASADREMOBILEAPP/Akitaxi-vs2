$(document).ready(function() {
$('#inicio').click(function(evento) {
$('#segundo').fadeOut(0);
$('#baner-hd').fadeIn(1000);

});

$('#uso').click(function() {
$('#segundo').fadeOut(0);
$("#segundo-s").fadeOut(0);
$("#tercero-s").fadeOut(0);
$("#cuarto-s").fadeOut(0);
$('#baner-hd').fadeOut(0);
$('#segundo').fadeIn(1000);
 var inicio = 0;


for (var inicio = 0; inicio < 4; inicio++) {


	switch(inicio){
		case 0:
			$("#primero-s").fadeIn(1000);
			$("#primero-s").delay(4000).fadeOut(0);
			console.log('soy el cero');
		break;
		case 1:
			$("#segundo-s").delay(4000).fadeIn(1000);
			$("#segundo-s").delay(3000).fadeOut(0);
			console.log('soy el primero');
		break;
		case 2:
			$("#tercero-s").delay(8000).fadeIn(1000);
			$("#tercero-s").delay(3000).fadeOut(0);
			console.log('soy el segundo');
		break;
		case 3:
			$("#cuarto-s").delay(12000).fadeIn(1000);
			$("#cuarto-s").delay(5000).fadeOut(0);
			console.log('soy el tercero');

		break;


	}


};
 // $("4pri++ro-s").delay(300).fadeIn(000);
});
// culminado el uso

});