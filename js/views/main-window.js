"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var MainWindow = (function (_super) {
    __extends(MainWindow, _super);
    function MainWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainWindow.prototype.createTemplateItem = function () {
        var dataBindingRule = {
            text: { path: "text" },
            click: { command: { path: "cmd" }, commandArgs: { path: "cmdArgs" } }
        };
        return qtk_2.ListItem.create({ dataBindingRule: dataBindingRule });
    };
    MainWindow.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.childrenLayouter = qtk_1.SimpleLayouter.create();
        var listView = qtk_2.ListView.create({
            itemH: 36,
            templateItem: this.createTemplateItem(),
            layoutParam: qtk_1.SimpleLayouterParam.create({ x: "c", y: "m", w: "50%", h: "90%" })
        });
        this.addChild(listView);
        this.bindData(this.viewModel);
    };
    MainWindow.create = function (options) {
        var win = new MainWindow();
        win.reset("main-window", options);
        win.open();
        return win;
    };
    return MainWindow;
}(qtk_1.WindowNormal));
exports.MainWindow = MainWindow;
;
//# sourceMappingURL=main-window.js.map