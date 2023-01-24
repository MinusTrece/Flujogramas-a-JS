let name = ['a', 'o', 'l', 'h'];
let temp = name[0];
name[0] = name[name.length - 1];
name[name.length - 1] = temp;
console.log(name);

