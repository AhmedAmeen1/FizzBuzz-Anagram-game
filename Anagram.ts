let isAnagram = function (str1 , str2) {
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');
    return (sorted1 == sorted2);
}

console.log(isAnagram ('hello , jallo'));
console.log(isAnagram ('hello' , 'olleh'));