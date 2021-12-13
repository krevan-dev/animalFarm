export class Clownfish {
  constructor(name, color, gender, weight) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
  }
  eat(food) {
    console.log(`Chomp chomp, all the ${food}!`);
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}`);
  }
}
