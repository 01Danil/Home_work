/*
const messages = [
  "They can be inserted into arrays",
  (message) => console.log(message),
  "like variables",
  (message) => console.log(message),
];

messages[1](messages[0]);
messages[3](messages[2]);
*/

/*
const insideFN = (logger) =>
  logger("They can be sent to other functions as arguments");
insideFN((message) => console.log(message));

let createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream((message) => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");
*/

/*
const createScream = logger => message =>
  logger(message.toUpperCase() + "!!!");
*/

/*  -------------- For Miy Dim Online not ' ' -----------*/
/*let string = "This is the midday show with Cheryl Waters";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);
*/

/*
const string = "This is the mid day show with Cheryl Waters";
const urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly);
*/

/*
const loadAndMapMembers = compose(
  combineWith(sessionStorage, "members"),
  save(sessionStorage, "members"),
  scopeMembers(window),
  logMemberInfoToConsole,
  logFieldsToConsole("name.first"),
  countMembersBy("location.state"),
  prepStatesForMapping,
  save(sessionStorage, "map"),
  renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);
*/

/*
const { render } = ReactDOM
const Welcome = () => (
<div id="welcome">
<h1>Hello World</h1>
</div>
)
render(
<Welcome />,
document.getElementById('target')
)
*/

/*
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

// function rateColor(color, rating) {
//   color.rating = rating;
//   return color;
// }

// let rateColor = function(color, rating) {
// 	return Object.assign({}, color, {rating:rating})
// }
const rateColor = (color, rating) => ({
  ...color,
  rating,
});

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
*/

/*
let list = [{ title: "Red Red" }, { title: "Lawn" }, { title: "Party Pink" }];

// let addColor = function (title, colors) {
//   colors.push({ title: title });
//   return colors;
// };

// const addColor = (title, array) => array.concat({ title });

const addColor = (title, list) => [...list, { title }];

console.log(addColor("Glam Green", list).length);
console.log(list.length);
*/

/*
let frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate();
console.log(frederick);
*/

/*
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  caanWrite: false,
};

const selfEducation = (person) => {
  person.canRead = true;
  person.caanWrite = true;
  return person;
};

console.log(selfEducation(frederick));
console.log(frederick);
*/

/*
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducation = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEducation(frederick));
console.log(frederick);
*/

/*
function Header(text) {
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header("Header() caused side effects");
*/

/*
const Header = (props) => <h1>{props.title}</h1>;
*/

/*
const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
console.log(schools.join(", "));

const wSchools = schools.filter((school) => school[0] === "W");
console.log(wSchools);

const cutSchool = (cut, list) => list.filter((school) => school !== cut);
console.log(cutSchool("Washington & Lee", schools).join(" * "));
console.log(schools.join("\n"));

const highSchool = schools.map((school) => `${school} High School`);
console.log(highSchool.join("\n"));
console.log(schools.join("\n"));

const highSchools = schools.map((school) => ({ name: school }));
console.log(highSchools);
*/

/*
let schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Lee" },
  { name: "Wakefield" },
];
// let updateSchools = editName("Stratford", "HB Woodlawn", schools);
// console.log(updateSchools[1]);
// console.log(schools[1]);

// const editName = (oldName, name, arr) =>
//   arr.map((item) => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name,
//       };
//     } else {
//       return item;
//     }
//   });

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : iten));
*/

/*
const schools = {
  Yorktown: 10,
  "Washington & Lee": 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(schools).map((key) => ({
  name: key,
  wins: schools[key],
}));

console.log(schoolArray);
*/

/*
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);
console.log(`maxAge`, maxAge);
const max = ages.reduce((max, value) => (value > max ? value : max), 0);
*/

/*
const colors = [
  {
    id: `-xekare`,
    title: "rad red",
    rating: 3,
  },
  {
    id: `-jbwsof`,
    title: "big blue",
    reating: 2,
  },
  {
    id: `-prigbj`,
    title: "grizzly grey",
    reating: 5,
  },
  {
    id: `-ryhbhs1`,
    title: "banana",
    reating: 1,
  },
];
const hashColors = colors.reduce((hash, { id, title, reating }) => {
  hash[id] = { title, reating };
  return hash;
}, {});
console.log(hashColors);
*/

/*
const colors = ["red", "red", "green", "blue", "green"];
const distinctColors = colors.reduce(
	(distinct, color) =>
		(distinct.indexOf(color) !== -1) ?
			distinct :
			[...distinct, color],
			[]
);
console.log(distinctColors);
*/

/*
const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);
*/

/*
const userLogs = userName => message =>
	console.log(`${userName} -> ${message}`)
	const log = userLogs("grandpa23")
	log("attempted to load 20 fake members")
	getFakeMembers(20).then(
	members => log(`successfully loaded ${members.length} members`),
	error => log("encountered an error loading members")
	)
*/

