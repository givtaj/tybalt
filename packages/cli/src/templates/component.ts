import type { ScaffoldContext } from '../types.js';

export default ({ kebabCaseName }: ScaffoldContext) => {
    return `import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

export default defineComponent({
    name: '${kebabCaseName}',
    shadowMode: 'open',
    props: { name: { validator: compose(string(), required) } },
    render({ name }, ctx) {
        return html\`<div class="${kebabCaseName}">Hello $\{name\}</div>\`;
    }
});`;
};
