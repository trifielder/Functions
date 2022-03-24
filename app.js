function nam () {
    var n = prompt(`Hello what is your name?`)
    return n
}


function temp(n) {
    var t = prompt(`${n}, what is the tempature?`)
    return t
}

function math1(temp) {// c to f
    var m1 = (temp * 9) / 5 + 32
    return m1
}

function math2(temp) {// f to c
    var m2 = (temp - 32) * 5 / 9
    return m2
}

function question() {
    var q = prompt(`Do you want to convert from C to F (press 1) or F to C (press 2)?`)
    return q
}

function compare() {
    var g = nam()
    var w = question()
    var t = temp(g)
    
    if (w== "1") {
        
        alert(`${t}C is ${math1(t)}F`)

    }else if (w == "2") {

        alert(`${t}F is ${math2(t)}C`)

    }
}

compare()
