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
    } else if (value instanceof Object) {
      acc.push(...searchAllId(value, searchId));
    }

    return acc;
  }, []);
};

console.log('searchAllId(obj, "id");', searchAllId(obj, "id"));

const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  let stack = [];

  tree.forEach((item) => stack.push(item));
  while (stack.length) {
    const node = stack.pop();
    sum += node.id;

    if (node.children) {
      node.children.forEach((item) => stack.push(item));
    }
  }

  return sum;
};

iteration([obj]);

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
  { name: "Alex", age: 20, group: 1 },
  { name: "Mike", age: 24, group: 1 },
  { name: "Masha", age: 20, group: 2 },
  { name: "Stanislav", age: 18, group: 3 },
  { name: "Ivan", age: 40, group: 3 },
];
// 1)
// groupStudents
// {
//     '20': [{ name: "Alex", age: 20 }, { name: "Masha", age: 20 }]
//     '18': [{ name: "stanislav", age: 18 }]
//     '24': [{ name: "Mike", age: 24 }]
// }

// 2) groupStudentsSum reduce and count age
// groupStudents
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

const groupStudentsSum = (students) => {
  return students.reduce((acc, route) => {
    if (acc[route.group]) {
      acc[route.group] = acc[route.group] + route.age;
    } else {
      acc[route.group] = route.age;
    }
    return acc;
  }, {});
};

groupStudentsSum(students);

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

// Поиск в ширину в графе, используется fifo, первым вошел первым вышел

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

const breadthSearch = (graph, start, end) => {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
};

console.log("breadthSearch", breadthSearch(graph, "a", "g"));

const breadthSearch2 = (graph, start, end) => {
  let queue = [];
  queue.push([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    console.log("current", current);

    if (!graph[current]) {
      graph[current] = [];
    }

    if (current === end) {
      console.log("path", path);
      return path;
    } else {
      for (let neighbor of graph[current]) {
        if (!path.includes(neighbor)) {
          queue.push([...path, neighbor]);
        }
      }
    }
  }

  return null;
};

console.log("breadthSearch2", breadthSearch2(graph, "a", "g"));

const binarySearch = (sortedArray, key) => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
};

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetElement = 9;
const index = binarySearch(sortedArray, targetElement);

// Реализуйте функцию createAccessChecker(), которая принимает на вход объект с разрешениями для ролей и возвращает функцию, проверяющую, есть ли у пользователя доступ к ресурсу.
//
//     type UserRole = 'admin' | 'user' | 'guest';
// type UserResource = 'document' | 'user' | 'adminPanel';
//
// const userRolePermissions: Record<UserRole, Array<UserResource>> = {
//     admin: ['document', 'user', 'adminPanel'],
//     user: ['document', 'user'],
//     guest: ['document'],
// };
//
// const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);
//
// const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
// console.log(isAdminAllowed); // => true
//
// const isUserAllowed = checkUserAccess('user', 'adminPanel');
// console.log(isUserAllowed);

// Напишите функцию, которая убирает подчеркивание и тире из слова и делает следующую букву заглавной
const strNotCamelCase = "what-a-nice_today";

const formatToCamelCase = (str) => {
  const arr = [...str];
  let firstElementAfterSymbol = false;

  const result = [];

  arr.forEach((item) => {
    if (item !== "_" && item !== "-") {
      if (firstElementAfterSymbol) {
        result.push(item.toUpperCase());
        firstElementAfterSymbol = false;
      } else {
        result.push(item);
      }
    } else {
      firstElementAfterSymbol = true;
    }
  });

  return result.join("");
};

formatToCamelCase(strNotCamelCase);

// Напишите функцию, которая находит уникальный элемент в массиве чисел, где все числа повторяются дважды, за исключением одного.
const findUniqueElement = (array) => {
  const unique = {};

  array.forEach((item) => {
    if (unique[item]) {
      unique[item] = (unique[item] || 0) + 1;
    } else {
      unique[item] = 1;
    }
  });

  for (let key in unique) {
    if (unique[key] === 1) {
      return key;
    }
  }

  return null;
};

const arrayExample = [1, 2, 3, 4, 1, 2, 3];
console.log(findUniqueElement(arrayExample));

// Напишите функцию для нахождения непрерывного подмассива в массиве целых чисел, который имеет максимальную сумму элементов.
//
// Примеры кода с реализацией алгоритма Кадана (Kadane's algorithm):

const maxSubarraySum = (arr) => {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    console.log("maxSoFar", maxSoFar);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};

const arrayKadan = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arrayKadan));
``; // Вернет 6

/// AAAABBBBCCdDD --> ABCdD
const uniqueResult = (str) => {
  const result = [];
  let flug = null;

  for (let key of str) {
    if (flug !== key) {
      result.push(key);
      flug = key;
    }
  }

  return result.join("");
};

uniqueResult("AAAABBBBCCdDD");
