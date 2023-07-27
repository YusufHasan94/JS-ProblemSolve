function calculator(operand1, operand2, operator){
    if(operator=='+'){
        return operand1+operand2;
    }else if(operator=='-'){
        return operand1-operand2;
    }else if(operator=='*'){
        return operand1*operand2;
    }else if(operator=='/'){
        if(operand2!==0){
            return operand1/operand2;
        }else{
            return "invalid division";
        }
    }else{
        return "invalid operator";
    } 
}
console.log(calculator(4,4,'+'));