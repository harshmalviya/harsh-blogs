---
title: What is typescript
excerpt: A little introduction about Typescript, history and features of typescript.
image: what-is-typescript.jpeg
isFeatured: true
date: "2021-11-22"
---

# What is Typescript?

TypeScript is a superset of JavaScript, meaning that it contains all of the functionality of JavaScript and then some. Therefore, any program written in valid JavaScript will also run as expected in TypeScript. In fact, TypeScript compiles simply to plain JavaScript. So, what’s the difference? TypeScript offers us more control over our code via type annotations, interfaces, and classes. I’ll explain each of these later.

## Who created it and why?

TypeScript was created by Microsoft and was released in 2012 after two years of development. It was created to allow for optional static type checking, which would be particularly useful when developing large scale applications. Interestingly, one of the reasons Microsoft developed TypeScript was because their internal teams were having trouble making JavaScript scale for Microsoft’s own projects, notably the team working on Bing Maps.

### What is static type checking and how does TypeScript implement it?

JavaScript is dynamically typed. Therefore, programs written in JavaScript do not know the data type of a variable until that variable is assigned a value at runtime. The variable can be reassigned or coerced into a value of a different type with no issues or warning. This can result in bugs that are often overlooked, especially in large applications.
TypeScript, on the other hand, uses static typing. Variables can be given a type when they are declared. TypeScript will check types at compile time, and throw an error if the variable is ever given a value of a different type. However, the error does not prevent the code from executing. The code will still be compiled into plain JavaScript and run normally. In this way, TypeScript is kind of like a “spellcheck” for your code. It will let you know when something looks off, but it won’t change how your code runs.
Static typing is optional in TypeScript. Variables can be given the type any, which will allow its values to be any type. If no type is given, the type will be set to any by default.

### Conclusion

If you are a Javascript developer and want to write good and error free code, typescript is what you're code needs and start learning it now. Eventually it is the code that matters and if the code is not maintainable then no matter how good the features of the application is the developer will always face problems.

Learn typescript now, [go here](https://www.typescriptlang.org/ "go here").
