
## 代码
```js
function add(a, b) {
    return a + b
}

function add2(a, b) {
    return a + b
}
```

## 编译后的AST
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "add"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 37,
            "argument": {
              "type": "BinaryExpression",
              "start": 32,
              "end": 37,
              "left": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "name": "add2"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 81,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 67,
            "end": 79,
            "argument": {
              "type": "BinaryExpression",
              "start": 74,
              "end": 79,
              "left": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "b"
              }
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
