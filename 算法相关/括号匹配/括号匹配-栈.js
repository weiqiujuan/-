function validBrances(braces) {
    let leftBraReg = /[(\(\{\[)]/;
    let stack = [], rightBracket;
    braces = braces.split('')
    //压入栈中
    for (let bracket of braces) {
        if (leftBraReg.test(bracket)) {
            stack.push(bracket)
        }
        else {
            switch (bracket) {
                case ")":
                    rightBracket = stack.pop()
                    if (rightBracket !== '(') {
                        return false
                    }
                    break
                case "]":
                    rightBracket = stack.pop()
                    if (rightBracket !== '[') {
                        return false
                    }
                    break
                case "}":
                    rightBracket = stack.pop()
                    if (rightBracket !== '{') {
                        return false
                    }
                    break
            }
        }
    }
    return stack.length === 0 ? true : false
}