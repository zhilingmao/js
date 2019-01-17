function sum(){
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        item = parseFloat(item)
        !isNaN(item)?total += item:null
    }
    return total;
}