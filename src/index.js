var m = require("mithril")
var root = document.body

var Index = {
    view: function(vnode) {
        return m('div', [
            m('h1', 'This is cool.'),
            m("a", {
                href: "#!/hello"
            }, "->")
        ])
    }
}

var Hello = {
    view: function(vnode) {
        return m('div', [
            m('h1', 'This is banana'),
            m("a", {
                href: "#!/author"
            }, "->")
        ])
    }
}

class Simple {
    constructor(vnode) {
        this.author = "Banana!"
    }
    view() {
        return m('div', [
            m('h1', 'hello from banana'),
            m("a", {
                href: "#!/"
            }, "<-")
        ])
    }
}

m.route(root, "/", {
    "/": Index,
    "/hello": Hello,
    "/author": Simple
})