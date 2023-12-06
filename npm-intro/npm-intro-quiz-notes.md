# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

- What is a package?
  Reusable code

- What are some other popular package managers?
  Yarn, PNPM

- How can you create a `package.json` with `npm`?
  npm init --yes

- What is a dependency and how do you add one to a package?
  an external module or library that your project needs to function correctly.

- What happens when you add a dependency to a package with `npm`?
  The package is downloaded and stored in the node_modules directory in your project.
  The package name and version are added to the dependencies field in package.json.
  A package-lock.json file is created or updated. This file locks the versions of all installed packages and their dependencies, ensuring consistent installs across environments.

- What is a devDependency and how do you add one to a package?
  A devDependency is a package that is only needed during the development process and not in your production code. Examples include testing frameworks, code linters, and build tools.
  To add a devDependency, you use the command npm install <package-name> --save-dev. This is similar to adding a regular dependency, but it adds the package under the devDependencies section in your package.json.

- How do you define and run `npm` scripts? Why are these useful?
  npm scripts are essentially shortcuts that you can define to execute common tasks, such as running tests, starting a server, or compiling code. They are defined in the scripts section of package.json.
  To run these scripts, you use npm run <script-name>

They are useful because they simplify complex commands into short, memorable scripts. They ensure consistency in the way these commands are run. They make your project more accessible to other developers, as they can quickly see and run the key tasks for your project.

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
