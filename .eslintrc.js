module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@babel/eslint-parser",
    "plugins": [
      "flowtype"
    ],
    "extends":[ "eslint:recommended","plugin:flowtype/recommended"],
    // "globals": {
    //     "Atomics": "readonly",
    //     "SharedArrayBuffer": "readonly",
    //     "ENV": true
    // },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "flowtype/no-types-missing-file-annotation": 2
        // "linebreak-style": [
        //   "error",
        //   "unix"
        // ],
        // "quotes": [
        //   "error",
        //   "single"
        // ]
    }
};
