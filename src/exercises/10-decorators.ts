
/*
    ===== TypeScript code =====

    execute: npm start
    https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content
    Decorators: helps to add additional features to classes and class memebers.
    //delete comment in tsconfig.json experimentalDecorators
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www.google.com";
    };
  }
   
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }
   
  const bug = new BugReport("Needs dark mode");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type); // Prints "report"
  console.log(bug.reportingURL); // Prints  "http://www.google.com"; even if show an error

   


