# fastcursor README v0.0.1

This extension helps you move cursor quickly.

The original idea is from VIM's move cursor way.
But I prefer to use it in edit mode.
So I [made it for Sublime](https://github.com/zhaiduo/myConfig/tree/master/sublime).
And now I want to copy all the functions to VSCode.

Wish you enjoy it.


## Features

Up Move: ctrl+cmd+k
Down Move: ctrl+cmd+j
Left Move: ctrl+cmd+h
Right Move: ctrl+cmd+l

Up Selection: ctrl+shift+k
Down Selection: ctrl+shift+j
Left Selection: ctrl+shift+h
Right Selection: ctrl+shift+l

Please checkout [example.keybindings.json](example.keybindings.json) for detail settings.

## Requirements

Just install fastcursor in VSCode, and config your keybindings.json.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

Please checkout [example.keybindings.json](example.keybindings.json) for detail settings.

## Known Issues

None till now.

## Release Notes

### 0.0.1

Initial release of basic jkhl function.

-----------------------------------------------------------------------------------------------------------

## For contribution
Welcome to develop this extension with me.

### Install locally
So far, the extension you have written only runs in a special instance of VS Code, the Extension Development Host instance. To make your extension available to all VS Code instances, copy the extension folder contents to a new folder under your .vscode/extensions folder.

* Windows %USERPROFILE%\.vscode\extensions
* macOS ~/.vscode/extensions
* Linux ~/.vscode/extensions

### Sample Extension
https://code.visualstudio.com/docs/extensions/yocode

### Publish
https://code.visualstudio.com/docs/extensions/publish-extension