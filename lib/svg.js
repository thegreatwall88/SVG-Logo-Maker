
class SVG {
    constructor() {
      this.width = 300;
      this.height = 200;
      this.shapes = [];
      this.text = '';
    }
  
    setShape(shape) {
      this.shapes.push(shape);
    }
  
    setText(text, color) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
  
    render() {
    const shapesString = this.shapes.map(el => el.render()).join('\n  ');
    return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">${shapesString}${this.text}</svg>`;
      }
  }
  
  module.exports = SVG;