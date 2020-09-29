function callStackTest(i = 0) {
    console.log('Call Num: ', i);
    callStackTest(++i);
}

callStackTest();