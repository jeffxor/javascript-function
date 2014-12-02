describe("Return", function() {

	var noReturn = function (){
	};

	var noValueReturn = function (){
		1+1;
		return;
	};

	var standardReturn = function (){		
		return 1+1;
	};

	var MyObject = function (){

	};

	it("with no return statement", function(){
		var result = noReturn();
		expect(result).toBe(undefined);
	});

	it("with no value return statement", function(){
		var result = noValueReturn();
		expect(result).toBe(undefined);
	});

	it("with standard return statement", function(){
		var result = standardReturn();
		expect(result).toBe(2);
	});

	it("with object return statement", function(){
		var result = new MyObject();
		var result2 = new MyObject();
		expect(result).not.toBe(result2);
	});

});