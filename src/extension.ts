"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  //console.log('Congratulations, your extension "fastcursor" is now active!');

  let isSelected = true;
  let disposable = vscode.commands.registerCommand(
    "extension.fastcursor.up.select",
    () => {
      moveByCursor("up", "wrappedLine", isSelected, 1);
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "extension.fastcursor.down.select",
    () => {
      moveByCursor("down", "wrappedLine", isSelected, 1);
    }
  );

  let disposable3 = vscode.commands.registerCommand(
    "extension.fastcursor.left.select",
    () => {
      moveByCursor("left", "wrappedLine", isSelected, 1);
    }
  );

  let disposable4 = vscode.commands.registerCommand(
    "extension.fastcursor.right.select",
    () => {
      moveByCursor("right", "wrappedLine", isSelected, 1);
    }
  );

  //wrappedLineFirstNonWhitespaceCharacter
  let disposable99 = vscode.commands.registerCommand(
    "extension.fastcursor.first.select",
    () => {
      moveByCursor(
        "wrappedLineFirstNonWhitespaceCharacter",
        "wrappedLine",
        isSelected,
        1
      );
    }
  );

  //wrappedLineLastNonWhitespaceCharacter
  let disposable98 = vscode.commands.registerCommand(
    "extension.fastcursor.last.select",
    () => {
      moveByCursor(
        "wrappedLineLastNonWhitespaceCharacter",
        "wrappedLine",
        isSelected,
        1
      );
    }
  );

  //wrappedLineStart
  let disposable97 = vscode.commands.registerCommand(
    "extension.fastcursor.start.select",
    () => {
      moveByCursor("wrappedLineStart", "wrappedLine", isSelected, 1);
    }
  );

  //wrappedLineEnd
  let disposable96 = vscode.commands.registerCommand(
    "extension.fastcursor.end.select",
    () => {
      moveByCursor("wrappedLineEnd", "wrappedLine", isSelected, 1);
    }
  );

  let isSelect = false;

  let disposable5 = vscode.commands.registerCommand(
    "extension.fastcursor.up",
    () => {
      moveByCursor("up", "line", isSelect, 1);
    }
  );

  let disposable6 = vscode.commands.registerCommand(
    "extension.fastcursor.down",
    () => {
      moveByCursor("down", "line", isSelect, 1);
    }
  );

  let disposable7 = vscode.commands.registerCommand(
    "extension.fastcursor.left",
    () => {
      moveByCursor("left", "line", isSelect, 1);
    }
  );

  let disposable8 = vscode.commands.registerCommand(
    "extension.fastcursor.right",
    () => {
      moveByCursor("right", "line", isSelect, 1);
    }
  );

  //wrappedLineFirstNonWhitespaceCharacter
  let disposable9 = vscode.commands.registerCommand(
    "extension.fastcursor.first",
    () => {
      moveByCursor(
        "wrappedLineFirstNonWhitespaceCharacter",
        "line",
        isSelect,
        1
      );
    }
  );

  //wrappedLineLastNonWhitespaceCharacter
  let disposable10 = vscode.commands.registerCommand(
    "extension.fastcursor.last",
    () => {
      moveByCursor(
        "wrappedLineLastNonWhitespaceCharacter",
        "line",
        isSelect,
        1
      );
    }
  );

  //wrappedLineStart
  let disposable11 = vscode.commands.registerCommand(
    "extension.fastcursor.start",
    () => {
      moveByCursor("wrappedLineStart", "line", isSelect, 1);
    }
  );

  //wrappedLineEnd
  let disposable12 = vscode.commands.registerCommand(
    "extension.fastcursor.end",
    () => {
      moveByCursor("wrappedLineEnd", "line", isSelect, 1);
    }
  );

  //wrappedLineColumnCenter
  let disposable13 = vscode.commands.registerCommand(
    "extension.fastcursor.center",
    () => {
      moveByCursor("wrappedLineColumnCenter", "line", isSelect, 1);
    }
  );

  //viewPortTop
  let disposable14 = vscode.commands.registerCommand(
    "extension.fastcursor.top",
    () => {
      moveByCursor("viewPortTop", "line", isSelect, 1);
    }
  );

  //viewPortCenter
  let disposable15 = vscode.commands.registerCommand(
    "extension.fastcursor.vcenter",
    () => {
      moveByCursor("viewPortCenter", "line", isSelect, 1);
    }
  );

  //viewPortBottom
  let disposable16 = vscode.commands.registerCommand(
    "extension.fastcursor.bottom",
    () => {
      moveByCursor("viewPortBottom", "line", isSelect, 1);
    }
  );

  let disposable17 = vscode.commands.registerCommand(
    "extension.fastcursor.up10",
    () => {
      moveByCursor("up", "line", isSelect, 10, false);
    }
  );

  let disposable18 = vscode.commands.registerCommand(
    "extension.fastcursor.down10",
    () => {
      moveByCursor("down", "line", isSelect, 10, false);
    }
  );

  //search next word
  let disposable100 = vscode.commands.registerCommand(
    "extension.fastcursor.next",
    () => {
      search("after");
    }
  );

  //search next word
  let disposable101 = vscode.commands.registerCommand(
    "extension.fastcursor.before",
    () => {
      search("before");
    }
  );

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
  context.subscriptions.push(disposable17);
  context.subscriptions.push(disposable18);
  context.subscriptions.push(disposable99);
  context.subscriptions.push(disposable98);
  context.subscriptions.push(disposable97);
  context.subscriptions.push(disposable96);
  context.subscriptions.push(disposable100);
  context.subscriptions.push(disposable101);
}

