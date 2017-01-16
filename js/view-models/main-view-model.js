"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var cmd_show_dialog_1 = require("./cmd-show-dialog");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel(data) {
        var _this = _super.call(this, data) || this;
        _this.initFilters();
        _this.initCommands();
        _this.initConverters();
        return _this;
    }
    MainViewModel.prototype.initFilters = function () {
    };
    MainViewModel.prototype.initCommands = function () {
        this.registerCommand("showDialog", cmd_show_dialog_1.CommandShowDialg.create());
    };
    MainViewModel.prototype.initConverters = function () {
    };
    MainViewModel.create = function (data) {
        return new MainViewModel(data);
    };
    return MainViewModel;
}(qtk_1.CollectionViewModel));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map