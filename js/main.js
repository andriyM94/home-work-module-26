// Створити телефонну книгу

// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  setDate(date){
    this.name = date.name;
    this.phone = date.phone;
  }

  getDate() {
    return `Name - ${this.name}, phone - ${this.phone}.`
  }

  // додаткові сетери для зміни окремо імені або телефону
  setName(name){
    this.name = name;
  }

  setPhone(phone){
    this.phone = phone;
  }
}

let ivan = new Abonent; 
ivan.setDate({name: 'Ivan', phone: '+380631231212'});
console.log(ivan.getDate());
ivan.setPhone('+380993213232')
console.log('Changed phone:', ivan.getDate() );

let olga = new Abonent;
olga.setDate({name: 'Olga', phone: '+380634564545'});
console.log(olga.getDate());
ivan.setName('Olya')
console.log('Changed name:', ivan.getDate());

let anna = new Abonent; 
anna.setDate({name: 'Anna', phone: '+380637897878'});
console.log(anna.getDate());