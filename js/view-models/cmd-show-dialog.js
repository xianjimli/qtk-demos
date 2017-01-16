"use strict";
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var CommandShowDialg = (function () {
    function CommandShowDialg() {
    }
    CommandShowDialg.prototype.canExecute = function () {
        return true;
    };
    CommandShowDialg.prototype.showProperty = function () {
        var data = {
            name: "QTK",
            age: 100,
            desc: "QToolKit",
            point: { x: 100, y: 200 },
            point3d: { x: 1, y: 2, z: 3 },
            range: { first: 100, second: 200 },
            color: "Red",
            opacity: 0.5
        };
        var json = [
            { type: "number", name: "Age", desc: "age", path: "age" },
            { type: "text", name: "Name", desc: "name", path: "name" },
            { type: "text-readonly", name: "Desc", path: "desc" },
            { type: "line", name: "Point" },
            { type: "vector2", name: "Point", path: "point" },
            { type: "vector3", name: "Point3D", path: "point3d" },
            { type: "line", name: "" },
            { type: "range", name: "Range", path: "range" },
            { type: "options", name: "Color", path: "color", options: ["Green", "Red", "Blue"] },
            { type: "slider", name: "Opacity", path: "opacity" },
        ];
        var propsDesc = qtk_2.PagePropsDesc.create("Property", json);
        qtk_1.InteractionRequest.props(qtk_2.PropsInfo.create(propsDesc, data, true, 300), function (ret) {
            console.dir(ret);
        });
    };
    CommandShowDialg.prototype.showProgress = function () {
        function download(onProgress) {
            var progress = 0;
            function updateProgress() {
                progress += 0.1;
                onProgress(progress);
                if (progress < 1) {
                    setTimeout(updateProgress, 200);
                }
            }
            updateProgress();
        }
        var info = qtk_2.ProgressInfo.create("Downloading...", download, 300);
        qtk_1.InteractionRequest.progress(info, function (ret) {
            console.dir(ret);
        });
    };
    CommandShowDialg.prototype.showChoice = function (multiple) {
        var iconURL = multiple ? null : '/demos/assets/icons/@density/favor.normal.png';
        var data = [
            { text: "Red", iconURL: iconURL },
            { text: "Green", iconURL: iconURL },
            { text: "Blue", iconURL: iconURL },
            { text: "Yellow", iconURL: iconURL },
            { text: "Gold", iconURL: iconURL },
            { text: "Orange", iconURL: iconURL },
        ];
        var choiceInfo = qtk_2.ChoiceInfo.create("Please Choose", multiple, 300, 240);
        data.forEach(function (item) {
            choiceInfo.addOption(item.text, item.iconURL);
        });
        qtk_1.InteractionRequest.choice(choiceInfo, function (ret) {
            console.dir(ret);
        });
    };
    CommandShowDialg.prototype.execute = function (args) {
        var type = args;
        switch (type) {
            case 'toast': {
                qtk_1.InteractionRequest.toast(qtk_1.ToastInfo.create("hello qtk", 500, 128));
                break;
            }
            case 'confirm': {
                qtk_1.InteractionRequest.confirm(qtk_1.ConfirmationInfo.create("Are you sure to quit?", 200), function (info) {
                    console.dir(info);
                });
                break;
            }
            case 'message': {
                qtk_1.InteractionRequest.notify(qtk_1.NotificationInfo.create("Hello QToolKit", 200));
                break;
            }
            case 'progress': {
                this.showProgress();
                break;
            }
            case 'property': {
                this.showProperty();
                break;
            }
            case 'single-choice': {
                this.showChoice(false);
                break;
            }
            case 'multi-choice': {
                this.showChoice(true);
                break;
            }
            case 'input': {
                var title = "Please input your name:";
                var inputTips = "Name";
                var value = "Jim";
                var inputType = "text";
                qtk_1.InteractionRequest.input(qtk_2.InputInfo.create(title, value, inputTips, inputType, 300), function (info) {
                    console.dir(info);
                });
                break;
            }
        }
        return true;
    };
    CommandShowDialg.create = function () {
        return new CommandShowDialg();
    };
    return CommandShowDialg;
}());
exports.CommandShowDialg = CommandShowDialg;
;
//# sourceMappingURL=cmd-show-dialog.js.map