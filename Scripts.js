var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = null;
var operand2 = null;
var operator = null;
var result = null;
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%'){ 
            // if an operator is clicked
            if(operator == null){
                operator = value;
                operand1 = parseFloat(display.innerText);
            }   
            else{
                operand2 = parseFloat (display.innerText) ;
                operand1 = eval(operand1 + operator + operand2);
                operand2 = null;
                operator = value;
            }
            //clear display
            display.innerText = "";
        }
        else if( value == 'AC' ){
            display.innerText = "";
            operand1 = null;
            operand2 = null;
            operator = null;
        }
        else if (value == "sign") {
            operand1 = parseFloat(display.innerText);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        }
        else if(value == '='){
        operand2 = parseFloat (display.innerText) ;
        // use eval to get result
            result = eval(operand1 + operator + operand2);
        // Show result on display
            display.innerText = result;
        } else{
        display.innerText += value;
        }

    });
}