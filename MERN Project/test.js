function twoSum(){
    var nums = [2, 8, 7, 15], target = 9;
    var result = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
}

console.log(twoSum());