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

    let isSelect = true;
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

    isSelect = false;

    let disposable5 = vscode.commands.registerCommand('extension.fastcursor.up', () => {
        moveByCursor("up", "line", isSelect, 1);
    });

    let disposable6 = vscode.commands.registerCommand('extension.fastcursor.down', () => {
        moveByCursor("down", "line", isSelect, 1);
    });

    let disposable7 = vscode.commands.registerCommand('extension.fastcursor.left', () => {
        moveByCursor("left", "line", isSelect, 1);
    });

    let disposable8 = vscode.commands.registerCommand('extension.fastcursor.right', () => {
        moveByCursor("right", "line", isSelect, 1);
    });

    //wrappedLineFirstNonWhitespaceCharacter
    let disposable9 = vscode.commands.registerCommand('extension.fastcursor.first', () => {
        moveByCursor("wrappedLineFirstNonWhitespaceCharacter", "line", isSelect, 1);
    });

    //wrappedLineLastNonWhitespaceCharacter
    let disposable10 = vscode.commands.registerCommand('extension.fastcursor.last', () => {
        moveByCursor("wrappedLineLastNonWhitespaceCharacter", "line", isSelect, 1);
    });

    //wrappedLineStart
    let disposable11 = vscode.commands.registerCommand('extension.fastcursor.start', () => {
        moveByCursor("wrappedLineStart", "line", isSelect, 1);
    });

    //wrappedLineEnd
    let disposable12 = vscode.commands.registerCommand('extension.fastcursor.end', () => {
        moveByCursor("wrappedLineEnd", "line", isSelect, 1);
    });

    //wrappedLineColumnCenter
    let disposable13 = vscode.commands.registerCommand('extension.fastcursor.center', () => {
        moveByCursor("wrappedLineColumnCenter", "line", isSelect, 1);
    });

    //viewPortTop
    let disposable14 = vscode.commands.registerCommand('extension.fastcursor.top', () => {
        moveByCursor("viewPortTop", "line", isSelect, 1);
    });

    //viewPortCenter
    let disposable15 = vscode.commands.registerCommand('extension.fastcursor.vcenter', () => {
        moveByCursor("viewPortCenter", "line", isSelect, 1);
    });

    //viewPortBottom
    let disposable16 = vscode.commands.registerCommand('extension.fastcursor.bottom', () => {
        moveByCursor("viewPortBottom", "line", isSelect, 1);
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
    context.subscriptions.push(disposable4);
    context.subscriptions.push(disposable5);
    context.subscriptions.push(disposable6);
    context.subscriptions.push(disposable7);
    context.subscriptions.push(disposable8);
    context.subscriptions.push(disposable9);
    context.subscriptions.push(disposable10);
    context.subscriptions.push(disposable11);
    context.subscriptions.push(disposable12);
    context.subscriptions.push(disposable13);
    context.subscriptions.push(disposable14);
    context.subscriptions.push(disposable15);
    context.subscriptions.push(disposable16);
}

const getNewPosition = (position: vscode.Position, direction: String = "left"): vscode.Position => {
    let newPosition = position.with(position.line, position.character + 1);
    if (position.character - 1 < 0) {
        newPosition = position.with(position.line, 0);
    }
    if (direction === 'left') {
        newPosition = position.with(position.line, position.character - 1);
    }
    return newPosition;
};

const moveByCursor = (direction: string = "up", by: string = "wrappedLine", isSelect: boolean = false, count: number = 1, isByWord: boolean = true): void => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    const doc = editor.document;
    let d = '';
    let c = 1;
    let position = null;
    let newPosition = null;
    let rg = null;

    if (isByWord && direction.match(/^(left|right)$/i)) {
        d = RegExp.$1;
        position = editor.selection.active;
        newPosition = getNewPosition(position, d);
        rg = new vscode.Range(position, newPosition);

        while (doc.getText(rg) !== ' ') {
            c++;
            if (c > 80 || doc.getText(rg).match(/( |\"|\'|\[|\]|\(|\)|,|;|=|\?|>|<|\n|\t|\+|\.|\-)/i)) {
                break;
            }
            position = newPosition;
            newPosition = getNewPosition(position, d);
            rg = new vscode.Range(position, newPosition);
        }
        if (c > 1) {
            c--;
        }
        console.log("_count", c, newPosition);

    }
    const _count = isByWord ? c : count;
    //https://github.com/Microsoft/vscode/issues/9143
    vscode.commands.executeCommand("cursorMove", {
        to: direction,
        by: by,
        select: isSelect,
        value: _count
    });
};

// this method is called when your extension is deactivated
export function deactivate() {
}