
var total = 0;

$('#entry').submit(function() {
	var input = $('#newEntry').val();
	format(input);
	addTotal(price);
	console.log(price);
	$('#entries').append('<tr><td></td><td>'+total+'</td></tr>');
	$('#newEntry').val('');
	return false;
});

function format (input) {
	input = parseFloat(input);
	price = input.toFixed(2);
	return price;
}

function addTotal (price) {
	total += price;
	console.log(total);
	total = '$' + total;
	return total;
}
