// map 

function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i],  i, arr))
    }
    return newArr;
}


// filter

function filter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var result = callback(arr[i],  i, arr);
        if (result) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//  массив объектов 

var notification = [
    {
    date: '31/07/2019',
    msg: 'Some message here1'
    },
    {
    date: '21/07/2019',
    msg: 'Some message here2'
    },
    {
    date: '31/07/2019',
    msg: 'Some message here3'
    },
    {
    date: '22/07/2019',
    msg: 'Some message here4'
    },
    {
    date: '23/07/2019',
    msg: 'Some message here5'
    },

];

var groupDate = notification.reduce(function(object, currentValue) {
    if (!object[currentValue.date]) {
        object[currentValue.date] = [];
    }
    object[currentValue.date].push(currentValue);
    return object;
},{});

console.log(groupDate);