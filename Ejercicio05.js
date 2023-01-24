var nums = [3, 5, 6, 7, 3, 5, 6, 7];
var count = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        count++;
    }
}
console.log(count);
