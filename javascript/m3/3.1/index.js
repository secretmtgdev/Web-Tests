(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      arrays();
    });
  } else {
    arrays();
  }

  function arrays() {
    // arrays are a collection of entities
    // typeof === object
    // contains properties which can be thought of DNA of a person
    var myArr = ["red", "green", "blue"];

    // adds an element to the end of an array
    myArr.push("alpha");
    myArr[myArr.length] = "beta";

    // sort by ascending order alphabetically
    myArr.sort();
    console.log(myArr);

    let persons = [
      { name: "Michael", age: 27 },
      { name: "Amelia", age: 26 },
      { name: "Hans", age: 28 }
    ];

    // compare two persons by their age
    function compareByAge(personA, personB) {
      if (personA.age < personB.age) {
        return -1;
      } else if (personA.age > personB.age) {
        return 1;
      } else {
        return 0;
      }
    }

    // sort by age using a callback for element comparison
    persons.sort(compareByAge);
    console.log(persons);

    // remove an element from the array, delete will just set the value to undefined
    persons.splice(0, 1);
    console.log(persons);

    // remove the last element from the array
    console.log(persons.pop());

    /**
     * Queue:
     *    enqueue --> arr.push(e)
     *    dequeue --> arr.splice(0, 1)
     *
     * Stack:
     *    push --> arr.push(e)
     *    pop --> arr.pop()
     *
     * Matrix: var arr = [[1, 2], [3, 4]]
     */

    // remove characters from a string with substring
    var name = "Michael";
    console.log(name.substring(0, name.length - 1));

    // add one string to another
    console.log(name.concat("l"));

    // for each
    let daysOfTheWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    daysOfTheWeek.forEach(
      (day, index) => (document.body.innerHTML += `Day: ${index} is ${day}<br>`)
    );
  }
})();
