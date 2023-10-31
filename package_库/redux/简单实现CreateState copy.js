
const createStore = (reducer) => {
    //
    let store = {};
    const actions = [];


    const getStore = () => store;

    const subscribe = (action) => {
        actions.push(action);
        return () => {
            actions = actions.filter(item => item !== action);
        }
    }

    const dispatch = (action) => {
        store = reducer(store, action);
        actions.forEach(item => item(store));
    }

    return {
        getStore,
        dispatch,
        subscribe
    }
}