function calculate(expression) {
    try {
        let exp = expression;
        exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
        return eval(exp);
    } catch (error) {
        return "Error";
    }
}
