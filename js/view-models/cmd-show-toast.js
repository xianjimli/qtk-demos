"use strict";
var qtk_1 = require("qtk");
var CommandShowToast = (function () {
    function CommandShowToast() {
    }
    CommandShowToast.prototype.canExecute = function () {
        return true;
    };
    CommandShowToast.prototype.execute = function (args) {
        qtk_1.InteractionRequest.toast(qtk_1.ToastInfo.create("hello qtk", 500, 128));
        return true;
    };
    CommandShowToast.create = function () {
        return new CommandShowToast();
    };
    return CommandShowToast;
}());
exports.CommandShowToast = CommandShowToast;
;
//# sourceMappingURL=cmd-show-toast.js.map