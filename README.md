# @atomico/wrapper

This package provides the basic functionalities to create wrappers for Atomico with SSR support.

```js
import { createAuto } from "@atomico/wrapper";

function myWrapper(tagName: string, base: CustomElementConstructor) {
    return document.createElement(tagName);
}

const auto = createAuto(myWrapper);

class MyElement extends HTMLElement {}

customElements.define("my-element", MyElement);

auto(MyElement);
```
