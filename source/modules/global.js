export const errors = {
    0: "Test ID",
    1: "Setup Not Initialized, complete setup before starting the main loop.",
    2: "Loading Image failed, check URL",
    3: "Loading Sound failed, check URL",
    4: "Loading Font failed, check URL",
    5: "Value not provided or provided incorrectly",
    6: "Reserved for Function",
    7: "Reserved for Function",
    8: "Reserved for Function",
    9: "Reserved for Function",
    10: "Reserved for Function",
    11: "Object provided does not meet the requirements, x y width height",
    12: "Multiplier must be a number from 0 to 1",
    13: "Width or Height cannot be 0 or less",
}
export const image = {}
export let global = {
    version: "v1.0",
    build: "Beta",
    debug: false,
    actors: [],
    buttons: [],
    hasLoaded: false,
    toLoad: 0,
    Loaded: 0,
    loadingTime: 10,
    hasSetup: false,
    setupWidth: -1,
    setupHeight: -1,
    lastTimestamp: 0,
    deltaTime: 0,
    _ImagesLoadedURL_: {},
    _SoundsLoadedURL_: {},
    errors: new Set(),
    error(id) {
        if (typeof id === "number") {
            if (global.errors.size < 50 && !global.errors.has(id)) {
                if (typeof errors[id] === "string") {
                    console.error("PizzaJS: " + errors[id]);
                } else {
                    console.error("PizzaJS: undefined error, check id list");
                }
            } else if (!global.errors.has(id)) {
                console.error("PizzaJS: Current error size has exceeded its limit");
            }
            global.errors.add(id);
        } else if (!pjs.errors.has(id)) {
            console.error("PizzaJS: id must be only numbers");
            global.errors.add(id);
        }
    },
};