var side = 10;
var row = "";
$(document).ready(function () {
    draw();
    setBoxSize;
    $('#resetBtn').click(function () { // resets the color of all boxes to white. 
        resetColor();
    });
    $('#sizeBtn').click(function () {
        side = prompt("How many squares should go on each side?")
        draw();
    });
});

var setBoxSize = function () {
    hw = 400/side;
    $('.lilbox').css(hw + 'px');
    $('.lilbox').width(hw + ' px');  
};
var resetColor = function () {
    $('.lilbox').css('background-color', 'white');
}
var draw = function () {
    $('.container').empty();
    $('.container').append('<table>');
    row = "";
    for (var i = 1; i <= side; i++) { //generates table row of 'side' cells and puts in variable "row"
        row += '<td><div class=lilbox></div></td>'
    }
    for (var j = 1; j <= side; j++) { //appends 'side' number of rows to the end of the container
        $('.container').append('<tr>' + row + '</tr>');
    };
    $('.container').append('</table>');
    setBoxSize();

    $('.lilbox').mouseover(function(){
        $(this).css('background-color','black');
    });
};