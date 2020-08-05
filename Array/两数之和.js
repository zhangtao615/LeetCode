const twoSum = (nums,target) => {
    let left = 0;
    while(left<nums.length-1){
        let right = left + 1;
        while(right < nums.length){
            if(nums[left] + nums[right] == target) {
                console.log([left,right]);
                return ;
            }else{
                right++;
            }
        }
        left++;
    }
}
twoSum([0,4,3,0],0)