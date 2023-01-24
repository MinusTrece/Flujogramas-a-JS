let world = ['s','o','n','a','c','n','e','u','c'];

for (let i = 0; i < Math.floor(world.length / 2); i++) {
    let temp = world[i];
    world[i] = world[world.length - 1 - i];
    world[world.length - 1 - i] = temp;
}
console.log(world);
