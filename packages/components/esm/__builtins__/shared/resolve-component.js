import { h, toRaw } from 'vue-demi';
import { isVnode } from './utils';
export var resolveComponent = function (child, props) {
    if (child) {
        if (typeof child === 'string' || typeof child === 'number') {
            return child;
        }
        else if (typeof child === 'function') {
            // eslint-disable-next-line @typescript-eslint/ban-types
            return child(props);
        }
        else if (isVnode(child)) {
            return child;
        }
        else {
            return h(toRaw(child), { props: props });
        }
    }
    return null;
};
//# sourceMappingURL=resolve-component.js.map