const getNewPosition = (
  position: vscode.Position,
  direction: String = "left"
): vscode.Position => {
  let newPosition = position.with(position.line, position.character + 1);
  if (position.character - 1 < 0) {
    newPosition = position.with(position.line, 0);
  }
  if (direction === "left") {
    newPosition = position.with(
      position.line,
      position.character - 1 < 0 ? 0 : position.character - 1
    );
  }
  return newPosition;
};

const editor = vscode.window.activeTextEditor;
const moveByCursor = (
  direction: string = "up",
  by: string = "wrappedLine",
  isSelect: boolean = false,
  count: number = 1,
  isByWord: boolean = true
): void => {
  if (!editor) {
    console.log("no editor");
    return; // No open text editor
  }
  const doc = editor.document;
  let d = "";
  let c = 1;
  let skip = 0;
  let position = null;
  let newPosition = null;
  let newPosition2 = null;
  let firstPosition = null;
  let firstPositionReal = null;
  let rg = null;
  let startChar = "";
  let lastSecondChar = "";
  let lastChar = "";
  let tempChars = "";
  let isFoundWhiteSpace = false;
  let isFoundLeftAutoSkip = false;

  const selectionContainChars: any = ["'", '"', "[", "]", "(", ")", "{", "}"];
  const selectionStopChars: any = [".", ",", ":", "&", "+", "-", "<", ">"];

  if (isByWord && direction.match(/^(left|right)$/i)) {
    d = RegExp.$1;
    position = editor.selection.active;
    newPosition = getNewPosition(position, d);
    firstPosition = position.with(position.line, 0);
    firstPositionReal = position.with(position.line, 0);
    rg = new vscode.Range(position, newPosition);
    startChar = doc.getText(rg);
    lastChar = startChar;
    while (!lastChar.match(/[\n\r]/i)) {
      c++;
      if (
        c > 80 ||
        lastChar.match(
          /(\"|\'|\[|\]|\(|\)|\{|\}|,|\t|:|;|=| |&|\?|>|<|\+|\.|\/|!|\-)/i
        )
      ) {
        break;
      }
      position = newPosition;
      newPosition = getNewPosition(position, d);
      console.log(
        "firstPosition",
        `[${lastChar}]`,
        `[${startChar}]`,
        newPosition === firstPosition
      );
      lastSecondChar = lastChar;
      if (newPosition === firstPosition) {
        //console.log("line head", c, `[${lastChar}]`);
        break;
      }
      rg = new vscode.Range(position, newPosition);
      lastChar = doc.getText(rg);
      console.log("lastChar", c, `[${lastChar}]`);
    }

    //auto skip space
    while (lastChar.match(/[\n\r]/i)) {
      skip++;
      c++;
      position = newPosition;
      newPosition = getNewPosition(position, d);
      rg = new vscode.Range(position, newPosition);
      lastChar = doc.getText(rg);
    }

    //fix multiple space move bug

    //console.log('skip space', skip)
    console.log("lastChar-======", c, `[${lastChar}]`, `[${lastSecondChar}]`);
    if (c > 1) {
      c--;
      if (isSelect && c > 1) {
        if (
          selectionContainChars.includes(lastChar) &&
          startChar !== lastChar
        ) {
          c--;
        } else if (selectionStopChars.includes(lastChar)) {
          c--;
        }
      } else if (!isSelect && c > 1) {
        if (
          selectionContainChars.includes(lastChar) ||
          selectionStopChars.includes(lastChar)
        ) {
          c--;
        }
      }
    }

    // keep cusor after space
    if (lastChar === " ") {
      c--;
    }
    console.log("_count", c, newPosition.character, `[${lastChar}]`);

    //fix left move bug: when line start with a word, failed to left move
    if (direction.match(/^left$/i)) {
      rg = new vscode.Range(firstPositionReal, newPosition);
      tempChars = doc.getText(rg);
      if (tempChars.match(/^[0-9a-z_]+$/i)) {
        c = c + tempChars.length + 1;
      }

      //try to skip multiple space
      newPosition2 = getNewPosition(position, d);
      while (
        newPosition2.character &&
        lastChar.match(/^( )$/i) &&
        lastSecondChar === ""
      ) {
        position = newPosition2;
        newPosition2 = getNewPosition(position, d);
        rg = new vscode.Range(position, newPosition2);
        lastChar = doc.getText(rg);
        c++;
        isFoundLeftAutoSkip = true;
        //console.log("skip space", c, `[${lastChar}]`, `[${lastSecondChar}]`);
        if (newPosition2.character === firstPosition.character) {
          break;
        }
      }

      if (isFoundLeftAutoSkip) {
        c++;
        isFoundLeftAutoSkip = false;
      }
    } else if (direction.match(/^right$/i)) {
      //try to skip multiple space
      newPosition2 = getNewPosition(position, d);
      while (
        newPosition2.character &&
        lastChar.match(/^( )$/i) &&
        lastSecondChar === ""
      ) {
        position = newPosition2;
        newPosition2 = getNewPosition(position, d);
        rg = new vscode.Range(position, newPosition2);
        lastChar = doc.getText(rg);
        c++;
        console.log("skip space", c, `[${lastChar}]`, `[${lastSecondChar}]`);
        // if (newPosition2.character === firstPosition.character) {
        //   break;
        // }
      }
    }
  }
  const _count = isByWord ? c : count;
  //https://github.com/Microsoft/vscode/issues/9143
  console.log("cursorMove", isSelect, _count);
  vscode.commands.executeCommand("cursorMove", {
    to: direction,
    by: by,
    select: isSelect,
    value: _count
  });
};

type TMoveByKeyword = "before" | "after";
type TMoveByDirection = "right" | "left";

interface IGetNoneEmpty {
  str: string;
  offset: number;
}
interface ICurrentPosition {
  str: string;
  word: string;
  left: number;
  right: number;
}

const getNoneEmpty = (d: TMoveByDirection): IGetNoneEmpty => {
  if (!editor) {
    console.log("no editor");
    return {
      str: "",
      offset: 0
    }; // No open text editor
  }
  const doc = editor.document;
  let str = "";
  let position = editor.selection.active;
  let newPosition = null;
  let rg = null;
  let offset = 0;
  while (!str.match(/[ #=<>@%!~\\\\'"\?\/\|\^\*\+\n\r\(\)\[\]\$\.\-]/i)) {
    if (d === "left" && position.character - offset < 0) {
      break;
    }
    newPosition =
      d === "left"
        ? position.with(position.line, position.character - offset)
        : position.with(position.line, position.character + offset);
    rg = new vscode.Range(position, newPosition);
    str = doc.getText(rg);
    offset++;
    if (offset > 80) {
      break;
    }
  }
  console.log("noneempty str", `[${str}]`);
  return { str, offset };
};

//deprecated
const getCurrentWord = (
  direction: TMoveByKeyword = "before"
): ICurrentPosition => {
  let before = getNoneEmpty("left");
  let after = getNoneEmpty("right");
  const w = `${before.str}${after.str}`;
  return {
    str: w,
    word: w.replace(/[^0-9a-z_]/gi, ""),
    left: before.offset,
    right: after.offset
  };
};

const findNextWordInLine = (
  doc: vscode.TextDocument,
  position: vscode.Position,
  offset: number = 1
): ICurrentPosition | null => {
  const lineLength = doc.lineAt(position.line).range.end.character;
  if (offset >= lineLength || offset + 1 >= lineLength) {
    return null;
  }
  const posStart = position.with(position.line, offset);
  const posEnd = position.with(position.line, offset + 1);
  const rg = new vscode.Range(posStart, posEnd);
  const char = doc.getText(rg);
  console.log("char", `[${char}]`);
  let tempPos: ICurrentPosition | null = null;
  if (char) {
    tempPos = getCurrentWord2(posEnd);
    console.log(
      "tempPos",
      `[${tempPos.word}]`,
      `[${tempPos.str}]`,
      tempPos.word === "" ? offset : tempPos.left,
      tempPos.word === "" ? offset + 1 : tempPos.right,
      position.line,
      doc.lineCount,
      lineLength
    );
  }
  if (tempPos && tempPos.word === "") {
    tempPos.left = offset;
    tempPos.right = offset + 1;
  }
  return tempPos;
};

const findNextWordInLineLeft = (
  doc: vscode.TextDocument,
  position: vscode.Position,
  offset: number = 1
): ICurrentPosition | null => {
  const lineLength = doc.lineAt(position.line).range.end.character;
  if (offset < 0 || offset - 1 < 0) {
    return null;
  }
  const posStart = position.with(position.line, offset);
  const posEnd = position.with(position.line, offset - 1);
  const rg = new vscode.Range(posStart, posEnd);
  const char = doc.getText(rg);
  console.log("char", `[${char}]`);
  let tempPos: ICurrentPosition | null = null;
  if (char) {
    tempPos = getCurrentWord2(posEnd);
    console.log(
      "tempPos",
      `[${tempPos.word}]`,
      `[${tempPos.str}]`,
      tempPos.word === "" ? offset : tempPos.left,
      tempPos.word === "" ? offset + 1 : tempPos.right,
      position.line,
      doc.lineCount,
      lineLength
    );
  }
  if (tempPos && tempPos.word === "") {
    tempPos.left = offset;
    tempPos.right = offset - 1;
  }
  return tempPos;
};

const search = (direction: TMoveByKeyword = "before"): void => {
  if (!editor) {
    console.log("no editor");
    return; // No open text editor
  }
  const doc = editor.document;

  let position = editor.selection.active;

  const lineLength = doc.lineAt(position.line).range.end.character;

  const pos = getCurrentWord2(position);
  const currentWordPos = pos;
  console.log(
    "pos",
    `[${pos.word}]`,
    `[${pos.str}]`,
    pos.left,
    pos.right,
    lineLength
  );
  let tempPos = null;
  let lineOffset = 0;

  if (direction === "before") {
    tempPos = searchLine(
      position.with(position.line, pos.left - 1),
      direction,
      currentWordPos,
      true
    );
    while (
      position.line - lineOffset >= 0 &&
      (tempPos === null || (tempPos && tempPos.word !== currentWordPos.word))
    ) {
      lineOffset++;
      tempPos = searchLine(
        position.with(position.line - lineOffset, 0),
        direction,
        currentWordPos
      );
    }
  } else {
    tempPos = searchLine(
      position.with(position.line, pos.right + 1),
      direction,
      currentWordPos
    );
    while (
      position.line + lineOffset <= doc.lineCount &&
      (tempPos === null || (tempPos && tempPos.word !== currentWordPos.word))
    ) {
      lineOffset++;
      tempPos = searchLine(
        position.with(position.line + lineOffset, 0),
        direction,
        currentWordPos
      );
    }
  }

  if (tempPos) {
    console.log(
      "tempPos",
      `[${tempPos.word}]`,
      `[${tempPos.str}]`,
      tempPos.left,
      tempPos.right,
      position.line,
      lineOffset,
      lineLength
    );

    if (direction === "before") {
      jumpToWord(lineOffset, tempPos, position.line - lineOffset, direction);
    } else {
      jumpToWord(lineOffset, tempPos, position.line + lineOffset);
    }
  } else {
    console.log("nothing found");
  }
};

const jumpToWord = async (
  lineOffset: number,
  tempPos: ICurrentPosition,
  linenumber: number,
  direction: TMoveByKeyword = "after"
) => {
  //jump to line
  await vscode.commands.executeCommand("cursorMove", {
    to: direction === "before" ? "up" : "down",
    by: "line",
    select: false,
    value: lineOffset
  });
  await vscode.commands.executeCommand("cursorMove", {
    to: "wrappedLineStart",
    by: "line",
    select: false,
    value: 1
  });

  setTimeout(async () => {
    //jump to word
    await vscode.commands.executeCommand("cursorMove", {
      to: "right",
      by: "line", //"line", //"wrappedLine"
      select: false,
      value: tempPos.left
    });
    await vscode.commands.executeCommand("cursorMove", {
      to: "right",
      by: "line", //"line", //"wrappedLine"
      select: true,
      value: tempPos.right - tempPos.left
    });
    await vscode.commands.executeCommand("revealLine", {
      lineNumber: linenumber,
      at: "center"
    });
  }, 10);
};

const searchLine = (
  position: vscode.Position,
  direction: TMoveByKeyword = "before",
  currentWordPos: ICurrentPosition,
  isMoveLeft: boolean = false
): ICurrentPosition | null => {
  if (!editor) {
    console.log("no editor");
    return null; // No open text editor
  }
  const doc = editor.document;

  const lineLength = doc.lineAt(position.line).range.end.character;

  const pos = getCurrentWord2(position);
  console.log(
    "pos",
    `[${pos.word}]`,
    `[${pos.str}]`,
    pos.left,
    pos.right,
    lineLength
  );

  if (pos.word === currentWordPos.word) {
    return pos;
  }

  let tempPos = null;
  let isEol = false;
  let findOffset = 1;
  if (direction === "before" && isMoveLeft) {
    if (pos.left - 2 < 0) {
      isEol = true;
    }

    if (!isEol) {
      tempPos = findNextWordInLineLeft(doc, position, pos.left - 1);

      //searchInLine
      while (
        tempPos &&
        tempPos.left - 2 >= 0 &&
        tempPos.word !== currentWordPos.word
      ) {
        findOffset = tempPos.left - 2;
        console.log("findOffset", findOffset);
        tempPos = findNextWordInLineLeft(doc, position, findOffset);
      }
      // console.log("search stop in line");
    }
  } else {
    if (pos.right + 2 >= lineLength) {
      isEol = true;
    }

    if (!isEol) {
      tempPos = findNextWordInLine(doc, position, pos.right + 1);

      //searchInLine
      while (
        tempPos &&
        tempPos.right + 2 < lineLength &&
        tempPos.word !== currentWordPos.word
      ) {
        findOffset = tempPos.right + 2;
        console.log("findOffset", findOffset);
        tempPos = findNextWordInLine(doc, position, findOffset);
      }
      // console.log("search stop in line");
    }
  }
  return tempPos;
};

// interface IGetWordRangeAtPosition {
//   line: number;
//   character: number;
// }
const getCurrentWord2 = (pos: any = null): ICurrentPosition => {
  let noneData = {
    str: "",
    word: "",
    left: 0,
    right: 0
  };
  if (!editor) {
    console.log("no editor");
    return noneData; // No open text editor
  }
  const doc = editor.document;
  let position = pos ? pos : editor.selection.active;
  noneData = {
    str: "",
    word: "",
    left: position.character,
    right: position.character + 1
  };
  const arr: any = doc.getWordRangeAtPosition(position);
  if (arr) {
    const w = doc.getText(arr);
    return {
      str: w,
      word: w.replace(/[^0-9a-z_]/gi, ""),
      left: arr.start.character,
      right: arr.end.character
    };
  } else {
    return noneData;
  }
};

// this method is called when your extension is deactivated
export function deactivate() {}
