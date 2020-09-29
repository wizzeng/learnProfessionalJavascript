const User = (function () {
    const wm = new WeakMap();

    class User {
        constructor(id) {
            this.idProperty = Symbol('id');
            this.setId(id);
        }

        setPrivate(property, value) {
            const privateMem = wm.get(this) || {};
            privateMem[property] = value;
            wm.set(this, privateMem);
        }

        getPrivate(property) {
            return wm.get(this)[property];
        }

        setId(id) {
            this.setPrivate(this.idProperty, id);
        }

        getId() {
            return this.getPrivate(this.idProperty);
        }
    }
    return User;
})();

const user = new User(123);
user.setId('User1');
console.log(user);
console.log(user.idProperty);
console.log(user.getId());
