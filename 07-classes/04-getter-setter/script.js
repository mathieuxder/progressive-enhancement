// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        class Person{
            constructor(firstname, lastname){
                this.firstname = firstname;
                this.lastname = lastname;
            }

            get name(){
                return this.firstname + " " + this.lastname;
            }

            set name(value){
                let nom = value.toString().split(' ');
                this.firstname = nom[0];
                this.lastname = nom[1];
            }
        }


        let person = new Person('Simon', 'Duquaine');
        console.log(person);
        person.name = 'Vincent Lagaffe';
        console.log(person);
    })
})();
