// Enums
// Enums allow us to define a set of named constants.

// Example:
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// The enum Role is a set of named constants that can be accessed as properties of the enum type.
// The values of the enum are auto-incremented from 0, but we can also set the values manually.

// Be careful when setting the values manually, as it can lead to unexpected behavior.

// Example:

enum Role2 {
  ADMIN = 5,
  READ_ONLY, // 6
  AUTHOR, // 7
}

// --------------------------------------------------
// Enums can also be used as bit wise flags.

// BE CAREFUL: JavaScript uses 32 bit integers to store numbers. This means that we can only use 32 bits to store
//  information. This means that we can only have 32 flags.
//  A workaround is to use `bigInt` to store larger numbers.

// Example:

enum Permission {
  NONE = 0, // 000
  READ = 1 << 0, // 001; Unessecary, but makes it clear that we are using bitwise operators
  WRITE = 1 << 1, // 010
  EXECUTE = 1 << 2, // 100
  ALL = ~(~0 << 3), // 111; ALL = READ | WRITE | EXECUTE
}

function canAccess(permission: Permission, resource: any) {
  const bitWiseAndRead = permission & Permission.READ;
  const bitWiseAndWrite = permission & Permission.WRITE;
  const bitWiseAndExecute = permission & Permission.EXECUTE;

  if (bitWiseAndRead === Permission.READ) {
    console.log('User can read');
  }

  // ...
}

canAccess(Permission.READ, 'some resource'); // permission = 001

canAccess(Permission.READ | Permission.WRITE, 'some resource'); // permission = 011

// --------------------------------------------------

// Be aware that enums are compiled to JavaScript, so they are not a true data type.
// Compiled to JS
var CompiledRole;
(function (CompiledRole) {
  CompiledRole[(CompiledRole['ADMIN'] = 0)] = 'ADMIN';
  CompiledRole[(CompiledRole['READ_ONLY'] = 1)] = 'READ_ONLY';
  CompiledRole[(CompiledRole['AUTHOR'] = 2)] = 'AUTHOR';
})(CompiledRole || (CompiledRole = {}));
