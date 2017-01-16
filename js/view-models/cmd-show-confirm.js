"use strict";
var qtk_1 = require("qtk");
var CommandShowConfirm = (function () {
    function CommandShowConfirm() {
    }
    CommandShowConfirm.prototype.canExecute = function () {
        return true;
    };
    CommandShowConfirm.prototype.execute = function (args) {
        qtk_1.InteractionRequest.confirm(qtk_1.ConfirmationInfo.create("Are you sure to quit?", 200), function (info) {
            console.dir(info);
        });
        return true;
    };
    CommandShowConfirm.create = function () {
        return new CommandShowConfirm();
    };
    return CommandShowConfirm;
}());
exports.CommandShowConfirm = CommandShowConfirm;
;
//# sourceMappingURL=cmd-show-confirm.js.map