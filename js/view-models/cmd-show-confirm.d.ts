import { ICommand } from "qtk";
export declare class CommandShowConfirm implements ICommand {
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(): ICommand;
}
