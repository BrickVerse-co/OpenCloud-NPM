"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrLevel = void 0;
var ErrLevel;
(function (ErrLevel) {
    ErrLevel[ErrLevel["None"] = 0] = "None";
    ErrLevel[ErrLevel["Info"] = 1] = "Info";
    ErrLevel[ErrLevel["Warning"] = 2] = "Warning";
    ErrLevel[ErrLevel["Error"] = 3] = "Error";
    ErrLevel[ErrLevel["Critical"] = 4] = "Critical";
})(ErrLevel || (exports.ErrLevel = ErrLevel = {}));
