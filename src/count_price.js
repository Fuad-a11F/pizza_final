export function countPay(bucket) {
    let pay = 0;
    for (let i = 0; i < bucket.length; i++){
        pay +=  parseInt(bucket[i].price) * parseInt(bucket[i].buy)
    }
    return pay;
}

export function countLength(bucket) {
    let length_1 = 0;
    for (let i = 0; i < bucket.length; i++){
        length_1 +=  parseInt(bucket[i].buy)
    }

    return length_1
}