var nums = [2, 3, 6, 5, 0];
var x = 7;
for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === x) {
            console.log("índice " + i + " e índice " + j);
        }
    }
}
