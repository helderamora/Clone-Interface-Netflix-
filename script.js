nums = [3,7,9,23,5];
target = 30;
result = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            result.push(nums[i]);
            result.push(nums[j]);
            console.log(result);
        }
    }
}