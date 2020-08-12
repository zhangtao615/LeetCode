const reverseList = (head) => {
    let pre = null;
    let cur = head;
    while(cur){
        let cnext = cur.next;
        if(pre === null){
            cur.next = null;
        }else{
            cur.next = pre;
        }
        pre = cur;
        cur = cnext;
    }
    return pre;
}