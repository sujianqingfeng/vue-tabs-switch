import Tabs from "./Tabs";
import TabItem from "./TabItem";


const components = {
    Tabs,
    TabItem
}

const tabsSwitch = {
  install(Vue, options) {
    Object.keys(components).forEach(name => {
        Vue.component(name, components[name]);
    });
  }
};

export default tabsSwitch


