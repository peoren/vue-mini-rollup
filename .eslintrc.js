module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module'
      },
    plugins: [
      "flowtype"
    ],
    extends:[ "eslint:recommended","plugin:flowtype/recommended"],
    rules:[
      "no-console": "off",
    ]


};