/*
const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, (value) => console.log(value));
*/

/*
const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0 ? setTimeout(() => countdown(value - 1, fn), delay) : value;
};
const log = (value) => console.log(value);
countdown(10, log);
*/

/*
let dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};
console.log(deepPick("type", dan));
console.log(deepPick("data.info.fullname.first", dan));
*/

/*
const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};
*/

/*
const template = "hh:mm:ss tt";
const clockTime = template
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");
console.log(clockTime);

const both_1 = (date) => appendAMPM(civilianHours(date));

const both = compose(
	civilianHours,
	appendAMPM
)
both(new Date())
*/

/*
const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => composed, arg);
*/

/*
// Вывод показаний часов каждую секунду
setInterval(logClockTime, 1000);
function logClockTime() {
  // Получение строки показания часов в гражданском формате
  var time = getClockTime();
  // Очистка показаний консоли и вывод показания часов
  console.clear();
  console.log(time);
}
function getClockTime() {
  // Получение текущего времени
  var date = new Date();
  var time = "";
  // Выстраивание последовательности показания часов
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

// Преобразование показания времени в гражданский формат
if (time.hours == 12) {
  time.ampm = "PM";
} else if (time.hours > 12) {
  time.ampm = "PM";
  time.hours -= 12;
}
// Подстановка 0 к показанию часов, чтобы получалась пара цифр
if (time.hours < 10) {
  time.hours = "0" + time.hours;
}
// Подстановка 0 к показанию минут, чтобы получалась пара цифр
if (time.minutes < 10) {
  time.minutes = "0" + time.minutes;
}
// Подстановка 0 к показанию секунд, чтобы получалась пара цифр
if (time.seconds < 10) {
  time.seconds = "0" + time.seconds;
}
// Придание показаниям часов формата строки "hh:mm:ss tt"
return time.hours + ":"
			+ time.minutes + ":"
			+ time.seconds + " "
			+ time.ampm
};
*/

/*
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});
const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});
const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const display = (target) => (time) => target(time);
const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);
const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);
const doubleDigits = (civilianTime) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);
const startTicking = () =>
  setInterval(
		() =>
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    )(),
    oneSecond()
  );
startTicking();
*/

/*
{
	$$typeof: Symbol(React.element),
"type": "h1",
"key": null,
"ref": null,
"props": {"children": "Baked Salmon"},
"_owner": null,
"_store": {}
}
*/

/*
var dish = React.createElement("h1", null, "Baked Salmon");
ReactDom.render(dish, document.getElementById("react-container"));
*/

/*
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
);
*/

/*
{
"type": "ul",
"props": {
"children": [
{ "type": "li", "props": { "children": "1 lb Salmon" } … },
{ "type": "li", "props": { "children": "1 cup Pine Nuts"} … },
{ "type": "li", "props": { "children": "2 cups Butter Lettuce" } … },
{ "type": "li", "props": { "children": "1 Yellow Squash"} … },
{ "type": "li", "props": { "children": "1/2 cup Olive Oil"} … },
{ "type": "li", "props": { "children": "3 cloves of Garlic"} … }
]
...
}
}
*/

/*
React.createElement(
  "section",
  { id: "baked-salmon" },
  React.createElement("h1", null, "Baked Salmon"),
  React.createElement(
    "ul",
    { className: "ingredients" },
    React.createElement("li", null, "1 lb Salmon"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic")
  ),
  React.createElement(
    "section",
    { className: "instructions" },
    React.createElement("h2", null, "Cooking Instructions"),
    React.createElement("p", null, "Preheat the oven to 350 degrees."),
    React.createElement(
      "p",
      null,
      "Spread the olive oil around a glass baking dish."
    ),
    React.createElement("p", null, "Add the salmon, garlic, and pine..."),
    React.createElement("p", null, "Bake for 15 minutes."),
    React.createElement("p", null, "Add the yellow squash and put..."),
    React.createElement("p", null, "Remove from oven and let cool for 15 ....")
  )
);
*/

/*
React.createElement(
  "ul",
  { className: "ingredients" },
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
);

let items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredients, i) =>
    React.createElement("li", { key: i }, ingredients)
  )
);
*/

/*
const IngredientsList = React.createClass({
	displayName: "IngredientsList",
	render() {
	return React.createElement("ul", {"className": "ingredients"},
	React.createElement("li", null, "1 lb Salmon"),
	React.createElement("li", null, "1 cup Pine Nuts"),
	React.createElement("li", null, "2 cups Butter Lettuce"),
	React.createElement("li", null, "1 Yellow Squash"),
	React.createElement("li", null, "1/2 cup Olive Oil"),
	React.createElement("li", null, "3 cloves of Garlic")
	)
	}
	})
	const list = React.createElement(IngredientsList, null, null)
	ReactDOM.render(
	list,
	document.getElementById('react-container')
	)
*/

