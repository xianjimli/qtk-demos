"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainModel = (function (_super) {
    __extends(MainModel, _super);
    function MainModel() {
        var _this = _super.call(this) || this;
        _this.push({ text: "Show Toast", cmd: "showDialog", cmdArgs: "toast" });
        _this.push({ text: "Show Message", cmd: "showDialog", cmdArgs: "message" });
        _this.push({ text: "Show Confirm", cmd: "showDialog", cmdArgs: "confirm" });
        _this.push({ text: "Show Progress", cmd: "showDialog", cmdArgs: "progress" });
        _this.push({ text: "Show Input", cmd: "showDialog", cmdArgs: "input" });
        _this.push({ text: "Show Property", cmd: "showDialog", cmdArgs: "property" });
        _this.push({ text: "Show Single Choice", cmd: "showDialog", cmdArgs: "single-choice" });
        _this.push({ text: "Show Multi Choice", cmd: "showDialog", cmdArgs: "multi-choice" });
        return _this;
    }
    MainModel.create = function () {
        return new MainModel();
    };
    return MainModel;
}(Array));
exports.MainModel = MainModel;
;
//# sourceMappingURL=main-model.js.map