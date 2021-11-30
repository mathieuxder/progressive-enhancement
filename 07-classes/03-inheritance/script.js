// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal{
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Miaou";
    }

    class Dog extends Animal{
        constructor(name){
            super();   
            this.name = name;
        }
        static greeting = "Woof";
    }

    let chat = new Cat("Patchy");
    let chien = new Dog("Kiki");

    console.log(chat.sayHello());
    console.log(chien.sayHello());

})();
