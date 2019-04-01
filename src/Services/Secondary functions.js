export const findIndex = (array, currentId) => {
    let i;
    for (i = 0; i < array.length; i++) {
        for (let key in array[i]) {
            if (array[i][key] === currentId) {
                return i
            }
        }
    }
};

export const guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};