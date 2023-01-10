// TODO: Refactor this function using the map() method to return an array of objects which have only the `id` and `temperament` properties
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/*const getDogsTemperaments = (dogs) => {
  const dogsTemperaments = [];

  for (let i = 0; i < dogs.length; i++) {
    const temperament = {
      id: dogs[i].id,
      temperament: dogs[i].temperament,
    };
    dogsTemperaments.push(temperament);
  }

  return dogsTemperaments;
};*/


const getDogsTemperaments = (dogs) => {
	const dogsTemperaments = dogs.map((dog) => {
		return {
			id: dog.id,
			temperament: dog.temperament,
		};
	});

	return dogsTemperaments;
};

// TODO: Refactor this function using the filter() method to return an array of objects of dogs which are older than the supplied minAge
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
/*const getOldDogs = (dogs, minAge) => {
  const oldDogs = [];

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].age >= minAge) {
      oldDogs.push(dogs[i]);
    }
  }

  return oldDogs;
};*/


const getOldDogs = (dogs, minAge) => {
	return dogs.filter((dog) => dog.age >= minAge);
};


// TODO: Refactor this function using the find() and includes() methods to return a dog object which has the supplied temperament
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

/*const getADogByTemperament = (dogs, temperament) => {
  let dogByTemperament;

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].temperament.includes(temperament)) {
      dogByTemperament = dogs[i];
      break;
    }
  }

  return dogByTemperament;
};*/


const getADogByTemperament = (dogs, temperament) => {
  return dogs.find((dog) => dog.temperament.includes(temperament));
};


// TODO: Refactor this function using the filter() and includes() methods to return an array of objects of dogs which have "Trainable" temperament
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
/*function getDogsByTemperament(dogs, temperament) {
  const dogsByTemperament = [];

  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].temperament.includes(temperament)) {
      dogsByTemperament.push(dogs[i]);
    }
  }

  return dogsByTemperament;
};*/

const getDogsByTemperament = (dogs, temperament) => {
  return dogs.filter((dog) => dog.temperament.includes(temperament));
};

// TODO: Refactor this function using the reduce() method to calculate the average age of the dogs in the array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
/* const getDogsAverageAge = (dogs) => {
  let accumulatedAge = 0;
  const numberOfDogs = dogs.length;

  for (let i = 0; i < numberOfDogs; i++) {
    accumulatedAge = accumulatedAge + dogs[i].age;
  }

  return accumulatedAge / numberOfDogs;
};*/


const getDogsAverageAge = (dogs) => {
  const accumulatedAge = dogs.reduce((previousValue, currentDog) => previousValue + currentDog.age, 0);
return accumulatedAge / dogs.length;
};

module.exports = {
  getDogsTemperaments,
  getOldDogs,
  getADogByTemperament,
  getDogsByTemperament,
  getDogsAverageAge,
};
