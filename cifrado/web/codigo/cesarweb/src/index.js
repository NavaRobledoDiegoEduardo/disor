import m from "mithril";
var root = document.body

 var cesar= {
    view: function() {
        return m("main", [
            m("p","Cifrado Cesar"),
            m('hr'),
            m("textarea",{id:"texto",placeholder:"ingrese mensaje"}),
             m("textarea", {id:"desplazamiento",placeholder:"ingrese dezplazamiento"}),
            m("textarea", {name:"cifrado",id:"cifrado"}),
           m('hr'),
            m("p","Inversion"),
            m("textarea",{id:"invertido"}),
            m('hr'),
            m("p","Grupos"),
            m("textarea",{id:"grupos"}),
        ])
    }
}

m.mount(root, cesar)
