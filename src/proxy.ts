import options from "./options";

const ID = Symbol.for("@atomico/wrapper");

globalThis[ID] = globalThis[ID] || {
    registered: new Map<
        CustomElementConstructor,
        [string, ElementDefinitionOptions | undefined]
    >(),
    count: 0,
};

const createId = () => `c-${Date.now()}-${globalThis[ID].count++}`;

const { define } = customElements;

customElements.define = function (tagName, Element, opts) {
    try {
        define.call(this, tagName, Element, opts);
    } catch (e) {
        if (options.deduple && customElements.get(tagName)) {
            tagName = tagName + "-" + createId();
            define.call(this, tagName, Element, opts);
        } else {
            throw e;
        }
    }
    globalThis[ID].registered.set(Element, [tagName, opts]);
};

export const getDefinition = (
    base: CustomElementConstructor,
    alwaysDefine = false
) => {
    if (alwaysDefine && !globalThis[ID].registered.has(base))
        customElements.define(createId(), base);

    return globalThis[ID].registered.get(base);
};
