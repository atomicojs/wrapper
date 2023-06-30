// src/proxy.ts
var ID = Symbol.for("@atomico/wrapper");
globalThis[ID] = globalThis[ID] || {
  registered: /* @__PURE__ */ new Map(),
  count: 0
};
var { define } = customElements;
customElements.define = function(tagName, Element, options) {
  define.call(this, tagName, Element, options);
  globalThis[ID].registered.set(Element, [tagName, options]);
};
var getDefinition = (base, alwaysDefine = false) => {
  if (alwaysDefine && !globalThis[ID].registered.has(base))
    customElements.define(
      `c-${Date.now()}-${globalThis[ID].count++}`,
      base
    );
  return globalThis[ID].registered.get(base);
};
export {
  getDefinition
};
