const doublicates = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }];

const unique = doublicates.reduce((acc, route) => {
  if (!acc.some((item) => JSON.stringify(route) === JSON.stringify(item))) {
    acc.push(route);
  }

  return acc;
}, []);

console.log("unique", unique);

const obj = {
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 3,
        },
      ],
    },
    {
      id: 4,
      children: [
        {
          id: 5,
        },
      ],
    },
  ],
};

const searchAllId = (obj, searchId) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (searchId === key) {
      acc.push(value);
    } else if (typeof value === "object") {
      acc.push(...searchAllId(value, searchId));
    }

    return acc;
  }, []);
};

console.log('searchAllId(obj, "id");', searchAllId(obj, "id"));

const str = "hello, my name is Ivan";

const reverseStr = (str) => {
  return str
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .join(" ");
};

console.log("reverseStr(str)", reverseStr(str));

const sum = (a) => a * a;

const memo = (callback) => {
  const cache = {};

  return (num) => {
    if (cache[num]) {
      console.log("existing cache");
      return cache[num];
    } else {
      console.log("update cache");
      const result = callback(num);
      cache[num] = result;
      return result;
    }
  };
};
const memoized = memo(sum);

console.log("memoized", memoized(3));

let anagrams = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const cleanAnagram = (anagrams) => {
  const result = new Map();
  anagrams.forEach((item) => {
    const sortAnagrams = item.toLowerCase().split("").sort().join("");
    if (!Array.from(result.keys()).includes(sortAnagrams)) {
      result.set(sortAnagrams, item);
    }
  });
  return Array.from(result.values());
};

console.log("cleanAnagram", cleanAnagram(anagrams));
// "nap,teachers,ear" или "PAN,cheaters,era"

// add function sortText

const sortText = (words) => {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d+/g) - b.match(/\d+/g);
    })
    .join(" ");
};

console.log("sortText result: ", sortText("4of Fo1r pe6ople g3ood th5e the2"));

// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

const fructs = ["kiwi", "apple", "banana", "kiwi", "banana"];

fructs.reduce((acc, route) => {
  acc[route] = acc[route] + 1 || 0;

  return acc;
}, {});

const uniqueFructs = (lists) => {
  const unique = {};

  lists.forEach((it) => {
    unique[it] = true;
  });

  return Object.keys(unique);
};

console.log("uniqueFructs fructs, result: ", uniqueFructs(fructs));

const students = [
  { name: "Alex", age: 20 },
  { name: "Mike", age: 24 },
  { name: "Masha", age: 20 },
  { name: "stanislav", age: 18 },
];

//
// {
//     '20': [{ name: "Alex", age: 20 }, { name: "Masha", age: 20 }]
//     '18': [{ name: "stanislav", age: 18 }]
//     '24': [{ name: "Mike", age: 24 }]
// }

const groupStudents = (lists) => {
  // const result = new Map();
  //
  // students.map((student) =>
  //   result.set(
  //     student.age,
  //     students.filter((el) => el.age === student.age)
  //   )
  // );
  //
  // return result;

  const grouped = {};

  lists.forEach((element) => {
    if (!grouped[element.age]) {
      grouped[element.age] = [element];
    } else {
      grouped[element.age].push(element);
    }
  });

  return grouped;
};

console.log("groupStudents students, result: ", groupStudents(students));

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const mySum = 10;

// result: [11, -1] or [-1, 11]

const searchSumFromMyNumbers = (lists, sum) => {
  const result = [];

  for (let i = 0; i < lists.length; i++) {
    for (let j = i + 1; j < lists.length; j++) {
      if (lists[i] + lists[j] === sum) {
        return [lists[i], lists[j]];
      }
    }
  }

  return result;
};

console.log(
  "searchSumFromMyNumbers result :",
  searchSumFromMyNumbers(myNumbers, mySum)
);

const friends = [
  { name: "Alex", pizza: ["pepperoni", "cheese"] },
  { name: "Mike", pizza: ["ananas"] },
  { name: "Masha", pizza: ["apple"] },
  { name: "stanislav", pizza: ["fructs", "meat"] },
];
