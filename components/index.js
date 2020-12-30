import vList from "./vList/index";


let components = [vList]

function install(Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    vList,
}