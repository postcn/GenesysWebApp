export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        //Ignore write errors for now.
        console.error(err);
    }
}

export const mergeState = (state) => {
    return new Promise((resolve, reject) => {
        try {
            let saved = JSON.parse(localStorage.getItem('state'));
            saved = {...saved, ...state};
            localStorage.setItem('state', JSON.stringify(saved));
            console.log(localStorage.getItem('state'));
            resolve();
        }
        catch (err) {
            reject(err);
        }
    });
}