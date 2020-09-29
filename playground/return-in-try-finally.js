function returnInTry() {
    try {
        return;
    } finally {
        console.log('call me');
    }
}

returnInTry();