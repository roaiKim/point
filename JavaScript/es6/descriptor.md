export function autobind(target, name, descriptor){
    const originFunction = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get(){
            return originFunction.bind(this)
        },
        set(){
            // throw new Error("禁止重复bind")
        }
    }
}