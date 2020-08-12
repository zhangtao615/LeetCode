const reverseKGroup = (head,k) => {
    let pre = null,cur = head;
    let p = head;
    for(let i=0;i<k;i++){
        if(p==null) return head;
        p = p.next;
    }
    for(let j=0;j<k;j++){
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    head.next = reverseKGroup(cur,k);
    return pre;
}