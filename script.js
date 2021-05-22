function getRangeValue() {
    document.getElementById("Rangerate").innerHTML = document.getElementById("rate").value;
}

function validateAmount() {
    var principal = parseInt(document.getElementById("principal").value);
    if (!principal > 0) {
        alert("Enter a positive number or null");
        document.getElementById("principal").focus();
    }

}


function compute() {
    var year = parseInt(document.getElementById("years").value);
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var interest = principal * year * rate / 100;
    var next_year = new Date().getFullYear() + year;

    document.getElementById("result").innerHTML =
        "If you deposit <mark><strong>" + principal +
        "</mark></strong>,<br/>" +
        "at an interest rate of <mark><strong>" + rate + "%" +
        "</mark></strong>,<br/>" +
        "You will receive an amount of <mark><strong>" + interest +
        "</mark></strong>,<br/> " + "in the year <mark><strong>" + next_year +
        "</mark></strong><p><footer>&#169; Everyone Can Get Rich</footer></p>";

}
