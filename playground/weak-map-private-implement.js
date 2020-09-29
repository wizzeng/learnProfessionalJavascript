const User = (() => {

    const privateMemMap = new WeakMap();

    class User {
        /**
         * Set private property
         * @param { string } property 
         * @param { any } value 
         */
        setPrivate(property, value) {
            const privateObj = privateMemMap.get(this) || {};
            privateObj[property] = value;
            privateMemMap.set(privateObj);
        }

        getPrivate(property) {
            return (privateMemMap.get(this) || {})[property];
        }
    }

    return User;
})();



const user = new User();
user.setPrivate('id', 'a');
console.log(user.id);
console.log(user.getPrivate('id'));
