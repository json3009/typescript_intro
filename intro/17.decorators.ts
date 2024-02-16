/**
 * Decorators
 *
 * Decorators are a special kind of declaration that can be attached to a class declaration
 * method, accessor, property, or parameter. Decorators use the form `@expression`, where
 * `expression` must evaluate to a function that will be called at runtime with information
 * about the decorated declaration.
 *
 * Decorators are a proposed feature for JavaScript and are available as an experimental
 * feature of TypeScript.
 *
 * @url https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators
 */

// --------------------------------------------------

// Example: Decorators for a class
function loggedMethod(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
      console.log(`LOG: Entering method '${methodName}'.`)
      const result = originalMethod.call(this, ...args);
      console.log(`LOG: Exiting method '${methodName}'.`)
      return result;
  }

  return replacementMethod;
}


class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const p = new Person1("Ron");
p.greet();
