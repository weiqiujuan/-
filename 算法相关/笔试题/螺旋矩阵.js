function snake(n) {
    let m = Math.floor(n / 2);
    let start = 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[j] = [];
        }
    }
    arr[start][start] = 1;
    while (n >= start * 2) {
        arr = circleArr(arr, n, start);
        start++;
    }
    console.log(JSON.stringify(arr));
    console.log(arr[3][3]);
}

function circleArr(arr, n, start) {
    let endX = n - 1 - start;
    let endY = n - 1 - start;

    //            从左到右
    var leftTop = arr[start][start];
    if (start >= 1) {
        var leftTop = arr[start][start - 1] + 1;
    }
    for (let i = start, num = leftTop; i <= endX; i++) {
        arr[start][i] = num;
        num++;
    }

    //        从上到下
    let rightTop = arr[start][endY] + 1;
    if (start < endY) {
        for (let i = start + 1, num = rightTop; i <= endY; ++i, num++) {
            arr[i][endY] = num;
        }
    }
    //        从右到左
    let rightBottom = arr[endX][endY] + 1;
    if (start < endX && start < endY) {
        for (let i = endX - 1, num = rightBottom; i >= start; --i, num++) {
            arr[endX][i] = num;
        }
    }

    //        从下到上
    let leftBottom = arr[endX][start] + 1;
    if (start < endX && start < endY - 1) {
        for (let i = endY - 1, num = leftBottom; i >= start + 1; --i, num++) {
            arr[i][start] = num;
        }
    }
    return arr;
}
//函数调用，此时传入n=5，其它类似
snake(6);
