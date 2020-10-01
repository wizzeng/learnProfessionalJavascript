const { runTest } = require('../../../utils/run-test.js');

runTest(() => {

    // Print: Create a random name
    function createRandomName() {
        return (Math.random() * 100000).toFixed(0);
    }

    // Print: Object with random name
    const obj = {
        [createRandomName()]() {

        }
    }

    // Print: Property descriptor of this object
    console.log(Object.getOwnPropertyDescriptors(obj));

})