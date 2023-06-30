// src/options.ts
var ID = Symbol.for("@atomico/wrapper/options");
globalThis[ID] = globalThis[ID] || {
  deduple: false
};
var options_default = globalThis[ID];

export {
  options_default
};
