import "atomico/ssr/load";

const { define } = customElements;

let idCounter = 0;

customElements.define = function (tagName, Element, options) {
    define.call(this, tagName, Element, options);
    registered.set(Element, [tagName, options]);
};

const registered = new Map<
    CustomElementConstructor,
    [string, ElementDefinitionOptions | undefined]
>();

export const getDefinition = (
    base: CustomElementConstructor,
    selfDefine = false
) => {
    if (selfDefine && !registered.has(base))
        customElements.define(`c-${Date.now()}-${idCounter++}`, base);

    return registered.get(base);
};