/*
<IngredientsList>
	<ul className="ingredients">
		<li>1 lb Salmon</li>
		<li>1 cup Pine Nuts</li>
		<li>2 cups Butter Lettuce</li>
		<li>1 Yellow Squash</li>
		<li>1/2 cup Olive Oil</li>
		<li>3 cloves of Garlic</li>
	</ul>
</IngredientsList>
*/

/*
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      this.props.items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
      )
    );
  },
});

const items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null),
  document.getElementById("react-container")
);

<IngredientsList items=[...]>
<ul className="ingredients">
<li key="0">1 lb Salmon</li>
<li key="1">1 cup Pine Nuts</li>
<li key="2">2 cups Butter Lettuce</li>
<li key="3">1 Yellow Squash</li>
<li key="4">1/2 cup Olive Oil</li>
<li key="5">3 cloves of Garlic</li>
</ul>
</IngredientsList>
*/

/*
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient);
  },
  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      this.props.items.map(this.renderListItem)
    );
  },
});
*/

/*
<ul data-react-root class="ingredients">
	<li>1 lb Salmon</li>
	<li>1 cup Pine Nuts</li>
	<li>2 cups Butter Lettuce</li>
	<li>1 Yellow Squash</li>
	<li>1/2 cup Olive Oil</li>
	<li>3 cloves of Garlic</li>
</ul>
*/

/*
class IngredientsList extends React.Component {
  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient);
  }
  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      this.props.item.map(this.renderListItem)
    );
  }
};
*/

/*
const IngredientsList = (props) =>
  React.createElement(
    "ul",
    { className: "ingredients" },
    props.item.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
*/

/*
const IngredientsList = ({ item }) =>
  React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
*/

/*
<ul>
  <li class="smile">smile</li>
  <li class="smile">smile</li>
  <li class="frown">frown</li>
  <li class="smile">smile</li>
  <li class="frown">frown</li>
</ul>;
*/

/*
React.DOM.h1(null, 'Baked Salmon')
*/

/*
React.DOM.ul({"className": 'ingredients'},
	React.DOM.li(null, "1 lb Salmon"),
	React.DOM.li(null, "1 cup Pine Nuts"),
	React.DOM.li(null, "2 cups Butter Lettuce"),
	React.DOM.li(null, "1 Yellow Squash"),
	React.DOM.li(null, "1/2 cup Olive Oil"),
	React.DOM.li(null, "3 cloves of Garlic"),
)
*/

/*
let items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];
let list = React.DOM.ul(
  { className: "ingredients" },
  items.map((ingredient, key) => React.DOM.li({ key }, ingredient))
);
ReactDOM.render(list, document.getElementById("react-container"));
*/

/*
const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
  React.createElement(
    "ul",
    null,
    list.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );

const ingredients = React.createFactory(IngredientsList);

const list = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

render(ingredients({ list }), document.getElementById("react-container"));
*/

/*
<ul>
  <li>1 lb Salmon</li> <li></li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 cloves of Garlic</li>
</ul>;
*/

/*
React.createElement(IngredientsList,{list:[...]});
<IngredientsList list={[...]}/>
*/

/*
<IngredientsList>
  <ingredient />
  <ingredient />
  <ingredient />
</IngredientsList>;
*/

/*
<h1 className="fancy">Baked Salmon</h1>;
<h1>{this.PaymentResponse.title}</h1>;
<input type="checkbox" defaultChecked={false} />;
*/

/*
<h1>{"Hello" + this.props.title}</h1>
<h1>{this.props.title.toLowerCase().replace}</h1>
function appendTitle({this.props.title}) {
console.log(`${this.props.title} is great!`)
}
*/

/*
<ul>
  {this.PaymentResponse.ingredients.map((ingredient, i) => (
    <li key={i}>{ingredient}</li>
  ))}
</ul>;
*/

/*
let data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "1 1B" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "1 1b" },
      { name: "Chesse", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 1, measurement: "large" },
    ],
		'ssteps': [
			"Cook the fish on the grill until hot.",
			"Place the fish on the 3 tortillas.",
			"Top them with lettuce, tomatoes, and cheese."
		]
  },
];
*/

// Данные, массив объектов приложения Recipes
var data = [ ... ];
// Функциональный компонент, не имеющий состояния, предназначенный
// для отдельно взятого рецепта приложения Recipes
const Recipe = (props) => (
...
)

// Функциональный компонент, не имеющий состояния,
// предназначенный для меню из рецептов
const Menu = (props) => (
	...
	)
	// Вызов ReactDOM.render для отображения Menu в текущей DOM-модели
	ReactDOM.render(
	<Menu recipes={data} title="Delicious Recipes" />,
	document.getElementById("react-container")
	)