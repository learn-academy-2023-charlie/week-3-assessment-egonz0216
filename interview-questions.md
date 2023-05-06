# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the combination of HTML and Javascript that allows the display of a webpage to be dynamic and interactice. One difference in the syntax between the two is that in HTML, the tags are not case sensitive but in JSX they are. <div></DIV> in HTML, there would be no proplem within that tag, but in JSX that would return an arror message.

Researched answer: JSX allows developers to write HTML code into their javscript files. With this combination however, some keywords must change because they mean something else in javascript. To avoid conflicts, a sustitute word is used - in javascript, we would use "class" to define a class, but in JSX we would use className.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a resourse manager that the allows the user to summon pre-packaged code bits that have been created by other, very nice web developers to assist in the development of a webpage. Im not usre i undestand what the second part of the question is asking, but when we run yarn we modify thr root files that are the ones to get displayed on the webpage. 

Researched answer: Yarn is a PACKAGE manager that reads the package.json file to determine which dependencies and files need to be installed. The json file is then updated with all of the dependencies that are added by yarn.

3. What is a React component?

Your answer: A compartmentalization that helps keep our code clean, and prevents small mistakes from affecting the entirety of the code. we must then import the component to the main file, and summon it with a component call, to be visible on the webpage. 

Researched answer: React components can be thought of as building blocks of the react application. They can be created with either a class declaration or a function declaration, and if using the functions we must use props as the input and return a react element. Components can be nested within other components, allowing for more modular and reusable code. 

4. What is the difference between state values and props in React?

Your answer: Props in react are the method through which the parent component can send data to the child component. State values are the method we can use to make date updateable, but first we must also import {useState}

Researched answer: State is a built in feature of react that represents the data within the component that can change over time, using the setState method. Props are short for properties, and are passed down from the parent component. Props are immutable, which means they are read-only, and cannot be modified by the child component

5. What is the DOM?

Your answer: The DOM is the visual representation of the code on the webpage. I don't recall what the acronym stands for, but it organizes the data into a node tree, where each node where each node represents a single HTML element

Researched answer: The Document Object Model- is used to identify which parts of the component's state or props are changed,and upddates the DOM in a process called reconcilliation. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div tag is a way to to structure the data. With it, we can include different component calls in different orders, so long as they are included within the react fragments. I don't recall what the span tag does off the top of my head.

Researched answer: Div is a block-level element, which means that it is a container that can group or pass stylistic or other data throughout the entirety of its container. It can be used on a large scale, such as the entiretiy of the web page, or even the entire document. A Span is similar in principle, but is used for smaller scale (in-line) application, such as to change a word, or phrase, or even a single character.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: In OOP, programs are designed by creating objects and defining the interactions between them. 

2. Ruby: Is a dynamic, object oriented language. 

3. Implicit return: a feature that allows a method to return a value without explicitly writing "return." Commonly used for one-liner methods where the return value is immediatly clear

4. Ruby blocks: They are a way of passing code to a method as an arguement. When a method is called with a block, the block is executed within the context of teh method. Blocks are defined either using do/end or curly braces.

5. Ruby hashes: They are a type of data structure that allows you to store key:value pairs. 
