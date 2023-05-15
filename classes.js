class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    // Method
    walking() {
        return "Mansi is walking. Patli hona hai takli ko";
    }
}

const mansi = new Animal("Mansi", (breed = "koala"));

console.log(mansi.walking());
