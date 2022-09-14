import { inject } from 'vue-demi';
import { hasSymbol } from '../__builtins__/shared';
import { PageConsumerProps } from './consumer-props';
export var PageInjectKey = hasSymbol ? Symbol() : '__PAGE_INJECT_KEY';
export function usePage(defaultValue) {
    if (defaultValue === void 0) { defaultValue = PageConsumerProps; }
    var page = inject(PageInjectKey, defaultValue);
    return page;
}
//# sourceMappingURL=useApi.js.map