##Closure Script

###Simple Closure
#####What so we see?
1. We declare a variable and a function in the same scope in this case, the global scope. 
2. Afterwards, we cause the function to execute

#####Expectations?
1. The function is able to “see” and access the outerValue variable.

#####Results
1. Both the outer value and the outer function are declared in global scope, that scope (which is actually a closure) never goes away.
2. It’s not surprising that the function can access the variable because it’s still in scope and viable.
3. This may seem rather intuitive until you remember that a declared function can be called at any later time, even after the scope in which it was declared has gone away.


###Scoped Closure
#####What are the differences?
1. We’re executing the inner function after the outer function has been executed via the trick of copying a reference to the function to a global reference (later).
2. When the inner function executes, the scope inside the outer function is long gone and not visible at the point at which we’re invoking the function through later.

#####Expectations?
1. The first assert is is the same as previous
2. So we could very well expect the second assert to fail, as innerValue is sure to be undefined. Right?


#####Why did it not fail?
* A closure was also created that encompasses not only the function declaration, but also all variables that are in scope at the point of the declaration.”
* Even if it’s executed after the scope in which it was declared goes away, it has access to the original scope in which it was declared through its closure
* They create a “safety bubble,” if you will, of the function and the variables that are in scope at the point of the function’s declaration, so that the function has all it will need to execute.

###Advanced Closure
#####What are the differences?
1. We added a parameter to the inner function, and 
2. We pass a value to the function when it’s invoked through later
3. We also added a variable that’s declared after the outer function declaration

#####Expectations?
1. What do we expect the paramValue to be
2. Do we expect to be able to access the tooLate variable
3. What about inside the innerFunction?

#####Results
This shows three more interesting concepts regarding closures:

1. Function parameters are included in the closure of that function. (Seems obvious, but now we’ve said it for sure.)
2. All variables in an outer scope, even those declared after the function declaration, are included.
3. Within the same scope, variables not yet defined cannot be forward-referenced.


The second and third points explain why the inner closure can see variable tooLate, but the outer closure cannot.