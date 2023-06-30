import {
  options_default
} from "./chunk-2GMH33RV.js";

// src/proxy.ts
var ID = Symbol.for("@atomico/wrapper");
globalThis[ID] = globalThis[ID] || {
  registered: /* @__PURE__ */ new Map(),
  count: 0
};
var createId = () => `c-${Date.now()}-${globalThis[ID].count++}`;
var { define } = customElements;
customElements.define = function(tagName, Element, opts) {
  try {
    define.call(this, tagName, Element, opts);
  } catch (e) {
    if (options_default.deduple && !globalThis[ID].registered.has(Element)) {
      tagName = tagName + "-" + createId();
      define.call(this, tagName, Element, opts);
    } else {
      throw e;
    }
  }
  globalThis[ID].registered.set(Element, [tagName, opts]);
};
var getDefinition = (base, alwaysDefine = false) => {
  if (alwaysDefine && !globalThis[ID].registered.has(base))
    customElements.define(createId(), base);
  return globalThis[ID].registered.get(base);
};

export {
  getDefinition
};
