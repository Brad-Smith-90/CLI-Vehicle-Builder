// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle { 
  // These are the properties that every Motorbike will have
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(); // Since Vehicle's constructor takes no arguments, we pass none
    
    // Initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    // Check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(17, "Default Brand"), new Wheel(17, "Default Brand")];
    } else {
      this.wheels = wheels; // If there are 2 wheels, we use the ones provided
    }
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  
  // Override the printDetails method from the Vehicle class
  override printDetails() {
    // Call the printDetails method of the parent class
    super.printDetails();
    
    // Log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    
    // Log the details of the wheels using the provided getter methods
    const wheelDetails = this.wheels.map(wheel => `${wheel.getDiameter}" ${wheel.getTireBrand}`).join(', ');
    console.log(`Wheels: ${wheelDetails}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
