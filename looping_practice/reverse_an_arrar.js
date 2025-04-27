// Reverse an array
const arr = [1, 2, 3, 4, 5, 6, 7];
len = arr.length - 1
a = []

for (let i = len; i >= 0; i--) {
    console.log(arr[i]);
    a.push(arr[i])




}
// why len/2:You're swapping from both ends
// When reversing an array, you're swapping:

// The first element with the last

// The second with the second-to-last

// And so on...

// So you only need to go halfway through the array — after that, you'd just start undoing your swaps.
// You’d do these swaps:

// i = 0 → swap arr[0] with arr[5]

// i = 1 → swap arr[1] with arr[4]

// i = 2 → swap arr[2] with arr[3]

//Stop here (you’ve done 3 swaps, which is 6 / 2)

for (let i = 0; i <= len / 2; i++) {
    temp = arr[i] //1
    arr[i] = arr[len - i] //7
    arr[len - i] = temp



}

console.log(arr);