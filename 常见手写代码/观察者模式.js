class EventEmitter {
    constructor(max_event) {
        this.listeners = new Map();
        // 设置一个最大监听数
        this.max_event = max_event || 10;
    }
    // 添加一个监听器
    addListener(label, callback) {
        this.listeners.has(label) || this.listeners.set(label, []);
        // 这里的意思其实是，如果有这个label，那么将传入的cb函数再传给label下的函数，再放到队尾；如果没有label，直接push
        this.listeners.get(label).push(callback);
    }
    // 移除一个监听器
    removeListener(label, callback) {
        let listeners = this.listeners.get(label);
        let index;
        if (listeners && listeners.length) {
            // MDN：reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。
            // 注意到addListener方法中，一个label是对应了一个数组的，也就是说label下可以监听多个函数，那么remove和emit都要找到这个用户指定的函数。找不到就是-1；但是这里有个问题就是用户如果重复监听怎么办
            // 也就是两次addListener同一个label同一个callback
            index = listeners.reduce((i, listener, index) => {
                return (isFunction(listener) && listener === callback) ? i = index : i;
            }, -1);
        }
        // 如果有这个函数，删掉
        if (index > -1) {

            listeners.splice(index, 1);
            this.listeners.set(label, listeners);
            return true;
        }

        return false;
    }
    // 监听，调用，注意这里是把这个label下的所有方法全都调用一次
    emit(label, ...args) {
        let listeners = this.listeners.get(label);
        if (listeners && listeners.length) {
            listeners.forEach((listener) => {
                listener(...args);
            })
            return true;
        }

        return false;
    }
}

// 实现观察者
class Observer {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
    }
    on(label, callback) {
        this.subject.addListener(label, callback);
    }
}
