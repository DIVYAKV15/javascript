// w.a.p to print the common numbers from the two given array
p = [10, 11, 12, 20, 30]
q = [11, 20, 25, 30, 35]
output = []
for (i of p) {
    for (j of q) {
        if (i == j) {
            output.push(i)

        }
    }
}
console.log(output.length == 0 ? 'no duplicates items' : output);

//compare p[0] and q[0]
//if p[0] is less than add p index
//if its equal increment both the index
i = 0
j = 0
while (i < p.length && j < q.length) { // 0 <5 && 0<5 // 1<5 && 1 <5 // ... 5<5 && 5<5 
    if (p[i] < q[j]) { //if p[0] is less than q[0] add p index
        i++

    } else if (p[i] == q[j]) {//if its equal increment both the index
        console.log(p[i]);
        i++
        j++
    } else { 
        j++
    }
}




