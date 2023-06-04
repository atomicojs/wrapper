const ID = Symbol.for("@atomico/wrapper");

globalThis[ID] = globalThis[ID] || {
    registered: new Map<
        CustomElementConstructor,
        [string, ElementDefinitionOptions | undefined]
    >(),
    count: 0,
};

const { define } = customElements;

customElements.define = function (tagName, Element, options) {
    define.call(this, tagName, Element, options);
    globalThis[ID].registered.set(Element, [tagName, options]);
};

export const getDefinition = (
    base: CustomElementConstructor,
    alwaysDefine = false
) => {
    if (alwaysDefine && !globalThis[ID].registered.has(base))
        customElements.define(
            `c-${Date.now()}-${globalThis[ID].count++}`,
            base
        );

    return globalThis[ID].registered.get(base);
};
