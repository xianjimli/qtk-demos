import { ICommand } from "qtk";
export declare class CommandShowMsgBox implements ICommand {
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(): ICommand;
}
