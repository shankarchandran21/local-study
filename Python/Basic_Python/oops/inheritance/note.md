# ⭐ What is Inheritance?

Inheritance means one class can get (or inherit) features from another class.
Just like a child inherits qualities from parents.
Make changes in object level not in class. example if you create app v1 and v2 , v2 inherit v1 if v2 is crashed simply change obj into v1 don't remove the code in v2

# What is Single level ?
Single level inheritance means one parent class and one child class.
Only one level of inheritance is happening.

```
Parent
 └── Child
```


# what is Multilevel inheritance?

Multilevel inheritance means one class inherits from another class, and then another class inherits from that derived class — like a chain.

```
Grandfather
 └── Father
      └── Son
```
# What is Hierarchical inheritance ?

Hierarchical inheritance means one parent class has multiple child classes.
All child classes inherit from the same parent.

```
          Parent
         /   |   \
 Child1   Child2   Child3

```
# what is Multiple inheritance ?
Multiple inheritance means a class can inherit from more than one parent class at the same time.

```
     Parent 1        Parent 2
        |               |
        \_____________ /
                |
             Child


```

# What is Hybrid inheritance ?

Hybrid inheritance is a combination of two or more types of inheritance in one program.

It mixes patterns like:

Single inheritance

Multilevel inheritance

Multiple inheritance

Hierarchical inheritance

