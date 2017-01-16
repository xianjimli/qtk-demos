import { WindowNormal } from "qtk";
import { IViewModel, ListItem } from "qtk";
export declare class MainWindow extends WindowNormal {
    protected viewModel: IViewModel;
    protected createTemplateItem(): ListItem;
    protected onInit(): void;
    static create(options: any): MainWindow;
}
