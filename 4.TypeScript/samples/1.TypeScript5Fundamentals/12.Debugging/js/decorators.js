"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = void 0;
function logMethodInfo(origMethod, _context) {
    function replacementMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Decorated construct: " + _context.kind);
        console.log("Decorated construct name: " + _context.name);
        var result = origMethod.call.apply(origMethod, __spreadArrays([this], args));
        return result;
    }
    return replacementMethod;
}
exports.logMethodInfo = logMethodInfo;
