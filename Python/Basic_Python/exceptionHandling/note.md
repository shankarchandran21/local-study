| **Exception Name**      | **Description (Simple Explanation)** | **When It Happens**                           |
| ----------------------- | ------------------------------------ | --------------------------------------------- |
| **SyntaxError**         | Wrong Python syntax                  | Missing `:`, brackets, wrong indentation      |
| **IndentationError**    | Incorrect indentation                | Mixing tabs/spaces, wrong indent level        |
| **NameError**           | Variable/function name not defined   | Using a variable before defining it           |
| **TypeError**           | Wrong data type used                 | `"5" + 5`, calling non-callable object        |
| **ValueError**          | Correct type but wrong value         | `int("abc")`, invalid inputs                  |
| **IndexError**          | Index out of range                   | Accessing list index that doesn’t exist       |
| **KeyError**            | Key not found in dictionary          | `my_dict["abc"]` when key doesn’t exist       |
| **AttributeError**      | Attribute/function not found         | Calling a method that the object doesn't have |
| **ZeroDivisionError**   | Divide by zero                       | `10 / 0`                                      |
| **ImportError**         | Cannot import a module               | Wrong module name or missing module           |
| **ModuleNotFoundError** | Module does not exist                | Importing a module that is not installed      |
| **FileNotFoundError**   | File path is wrong                   | Opening a file that doesn't exist             |
| **PermissionError**     | No permission to access a file       | Reading/writing protected files               |
| **IOError**             | Input/output error                   | Problems with file handling                   |
| **RuntimeError**        | Error detected at runtime            | Generic unexpected runtime issues             |
| **OverflowError**       | Number too large to represent        | Huge calculations in Python's C layer         |
| **MemoryError**         | Out of memory                        | Creating extremely large objects              |
| **StopIteration**       | No more items in iterator            | Usually raised inside loops/generators        |
| **AssertionError**      | Assertion test failed                | `assert x > 0` and x is negative              |
| **TimeoutError**        | Operation took too long              | Network or async timeout issues               |
