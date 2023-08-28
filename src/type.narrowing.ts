// Define an enum to represent the types of animals
enum AnimalType {
    Wild = 'wild',
    Domestic = 'domestic',
  }
  
  // Define the base Animal interface
  interface Animal {
    type: AnimalType; // Use the AnimalType enum for the 'type' property
    name: string;
  }
  
  // Define the WildAnimal interface that extends Animal
  interface WildAnimal extends Animal {
    type: AnimalType.Wild; // Explicitly set the 'type' to Wild
    habitat: string;
  }
  
  // Define the DomesticAnimal interface that extends Animal
  interface DomesticAnimal extends Animal {
    type: AnimalType.Domestic; // Explicitly set the 'type' to Domestic
    owner: string;
  }
  
  // Function to describe an animal based on its type
  function describeAnimal(animal: Animal) {
    switch (animal.type) {
      case AnimalType.Wild:
        const wildAnimal = animal as WildAnimal;
        console.log(`${wildAnimal.name} is a fascinating wild creature found in the natural habitats of the United Kingdom.`);
        break;
      case AnimalType.Domestic:
        const domesticAnimal = animal as DomesticAnimal;
        console.log(`${domesticAnimal.name} is a beloved pet that resides with ${domesticAnimal.owner} in the United Kingdom.`);
        break;
      default:
        console.log(`Unknown animal type.`);
        break;
    }
  }
  
  // Example of a wild animal
  const redFox: WildAnimal = {
    type: AnimalType.Wild,
    name: 'Red Fox',
    habitat: 'forests and urban areas',
  };
  
  // Example of a domestic animal
  const labrador: DomesticAnimal = {
    type: AnimalType.Domestic,
    name: 'Labrador Retriever',
    owner: 'Kai',
  };
  
  // Describe the animals
  // Output: Red Fox is a fascinating wild creature found in the natural habitats of the United Kingdom.
  describeAnimal(redFox);
  // Output: Labrador Retriever is a beloved pet that resides with Kai in the United Kingdom.
  describeAnimal(labrador);
  