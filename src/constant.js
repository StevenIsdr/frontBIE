export const get = name => {
    const value = localStorage.getItem(name);

    if (!value) return false;

    const parsing = JSON.parse(value);

    if (parsing) {
        return parsing;
    } else {
        return value;
    }
};

export const destroy = name => {
    localStorage.removeItem(name);
};
