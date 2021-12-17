# @sumitkumar01/rename-file

## A tiny package that can help you save a lot of precious time.

Have you ever encountered any situation when you are stuck with hundreds of files having names like FILE1, FILE2, FILE3 and so on. And the story doesn't end here. Now you have to arrange those files into different folders too. Sounds like an interesting task. Right 😁.

Well, if doing that task manually sounds like an awesome job. Then, I am sorry to say this tool is not for you 😔.

This tool will help you complete the task of hours or even days within seconds. Well, it's not a ninja technique. It's the power of code.

Enough with the introduction. Let's see how this tool works....

## Prerequisite

Let's do the preparation before seeing the actual magic

- First thing first and **very important**- Take **backup** of your files
- Make sure that the parent folder only contains two types of files - A **titles.txt** (pay attention to the naming convention) and files that needs to be modified
- Make sure that the titles.txt file contains the filea and directories name in the order that you want to arrange them
- Make sure that the files are as per the sequence in titles files
- Make sure _node.js_ is installed in your system

When all these arrangements are done you are ready to proceed further.

> **A gentle reminder please take backup of your code before running this tool**

## Installation

This tool requires [Node.js](https://nodejs.org/) to run.

Verify if node is installed on your system.

```sh
npm --version
```

Install the package using below command.

```sh
npm install @sumitkumar01/rename-file
```

## Parameters

This package requires two arguments:

- --path - The path of the parent folder
- --ext - The extension of the files

## Execution

To run this package follow the below steps:

```sh
npm run renameFile -- --path="<path of the parent folder>" --ext="<file extension>"
```

> **Note:** The path and extension arguments accepts string values.

## Development

Want to contribute? Great!

Please fork this project on [Github](https://github.com/designer-stuff/Rename-File)

## License

MIT

**Free Software, Hell Yeah!**
