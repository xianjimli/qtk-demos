import { ICommand } from "qtk";
export declare class CommandShowDialg implements ICommand {
    canExecute(): boolean;
    protected showProperty(): void;
    protected showProgress(): void;
    protected showChoice(multiple: boolean): void;
    execute(args: any): boolean;
    static create(): ICommand;
}
