//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

        sayHello(){
            return "Hello, " + this.firstname + " " + this.lastname;
        }
    }

    let jean = new Person('Jean', 'Dupont');

    console.log(jean);
    console.log(jean.sayHello());
})();
