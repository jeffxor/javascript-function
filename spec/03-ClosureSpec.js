describe("Simple Closure", function() {

	var outerValue = "ford";

	function outerFunction(){
		expect(outerValue).toBe("ford");
	}

	it("global scope is itself a closure", function(){
		outerFunction();
	});

});

describe("Scoped Closure", function() {

	var outerValue = "ford";
	var later;

	function outerFunction(){
		var innerValue = 'honda'
		function innerFunction(){
			expect(outerValue).toBe("ford");
			expect(innerValue).toBe("honda");
		}
		later = innerFunction;
	}

	outerFunction();


	it("with inner scope", function(){
		later();
	});

});

describe("Later Scoped Closure", function() {

	var outerValue = "ford";
	var later;

	function outerFunction(){
		var innerValue = 'honda'
		function innerFunction(paramValue){
			expect(outerValue).toBe("ford");
			expect(innerValue).toBe("honda");
			expect(paramValue).toBe("toyota");
			expect(tooLate).toBe("nissan");
		}
		later = innerFunction;
	}

	if(!tooLate){
		console.log("I can't see tooLate");
	}

	var tooLate = "nissan";

	outerFunction();


	it("with inner scope", function(){
		later("toyota");
	});

});