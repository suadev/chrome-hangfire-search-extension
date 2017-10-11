function Storage() {
    var getStorage = function () {
        if (window.localStorage) {
            return window.localStorage;
        }
        return {
            setItem: function () {},
            getItem: function () {}
        }
    };
    return {
        getStorage: function () {
            return getStorage();
        }
    };
}