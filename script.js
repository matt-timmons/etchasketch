var side = 10;
var total = 400;
var hw = total / side;
var row = "";
$(document).ready(function () {
    draw();
    setBoxSize();
    $('#resetBtn').click(function () { // resets the color of all boxes to white. 
        resetColor();
    });
    $('#sizeBtn').click(function () {
        side = prompt("How many squares should go on each side?")
        draw();
        setBoxSize();
    });
});

var setBoxSize = function () {
    hw = total / side;    //hw is height/width of each lilbox. 
    console.log("height and width are: ", hw);
    $('.lilbox').css('height', hw + 'px').css('width', hw + 'px');
};
var resetColor = function () {
    $('.lilbox').css('background-color', 'white');
}
var draw = function () {
    $('.container').empty();
    var tableEl = $('<table>');
    $('.container').append(tableEl);
    var row = "";
    for (var i = 1; i <= side; i++) { //generates table row of 'side' cells and puts in variable "row"
        row += '<td><div class="lilbox"></div></td>'
    }
    for (var j = 1; j <= side; j++) { //appends 'side' number of rows to the end of the container
        tableEl.append('<tr>' + row + '</tr>');
    };
    setBoxSize();

    $('.lilbox').mouseover(function(){
        $(this).css('background-color','black');
    });
};