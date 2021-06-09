const persons = [
  {
    name: "Ayush Verma",
    profession: "Engineer",
    age: "22",
  },
  {
    name: "Aman Malhotra",
    profession: "Engineer",
    age: "22",
  },
  {
    name: "Anjali Garg",
    profession: "Engineer",
    age: "22",
  },
  {
    name: "Nandini Gupta",
    profession: "Analyst",
    age: "22",
  },
  {
    name: "Guraziz Singh",
    profession: "Data Science",
    age: "22",
  },
  {
    name: "Bhavesh Singla",
    profession: "Business",
    age: "22",
  },
];

//console.log(persons);
//console.log("I wanna group persons Object according to profession , lets do it");

let diffentProfessions = [];

for (let i = 0; i < persons.length; i++) {
  let person = persons[i];
  if (!diffentProfessions.includes(person.profession)) {
    diffentProfessions.push(person.profession);
  } else {
    continue;
  }
}

// console.log(diffentProfessions);

let groupedPersons = [];
for (let i = 0; i < diffentProfessions.length; i++) {
  groupedPersons = {
    ...groupedPersons,
    [diffentProfessions[i]]: [],
  };
}

// console.log(groupedPersons);

for (let key in groupedPersons) {
  if (groupedPersons.hasOwnProperty(key)) {
    // console.log("profession found : " , key);
    const professionName = key;
    let filteredPersons = persons.filter(
      (person) => person.profession === professionName
    );
    groupedPersons = {
      ...groupedPersons,
      [key]: [...groupedPersons[key], ...filteredPersons],
    };
  }
}

// console.log(groupedPersons);
let result = {};

const findFromResult = (professionName) => {
  for (let key in result) {
    if (result.hasOwnProperty(key)) {
      if (key === professionName) {
        return result[key];
      }
    }
  }
};

console.log("the grouped persons are : ", groupedPersons);

let searchText = "b";

for (let key in groupedPersons) {
  if (groupedPersons.hasOwnProperty(key)) {
    let currentGroup = groupedPersons[key];

    for (let i = 0; i < currentGroup.length; i++) {
      let person = currentGroup[i];
      // console.log(person.profession);
      //toLowerCase().substring(0, searchText.length)
      if (
        person.profession.toLowerCase().substring(0, searchText.length) ===
        searchText.toLowerCase()
      ) {
        // console.log("was i called bro");
        const partialResult = findFromResult(key);
        // console.log(partialResult);

        if (partialResult) {
          //   console.log("am i called now");
          result = {
            ...result,
            [key]: [...partialResult, person],
          };
        } else {
          result = {
            ...result,
            [key]: [person],
          };
          //   console.log("result updated", result);
        }
      }
    }
  }
}

console.log("The final result is :", result);
