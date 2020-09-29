try {
    throw 'newContext';
} catch (e) {
    // Context will be deleted automatically.
    console.log(e);
}

// Cannot access;
console.log(e);