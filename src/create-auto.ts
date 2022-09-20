import { registered } from "./proxy";

let idCounter = 0;

export const createRandomTag = () => `c-${Date.now()}-${idCounter++}`;

export const createAuto =
    <Wrapper extends (tagName: string, base: CustomElementConstructor) => any>(
        wrapper: Wrapper
    ) =>
    (base: CustomElementConstructor): ReturnType<Wrapper> => {
        if (!registered.has(base))
            customElements.define(createRandomTag(), base);

        const [tagName] = registered.get(base);

        return wrapper(tagName, base);
    };
