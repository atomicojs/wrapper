# @atomico/wrapper

Captura el registro de los customElements para asi lograr optener su tagName

```js
import { getDefinition } from "@atomico/wrapper";

class MyElement extends HTMLElement {}

customElements.define("my-element", MyElement);

console.log(getDefinition(MyElement)); // ["my-element", undefined];
```
