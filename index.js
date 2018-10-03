class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
 
  yearsExperienceFromBeginningOf(date) {
    return this.startDate - date.year;
  }
  approve() {
    return 'You can do that!';
  }
  doCharity() {
    return 'I like to help people.';
  }
  releasePressStatement() {
    return 'You will see great things from Scuber.';
  }
  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}
 
 
class Ceo extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!";
  }
}
