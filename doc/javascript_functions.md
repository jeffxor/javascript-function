##Javascript Functions

###Return
* Invocation begins execution with the first statement, ends when it hits the } closing the function body. 
* **return** can be used to cause a function to return early.
* A function always returns a value. 


###Scope
* Javascript does not have block scope.
* Javascript does have function scope.
* Parameters and variables defined within a function are not visible outside of the function.
* Variables defined within a function is visible everywhere within the function.
* This scoping provides for on interesting feature.

###Closure
#####Definitions
* "Closures are functions that refer to independent (free) variables." 
* "The function defined in the closure 'remembers' the environment in which it was created."
* "In computer science, a closure is a first-class function with free variables that are bound in the lexical environment."
* "A closure is a function that is said to be "closed over" it’s free variables"

#####Simpler Definition
A closure is basically a function/method that has the following two properties:

* You can pass it around like an object (to be called later)
* It remembers the values of all the variables that were in scope when the function was created. It is then able to access those variables when it is called even though they may no longer be in scope.
* Huh?

Examples


#####How is it supported
######Summary

* When a closure is created, it retains the values of all the variables that were in scope when the closure was defined.
* Even if the variables are generally no longer in scope when the closure is called, within the closure they still are.
* Hence, the closure retains knowledge of its lexical environment at the time it was defined.

When a JavaScript function is invoked, a new execution context is created. Together with the function arguments and the parent object, this execution context also receives all the variables declared outside of it.


######How do they retain the values of the variables that were in scope when the closure was defined? 

* Language must support first-class functions ie a function can be treated like an object.  
* The closure will create a copy of all the variables that it needs when it is defined. The copies of the variables will therefore come along for the ride as the closure gets passed around.  
* The closure will actually extend the lifetime of all the variables that it needs. It will not copy them, but will retain a reference to them and the variables themselves will not be eligible for garbage collection (if the language has garbage collection) while the closure is around.

######Other languages that support closures  
* Scala 
* C# 
* Clojure  
* Ruby
* Sorry Java8 :-(

#####Closures, so what?
Closures are on of the most powerful features available in the JavaScript language.
It is at the core of most functional programming techniques.

As we will see it allows for

* Modules / Objects 
* Callbacks
* Currying
* Memoziation

###Module/Objects
* “Object-oriented code written in JavaScript is unable to use traditional private variables”
* “By using the concept of a closure, we can achieve an acceptable approximation”
* “The variable is available to the inner methods via their closures, but not to code that lies outside the constructor.”

[Encapsulation Example](http://jsfiddle.net/jeffxor/fpo5f1go/)


###Callbacks/Timers
Now that we have functions that maintain there own state and can be passed around, what can we do?

#####Callbacks
“function is being asynchronously called at an unspecified later time, and within such functions we frequently need to access outside data.”


[Simple Callback](http://jsfiddle.net/jeffxor/x07jpx9h/)

######Timers
[Animation Timer](http://jsfiddle.net/jeffxor/ncyazn0y/)

* It uses a single anonymous function to accomplish the animation of the target element.
* Function encapsulates all variables needed, via a closure, to control the animation process.
	* element
	* level
	* timer

So why is this better?
* If we use global state we need to keep tracking all these variables
* Becomes obvious when we animate more than one element 

“By defining the variables inside the function, and by relying upon the closures to make them available to the timer callback invocations, each animation gets its own private “bubble” of variables”

###Currying
"Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument" -- wikipedia

Or more simply the "partial application of functions".

“Partially applying” a function is a particularly interesting technique in which we can prefill arguments to a function before it’s even executed.

Example of Usefulness
	
	String.prototype.csv = String.prototype.split.partial(/,\s*/);
	
	var results = "Mary, John, Charles".csv();

In effect, partially applying a function returns a new function with predefined arguments, which we can later call.”
[Currying Example](http://jsfiddle.net/jeffxor/01qj010q/)


[Some further readin](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)

###Memoization
Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

[Memoization Example](http://jsfiddle.net/jeffxor/fsw099ts/1/)


###Gotchas
The worst featires of a language aren't the features that are obviously dangerous or useless. Those are easily avoided. The worst features are the attractive nuisances, the features that are both useful and dangerous.

####Semicolon Insertion
####typeof Operator
####parseInt
####Floating Point
####Falsy Values
####==
####eval
####switch Fall Through
####Block Less Statements
####The function Statement Versus the function Expression



