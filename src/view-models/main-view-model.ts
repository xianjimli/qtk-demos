import {DelegateValueConverter, DelegateFilter, DelegateComparator, ValidationResult} from "qtk";
import {KeyEvent, Events, CollectionViewModel, ViewModel, DelegateCommand} from "qtk";
import {CommandShowDialg} from "./cmd-show-dialog"

export class MainViewModel extends CollectionViewModel {
	protected _newContent : string;

	constructor(data:any) {
		super(data);
		this.initFilters();
		this.initCommands();
		this.initConverters();
	}

	protected initFilters() {
	}

	protected initCommands() {
		this.registerCommand("showDialog", CommandShowDialg.create());
	}

	protected initConverters() {
	}

	public static create(data:any): MainViewModel {
		return new MainViewModel(data);
	}
}
