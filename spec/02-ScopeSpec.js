describe("Global Scope", function() {

	var a = 1;

	var sum = function (){
		var b = 2;
		return a + b;
	};

	it("with global scope", function(){
		var result = sum();
		expect(result).toBe(3);
	});

});

describe("Function Scope", function() {

	var sum = function (){
		var a = 1;
		var b = 3;
		return a + b;
	};

	it("with no globals", function(){
		var result = sum();
		expect(result).toBe(4);
	});

});

describe("Function Scope", function() {

	var sum = function (){
		var a = 1;
		b = 3;
		return a + b;
	};

	var sum2 = function (){
		var a = 2;
		return a + b;
	};

	it("what happens?", function(){
		sum();
		var result = sum2();
		expect(result).toBe(5);
	});

});

describe("Function Scope", function() {
	var foo = function(){
		var a = 3, b = 5;

		var bar = function (){
			var b = 7, c = 11;
			console.log("a=" + a + ", b=" + b + ", c=" + c);
			a += b + c;
			console.log("a=" + a + ", b=" + b + ", c=" + c);
		};
		console.log("a=" + a + ", b=" + b);
		bar();
		console.log("a=" + a + ", b=" + b);
	};

	it("what happens?", function(){
		foo();
		expect(true).toBeTruthy();
	});

});

