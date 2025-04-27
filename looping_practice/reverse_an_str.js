str = "malya"

function reverser(str) {
    ne = ""
    for (i = str.length - 1; i >= 0; i--) {
        ne += str[i]

    }
    return ne
    // console.log(ne);
}

console.log(reverser(str));

