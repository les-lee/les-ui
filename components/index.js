import vList from "./vList/index";
import vListItem from "./vListItem/index";


let components = [vList,vListItem]

function install(Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    vList,
    vListItem
}