/**
 * @author Michael Wilson
 * @description The goal of this is to really put my web development skills to the test.
 * @version 1.0.0
 */
(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(event) {
      runTestSuite();
    });
  } else {
    runTestSuite();
  }

  /******************************* TEST PROTOTYPE *******************************/
  // Constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  function testPrototype() {
    console.log("RUNNING PROTOTYPE TESTS");
    const mike = new Person("Michael", 27);
    testProperty(mike, "name", "Michael");
    testProperty(mike, "age", 27);

    Person.prototype.stateFacts = function() {
      //console.log(`Hi I'm ${this.name} and I'm ${this.age}`);
    };

    // test the constructor
    const jill = new mike.constructor("Jill", 27);
    testProperty(jill, "name", "Jill");
    testProperty(jill, "age", 27);
    mike.stateFacts();
    jill.stateFacts();
  }

  function testProperty(object, property, expectedValue) {
    console.assert(object[property] === expectedValue, {
      message: `${property} not set properly`
    });
  }

  /******************************* TEST CLASS *******************************/
  function testClass() {}
  function testIIFE() {}

  /******************************* TEST CLOSURE *******************************/
  const multiply = x => y => x * y;

  function moduleClosure() {
    var y = (function() {
      var x = 3;
      function logX() {
        console.log(x);
      }
      return {
        log: function() {
          logX();
        }
      };
    })();
    y.log();
  }

  function functionClosure() {
    var rollDice = function() {
      var rolledValue = 0;
      function rollDice() {
        rolledValue = Math.round(Math.random() * 5) + 1;
      }

      return {
        roll: function() {
          return rollDice();
        },
        currentValue: function() {
          return rolledValue;
        }
      };
    };

    var firstDie = rollDice();
    firstDie.roll();
    console.log(firstDie.currentValue());
  }

  function curryingClosure() {
    var sum4 = a => b => c => d => a + b + c + d;
    console.assert(sum4(1)(2)(3)(4) === 10, {
      message: "Guess I don't know how to add numbers ):"
    });
  }

  function testClosure() {
    console.log("TESTING CLOSURES");
    var mul5 = multiply(5);
    var mul10 = multiply(10);
    console.assert(mul10(2) === mul5(4), { message: "Closure not working" });

    moduleClosure();
    functionClosure();
    curryingClosure();
  }

  function testModulePattern() {}
  function testHositing() {}
  function testCurring() {}
  function testMemoization() {}
  function testApply() {}
  function testBind() {}
  function testCall() {}
  function testPolymorphism() {}
  function testCallback() {}
  function testAJAX() {}
  function testPromise() {}
  function testAsyncAwait() {}
  function testJSON() {}
  function testDataStructures() {}

  function runTestSuite() {
    console.log("RUNNING TEST SUITE");
    testPrototype();
    testClosure();
  }
})();
