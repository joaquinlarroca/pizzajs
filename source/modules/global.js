export const errors_functions = {
    0: "Test ID",
    1: "Setup Not Initialized. Complete setup before starting the main loop.",
    2: "Loading Image failed. Check URL.",
    3: "Loading Sound failed. Check URL.",
    4: "Loading Font failed. Check URL.",
    5: "URL must be a string.",
    6: "Intensity is invalid or less than 0.",
    7: "Duration is invalid or less than 0.",
    8: "Setup width or height must be a number or more than 0.",
    9: "The text is not a string, number, or boolean value.",
    10: "Invalid Font.",
    11: "Width or height must be a number greater than 0.",
    12: "Font size must be a number greater than 0."
};

export const errors_classes = {
    0: "Test ID",
    1: "Object provided does not meet the requirements: x, y, width, height.",
    2: "Multiplier must be a number from 0 to 1.",
    3: "Width or Height can only be a number greater than 0.",
    4: "X or Y must be a number.",
    5: "OffsetX or OffsetY must be a number.",
    6: "Text can only be a number or string.",
    7: "Text Margin must be a number.",
    8: "Timeout MS must be a number.",
    9: "Thumb Width can only be a number greater than 0.",
    10: "Percentages must be a number.",
    11: "Current percentage must be between minimum_percentage and maximum_percentage.",
    12: "Playback Rate must be a number.",
    13: "Volume must be a number between 0 and 1.",
    14: "Loop can only be a boolean.",
    15: "Seconds specified must be between 0 and the audio duration.",
    16: "Invalid axis. Valid axis: horizontal, h, x, vertical, v or y.",
    17: "Radius must be a number greater than 0."
};
export const errors_listeners = {
    0: "Test ID",
    1: "Key must be a string.",
    2: "Keyboard has already been set up.",
    3: "Mouse has already been set up.",
    4: "Resize has already been set up.",
    5: "All listeners had already been set up.",
};

export const image = {}
export let global = {
    version: "v1.6",
    build: "Beta",
    debug: false,
    all: [],
    actors: [],
    buttons: [],
    sliders: [],
    rects: [],
    sounds: [],
    hasLoaded: false,
    toLoad: 0,
    Loaded: 0,
    loadingTime: 10,
    hasSetup: false,
    setupWidth: -1,
    setupHeight: -1,
    shakingScreen: false,
    lastTimestamp: 0,
    deltaTime: 0,
    allListenersHadSetup: false,
    keyboardListenersHadSetup: false,
    mouseListenersHadSetup: false,
    resizeListenersHadSetup: false,
    _ImagesLoadedURL_: {},
    _SoundsLoadedURL_: {},
    errors: new Set(),
    error(type, id) {
        if (typeof type == "string" && (type == "l" || type == "c" || type == "f")) {
            if (typeof id == "number") {
                if (global.errors.size < 50 && !global.errors.has(type + id)) {
                    if (type == "f") {
                        if (typeof errors_functions[id] === "string") {
                            console.error("PizzaJS: " + errors_functions[id]);
                        } else {
                            console.error("PizzaJS: undefined error, check id list");
                        }
                    }
                    else if (type == "l") {
                        if (typeof errors_listeners[id] === "string") {
                            console.error("PizzaJS: " + errors_listeners[id]);
                        } else {
                            console.error("PizzaJS: undefined error, check id list");
                        }
                    }
                    else if (type == "c") {
                        if (typeof errors_classes[id] === "string") {
                            console.error("PizzaJS: " + errors_classes[id]);
                        } else {
                            console.error("PizzaJS: undefined error, check id list");
                        }
                    }
                } else if (!global.errors.has(type + id)) {
                    console.error("PizzaJS: Current error size has exceeded its limit");
                }
                global.errors.add(type + id);
            } else if (!global.errors.has(type + id)) {
                console.error("PizzaJS: id must be only numbers");
                global.errors.add(type + id);
            }
        }
        else if (!global.errors.has(type + id)) {
            console.error("PizzaJS: type must be f, c or l");
            global.errors.add(type + id);
        }
    },
};
