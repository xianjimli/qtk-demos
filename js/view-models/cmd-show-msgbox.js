"use strict";
var qtk_1 = require("qtk");
var CommandShowMsgBox = (function () {
    function CommandShowMsgBox() {
    }
    CommandShowMsgBox.prototype.canExecute = function () {
        return true;
    };
    CommandShowMsgBox.prototype.execute = function (args) {
        qtk_1.InteractionRequest.notify(qtk_1.NotificationInfo.create("Hello QToolKit", 200));
        return true;
    };
    CommandShowMsgBox.create = function () {
        return new CommandShowMsgBox();
    };
    return CommandShowMsgBox;
}());
exports.CommandShowMsgBox = CommandShowMsgBox;
;
//# sourceMappingURL=cmd-show-msgbox.js.map