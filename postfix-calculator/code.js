var str = "56-";

console.log(calcPostFix(str));

function calcPostFix(input) {

  var stack = [];
  var lhs, rhs;

  for(var i=0; i<input.length; i++) {
    switch(input[i]) {
      case '*':
        rhs = stack.pop();
        lhs = stack.pop();
        stack.push(lhs * rhs);
        break;
      case '/':
        rhs = stack.pop();
        lhs = stack.pop();
        stack.push(lhs / rhs);
        break;
      case '-':
        rhs = stack.pop();
        lhs = stack.pop();
        stack.push(lhs - rhs);
        break;
      case '+':
        rhs = stack.pop();
        lhs = stack.pop();
        stack.push(lhs + rhs);
        break;
      default:
        stack.push(+input[i]);
        break;
    }
  }
  return stack.pop();
};