a = [[1, 4], [3, 5], [7, 9]] //2dimension\
b=a.flat();// not specify any dimension
console.log(b); // op [ 1, 4, 3, 5, 7, 9 ]

var c=a = [[1, 4,[3,4]], [3, 5], [7, 9,[5,6]]] //3D
d=c.flat(Infinity);//directly change its dimentsion to 1D
console.log(d);

//depth - refers to how deep a nested arrray need to be flattened(reduced)

a = [[[[1, 4], [3, 5], [7, 9]]]] //4d
b=a.flat(2)//change the above into 2D
console.log(b);//op-[ [ 1, 4 ], [ 3, 5 ], [ 7, 9 ] ]