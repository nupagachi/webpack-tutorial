import getClasses from "./getClasses";
console.log("Webpack");

getClasses();

const object = { test: "aaaaa", b: "bbbb" };
const newObject = { ...object, c: "cccc" };
console.log(newObject);
