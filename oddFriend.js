


myFriend = ['rahima', 'mim', 'rupa', 'mimm', 'mamun']



function oddFriend(myFriend) {
    if (typeof (myFriend) == 'object') {
        for (const item of myFriend) {
            if (item.length % 2 !== 0) {
                return item;
            }
        }
    }
    else{
        console.log(' Please enter your Friend list!!!');
    }
}


let getFriend = oddFriend(myFriend);
console.log(getFriend);

