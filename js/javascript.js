var R;

var p2, p1;
var op;

var num;

function btnNumbers(e) {
    R = e.innerHTML;
    // 0 problem in begin
    var num = document.getElementById('txtResult');

    // var zero = document.getElementById('dbzero');
    // if (num.textContent == 0) {
    //     num.textContent != zero.textContent
    // }

    // alert(R);
    // num.textContent = num.textContent + R;

    if (num.textContent == 0) {
        if (e.innerHTML != 00) {

            num.textContent = R;

        }
    } else {
        num.textContent = num.textContent + R;
    }

}


function show() {

    var e = document.getElementById('txtResult');
    // R = e.textContent;
    // e = e.textContent
    if (e.textContent < 10) {
        e.textContent = 0;
    } else {
        var clean = e.textContent;
        clean = clean.toString();
        clean = clean.slice(0, -1);
        clean = parseInt(clean)
        e.textContent = clean

    }
}


function Cleartxt() {
    document.getElementById('txtResult').textContent = 0;
    document.getElementById('txtResult1').textContent = "";
    p1 = p2 = null;
}

function operat(e) {
    p2 = num.textContent;
    console.log('p1=' + p1, 'p2=' + p2, 'op =' + op)
    switch (op) {
        case '*':
            if (e == 1) {
                document.getElementById('txtResult1').textContent = (p1 * p2) + op;

            } else {
                document.getElementById('txtResult1').textContent = (p1 * p2);
            }
            p1 = p1 * p2;

            break;
        case '+':

            if (e == 1) {
                document.getElementById('txtResult1').textContent = (Number(p1) + Number(p2)) + op;

            } else {
                document.getElementById('txtResult1').textContent = (Number(p1) + Number(p2));
            }
            p1 = Number(p1) + Number(p2);
            break;
        case '/':
            if (p2 != 0) {

                if (e == 1) {
                    document.getElementById('txtResult1').textContent = (p1 / p2) + op;

                } else {
                    document.getElementById('txtResult1').textContent = (p1 / p2);
                }
            } else {

                document.getElementById('txtResult1').textContent = 'Eror bro';
            }
            p1 = p1 / p2;
            break;
        case '-':
            if (e == 1) {
                document.getElementById('txtResult1').textContent = (p1 - p2) + op;

            } else {
                document.getElementById('txtResult1').textContent = (p1 - p2);
            }
            p1 = p1 - p2;
            break;
        case '%':

            if (e == 1) {
                document.getElementById('txtResult1').textContent = (p1 % p2) + op;

            } else {
                document.getElementById('txtResult1').textContent = (p1 % p2);
            }
            p1 = p1 % p2;

        default:
            break;

    }
    document.getElementById('txtResult').textContent = "";

}

function operator(e) {
    num = document.getElementById('txtResult');
    // if(p2 !=null && p1)
    op = e.value;
    // save num
    if (p1 == null) {
        p1 = num.textContent;

        // earase the p2 tag
        document.getElementById('txtResult').textContent = 0;
        // put num in p1 tag


        // p2.textContent == p1 + op;


        document.getElementById('txtResult1').textContent = p1 + op;

    } else {
        operat(1);
    }


    //save the oparator



    // if number1 == null save number1
    // save oparator
    // if number1 != null save number2
    // Do operat for num1 oparator num2

}

function equal() {

    operat(2);


}



function Time() {
    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('Time').innerText = time;
    myTime();


}
let timeout;

function myTime() {
    timeout = setTimeout(Time, 1000);
}