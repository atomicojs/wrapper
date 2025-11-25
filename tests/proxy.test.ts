import { describe, it, expect } from "vitest";
import { getDefinition } from "../src/index.mjs";

describe("proxy", () => {
    it("capture 1", () => {
        class MyElement extends HTMLElement {}

        customElements.define("my-element", MyElement);

        expect(getDefinition(MyElement)).toEqual(["my-element", undefined]);
    });
    it("capture 2", () => {
        class MyElement extends HTMLButtonElement {}

        customElements.define("my-button", MyElement, {
            extends: "button",
        });

        expect(getDefinition(MyElement)).toEqual([
            "my-button",
            {
                extends: "button",
            },
        ]);
    });
});
