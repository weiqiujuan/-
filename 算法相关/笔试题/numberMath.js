function compute(str) {
    var symbol_stack = [];
    var number_stack = [];
    var hasLeftQuote = false;
    for (var i = 0; i < str.length; i++) {
        var s_len = symbol_stack.length;
        var n_len = number_stack.length;
        if (str[i] === '(') {
            symbol_stack.push(str[i]);
            hasLeftQuote = true;
        } else if (str[i] === ')') {
            symbol_stack.splice(s_len - 1, 1);
            s_len = symbol_stack.length;
            if (s_len > 0 && n_len > 1) {
                if (symbol_stack[s_len - 1]  === 'Q') {
                    number_stack[n_len - 1] = Q(number_stack[n_len - 1], number_stack[n_len - 2]);
                    symbol_stack.splice(s_len - 1, 1);
                } else if (symbol_stack[s_len - 1] === 'N') {
                    number_stack[n_len - 1] = N(number_stack[n_len - 1], number_stack[n_len - 2]);
                    symbol_stack.splice(s_len - 1, 1);
                }
            }
        } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            if (hasLeftQuote) {
                hasLeftQuote = false;
                if (symbol_stack[s_len - 1] === 'Q') {
                    number_stack.push(Q(number_stack[n_len - 1], str.charCodeAt(i) - 48));
                    symbol_stack.splice(s_len - 1, 1);
                } else if (symbol_stack[s_len - 1] === 'N') {
                    number_stack.push(N(number_stack[n_len - 1], str.charCodeAt(i) - 48));
                    symbol_stack.splice(s_len - 1, 1);
                } else {
                    number_stack.push(str.charCodeAt(i) - 48);
                }
            } else {
                if (symbol_stack[s_len - 1] ==='Q') {
                    number_stack[n_len - 1] = Q(number_stack[n_len - 1], str.charCodeAt(i) - 48);
                    symbol_stack.splice(s_len - 1, 1);
                } else if (symbol_stack[s_len - 1] === 'N') {
                    number_stack[n_len - 1] = N(number_stack[n_len - 1], str.charCodeAt(i) - 48);
                    symbol_stack.splice(s_len - 1, 1);
                } else {
                    number_stack.push(str.charCodeAt(i) - 48);
                }
            }
        } else {
            symbol_stack.push(str[i]);
        }
    }
    return number_stack[number_stack.length - 1];
}

function Q(a, b) {
    return a * b - (a + b);
}

function N(a, b) {
    return a * a + b;
}

console.log(compute('2Q(3N4)'));