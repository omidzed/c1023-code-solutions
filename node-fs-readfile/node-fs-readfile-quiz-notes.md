# node-fs-readfile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a directory?
  A directory, often referred to as a folder in some operating systems, is a file system structure used to store and organize files and other directories. It's like a container for files and subdirectories, helping to keep them organized in a hierarchical structure. For example, the folder where you keep your project files is a directory.

- What is a relative file path?
  A relative file path specifies the location of a file or directory in relation to the current working directory. It doesn't start with the root of the file system.

  - What is an absolute file path?
    An absolute file path is the complete path to a file or directory, starting from the root of the file system. It is independent of the current working directory. For example, /home/user/projects/docs/readme.txt is an absolute path. It specifies the exact location of the file in the file system.

- What module does Node.js include for manipulating the file system?
  Node.js includes the fs module for interacting with the file system. This module provides a wide array of functionalities to access, manipulate, and interact with the file system. It can be used to read and write files, create directories, read directory contents, stream data, watch for file changes, and much more.
- What method is available in the `node:fs` module for reading data from a
  file?

  There are several methods in the fs module for reading data from a file, but the most commonly used ones are fs.readFile() and fs.readFileSync().
  fs.readFile() is an asynchronous method that reads the entire content of a file into memory. Once the file is read, a callback function is called with the file data.
  fs.readFileSync() is the synchronous version of fs.readFile(). It blocks the Node.js event loop until the file has been read completely. This method is useful when you need the file reading operation to complete before proceeding with the next lines of code.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
