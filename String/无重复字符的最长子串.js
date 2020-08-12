const lengthOfLongestSubstring = (s) => {
    if(s.length == 0) return 0;
    const hashSet = new Set();
    let left = -1,ans = 0;
    for(let i=0;i<s.length;i++){
        if(i != 0){
            hashSet.delete(s.charAt(i - 1));
        }
        while(left + 1< s.length && !hashSet.has(s.charAt(left + 1))){
            hashSet.add(s.charAt(left+1));
            ++left;
        }
        ans = Math.max(ans,left - i + 1);
    }
    return ans;
}
