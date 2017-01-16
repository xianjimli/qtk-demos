import { ICommand } from "qtk";
export declare class CommandShowToast implements ICommand {
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(): ICommand;
}
