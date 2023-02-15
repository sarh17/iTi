let target = {
    name: "Omar",
    address: "Port Said",
    age: 24,
};

let vakidate = {
    get(target, prop, proxy) {
        console.log(proxy);
        if (prop in target) {
            return target[prop];
        } else {
            throw ` The ${prop} property doesn't exist`;
        }
    },

    set(target, prop, value, proxy) {
        if (prop === "name") {
            if (value.length > 7) {
                throw `Please enter a name that's less than 7 characters long`;
            }
        }
        if (prop === "address") {
            if (typeof value != "string") {
                throw new TypeError(`The address only takes string values`);
            }
        }
        if (prop === "age") {
            if (value < 25 || value > 60) {
                throw new RangeError("Age has to be between 25 and 60");
            }
        }
        target[prop] = value;
        return true;
    },
};

const isAlpha = (str) => /^[a-zA-Z]*$/.test(str);
let proxy = new Proxy(target, vakidate);
