a = [11, 10, 12, 3, 2, 4]

search_value = 2
mid = 0 //initializing 
low_index = 0
up_index = a.length - 1 
// console.log(up_index);
isPresent = false 
// algorithm
// step 1:start
// step 2:the given array should be sorted in ascending order
ascending_value = a.sort((i, j) => i - j)
// step 5: repeat step 3 until low and up(equal) concides .Math
while (low_index <= up_index) { //why while because we dont know how many time it iterates so giving while


    // step 3:to find the mid value first calculte the up and low /2 
    // formula mid=Mathifloor(low+up/2)
    mid = Math.floor(low_index + up_index / 2)


    // step 4: compare the value stored in mid width the search item
    //a) mid val == search item
    if (a[mid] == search_value) { 
        // print search item present

        isPresent = true
        break
    }

    // b)mid value <search_item
    else if (a[mid] < search_value) { // search right side
        // low =mid+1
        low_index = mid + 1
    }
    else { //search left side
        // c)mid_value >search_item
        //up=mid-1
        up_index = mid - 1
    }
}
console.log(isPresent ? 'present' : 'not present');

// step 5: repeat step 3 until low and up(equal) concides .Math
//step 6:end


//Let x = 4 be the element to be searched
//Find the middle position mid of the array ie. mid = (low + high)/2 and arr[mid] = 6.
// If x == arr[mid], then return mid. Else, compare the element to be searched with arr[mid].
//If x > arr[mid], compare x with the middle element of the elements on the right side of arr[mid]. This is done by setting low to low = mid + 1.
// Else, compare x with the middle element of the elements on the left side of arr[mid]. This is done by setting high to high = mid - 1
// repeat he same steps until low meets high

//iteration method
//  do until the pointers low and high meet each other.
//     mid = (low + high)/2
//     if (x == arr[mid])
//         return mid
//     else if (x > arr[mid]) // x is on the right side
//         low = mid + 1
//     else                       // x is on the left side
//         high = mid - 1

//Recursive Method

// binarySearch(arr, x, low, high)
// if low > high
//     return False
// else
//     mid = (low + high) / 2
//     if x == arr[mid]
//         return mid
//     else if x > arr[mid]        // x is on the right side
//         return binarySearch(arr, x, mid + 1, high)
//     else                               // x is on the left side
//         return binarySearch(arr, x, low, mid - 1)

// hw
// flow chart and manual iteration for 3