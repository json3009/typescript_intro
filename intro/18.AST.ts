/**
 * AST (Abstract Syntax Tree)
 *
 * - AST is a tree representation of the abstract syntactic structure of source code written in a programming language.
 * - AST is a way of representing the source code in a structured way.
 * - AST is used in compilers, interpreters, and other tools that work with source code.
 *
 * Contrary to JavaScript, TypeScript is a statically typed language. This means that TypeScript code is analyzed and
 * type-checked before it is executed. The TypeScript compiler uses an abstract syntax tree (AST) to represent the
 * structure of the source code.
 *
 * Of course, as a result, this allows us, as developers, to work with the AST programmatically. We can use the AST to
 * create new code, modify existing code, or analyze the structure of the code. Which is not possible with JavaScript.
 *
 * TypeScript provides a factory API to create AST nodes.
 *
 * @url https://ts-ast-viewer.com/
 */

import { factory, SyntaxKind } from "typescript";

// --------------------------------------------------

// Example: AST for the expression `x + y`
[
  factory.createExpressionStatement(factory.createBinaryExpression(
    factory.createIdentifier("x"),
    factory.createToken(SyntaxKind.PlusToken),
    factory.createIdentifier("y")
  ))
];

// The AST for the expression `x + y` is represented as a tree of nodes.
// The root node is an ExpressionStatement, which contains a BinaryExpression node.
// The BinaryExpression node contains two Identifier nodes and a PlusToken node.

// The BinaryExpression node represents the binary expression `x + y`. And the json representation of the AST is:
//    {
//      "pos": 0,
//      "end": 5,
//      "flags": 0,
//      "kind": 226,
//      "left": {
//        "pos": 0,
//        "end": 1,
//        "flags": 0,
//        "kind": 80,
//        "escapedText": "x"
//      },
//      "operatorToken": {
//        "pos": 1,
//        "end": 3,
//        "flags": 0,
//        "kind": 40,
//        "modifierFlagsCache": 0
//      },
//      "right": {
//        "pos": 3,
//        "end": 5,
//        "flags": 0,
//        "kind": 80,
//        "escapedText": "y"
//      }
//    }

// --------------------------------------------------

// This is very useful when working with TypeScript code programmatically. For example, you can use the AST to create new code,
//  modify existing code, or analyze the structure of the code.
