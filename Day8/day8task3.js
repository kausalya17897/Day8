class person{
    constructor(name,gender,dateofbirth,age,bloodgroup,city,country){
        this.name=name;
        this.gender=gender;
        this.dateofbirth=dateofbirth;
        this.age=age;
        this.bloodgroup=bloodgroup;
        this.city=city;
        this.country=country;
    }
}
let details=new person("akshai","female","12-08-97",24,"o+","chennai","India");
console.log(details)