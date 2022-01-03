let badWords = ["curse", "bad", "wtf", "cursed"];
let politicalWords = ["political", "leader"];

const add_word = function (value) {
  const found = badWords.find((e) => e == value);
  if (found == undefined) {
    badWords.push(value);
  }
};

const is_bad = function (value) {
  const found = badWords.find((e) => e == value);

  if (found == undefined) {
    return false;
  }

  return true;
};

const remove_word = function (value) {
  badWords = badWords.filter((e) => e != value);
};

const hasSwear = function (value) {
  for (let index = 0; index < badWords.length; index++) {
    if (value !== null && value !== "") {
      if (value.toLowerCase().includes(badWords[index])) {
        console.log(badWords[index]);
        return true;
      }
    }
  }
  for (let index = 0; index < politicalWords.length; index++) {
    if (value !== null && value !== "") {
      if (value.toLowerCase().includes(politicalWords[index])) {
        console.log(politicalWords[index]);
        return true;
      }
    }
  }
  return false;
};

module.exports = { is_bad, remove_word, add_word, hasSwear };
