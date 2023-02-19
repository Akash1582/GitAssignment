const hobbies = ['Akash','Rahul'];
for (let hobby of hobbies) //Here it is like a foreach loop
  console.log(hobby);

//console.log(hobbies.map(hobby => 'Hobby: '+ hobby)); //Here map is method of array which will take each and every variable of array and transform it into another form using the function into the map but it will create another array

const copiedArray = [...hobbies]; //Spread operator - here it wil pull out all the elements of array  i.e hobbies or object

const toArray = (...args) => { return args}; //Rest operator - It is used when we are unsured about how many elements are going to pass as a argument ,basically it is used to merge elments into an array

console.log(toArray(1,2,3,4));
console.log(copiedArray);
