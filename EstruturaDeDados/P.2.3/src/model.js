"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatorial = void 0;
var Fatorial = /** @class */ (function () {
    function Fatorial() {
        this.cache = {};
    }
    Fatorial.prototype.factorial = function (n) {
        if (n in this.cache) {
            return this.cache[n];
        }
        if (n === 0) {
            return 1;
        }
        else {
            var result = n * this.factorial(n - 1);
            this.cache[n] = result;
            return result;
        }
    };
    return Fatorial;
}());
exports.Fatorial = Fatorial;
