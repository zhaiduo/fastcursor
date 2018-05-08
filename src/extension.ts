'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "fastcursor" is now active!');

    let isSelect = true
    let disposable = vscode.commands.registerCommand('extension.fastcursor.up.select', () => {
        moveByCursor("up", "wrappedLine", isSelect, 1);
    });

    let disposable2 = vscode.commands.registerCommand('extension.fastcursor.down.select', () => {
        moveByCursor("down", "wrappedLine", isSelect, 1);
    });

    let disposable3 = vscode.commands.registerCommand('extension.fastcursor.left.select', () => {
        moveByCursor("left", "wrappedLine", isSelect, 1);
    });

    let disposable4 = vscode.commands.registerCommand('extension.fastcursor.right.select', () => {
        moveByCursor("right", "wrappedLine", isSelect, 1);
    });

    isSelect = false

    let disposable5 = vscode.commands.registerCommand('extension.fastcursor.up', () => {
        moveByCursor("up", "wrappedLine", isSelect, 1);
    });

    let disposable6 = vscode.commands.registerCommand('extension.fastcursor.down', () => {
        moveByCursor("down", "wrappedLine", isSelect, 1);
    });

    let disposable7 = vscode.commands.registerCommand('extension.fastcursor.left', () => {
        moveByCursor("left", "wrappedLine", isSelect, 1);
    });

    let disposable8 = vscode.commands.registerCommand('extension.fastcursor.right', () => {
        moveByCursor("right", "wrappedLine", isSelect, 1);
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
    context.subscriptions.push(disposable4);
    context.subscriptions.push(disposable5);
    context.subscriptions.push(disposable6);
    context.subscriptions.push(disposable7);
    context.subscriptions.push(disposable8);
}

const moveByCursor = (direction: string = "up", by: string = "wrappedLine", isSelect: boolean = false, count: number = 1): void => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    //https://github.com/Microsoft/vscode/issues/9143
    vscode.commands.executeCommand("cursorMove", {
        to: direction,
        by: by,
        select: isSelect,
        value: count
    });
};

// this method is called when your extension is deactivated
export function deactivate() {
}