const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hex number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hex number):'
  }
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let svgShape;

  switch (shape) {
    case 'Circle':
      svgShape = new Circle();
      break;
    case 'Triangle':
      svgShape = new Triangle();
      break;
    case 'Square':
      svgShape = new Square();
      break;
  }

  svgShape.setColor(shapeColor);

  const svg = new SVG();
  svg.setShape(svgShape);
  svg.setText(text, textColor);

  fs.writeFile('logo.svg', svg.render(), err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});