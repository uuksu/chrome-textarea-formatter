# Chrome Textarea Formatter

If you ever tried editing formatted code snipped inside browser's textarea field you probably noticed how inconvenient it is because textareas don't support Tab key formatting. This extension is intended to help those who are missing basic code formatting features inside textareas that are present in most modern IDEs.

NOTE! This is fork of the [original software](https://code.google.com/archive/p/chrome-textarea-formatter/) that was automatically exported to GitHub from Google Code. Original extension is now removed from Chrome Web Store so I decided to update and re-release it.

License says this is my work as I could not find name of the original creator. All credit goes to him/her!

## Features:

* Gives all textareas on a page code formatting abilities, including textareas that are dynamically created after initial page load;
* Pressing Tab key inserts a tab into the text instead of switching focus;
* Adds ability to shift selected block of text right and left using Tab and Shift+Tab keys;
* Automatic cursor indentation when starting a new line;
* Automatic indentation increase when starting a new line after an open bracket (round bracket, square bracket, curly bracket);
* Smart backspace that deletes whole tab indentation instead of single character;
* Ability to set custom indentation (tab symbol or a set number of spaces)
* Extension could be activated/deactivated on demand through address bar icon

## Installation:

Please install the extension from [Official Chrome Extensions site](https://chrome.google.com/webstore/detail/chrome-textarea-formatter/oglpfnoajkapekjobldcbbjhgjndbfkf) by clicking "Add to Chrome" button.

## Changelog

* 0.4: Updated extension to use Manifest V2 and newer Chrome APIs.

* 0.3: Added ability to move selected lines up and down using Alt+Up/Down hotkey (alternate hotkey: Alt+Shift+Up/Down) * Added ability to copy selected lines up and down using Ctrl+Up/Down hotkey (alternate hotkeys: Ctr+Shift+Up/Down, Ctr+Alt+Up/Down, Ctr+Alt+Shift+Up/Down) * Added ability to delete selected lines using Ctrl+D hotkey (alternate hotkeys: Ctrl+Alt+D, Ctrl+Alt+Shift+D)

* 0.2: Added address bar icon that lets enable/disable extension * Added option to change default extension state (enabled or disabled)

* 0.1: Initial release
