import {WindowNormal, SimpleLayouter, SimpleLayouterParam} from "qtk"
import {IViewModel, ViewModel, ListView, ListItem} from "qtk";

export class MainWindow extends WindowNormal {
	protected viewModel : IViewModel;

	protected createTemplateItem() {
		var dataBindingRule = {
			text: {path:"text"}, 
			click:{command: {path:"cmd"}, commandArgs:{path:"cmdArgs"}}
		};

		return ListItem.create({dataBindingRule:dataBindingRule});
	}

	protected onInit() {
		super.onInit();

		this.childrenLayouter = SimpleLayouter.create();

		var listView = ListView.create({
			itemH : 36,
			templateItem : this.createTemplateItem(),
			layoutParam  : SimpleLayouterParam.create({x:"c", y:"m", w:"50%", h:"90%"})
		});

		this.addChild(listView);
		this.bindData(this.viewModel);
	}

	public static create(options:any) : MainWindow {
		var win = new MainWindow();
		win.reset("main-window", options);
		win.open();

		return win;
	}
};


