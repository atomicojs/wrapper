const ID = Symbol.for("@atomico/wrapper/options");
globalThis[ID] = globalThis[ID] || {
    deduple: false,
};
export default globalThis[ID];
