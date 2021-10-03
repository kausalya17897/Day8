class Movie{
    //a,b
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    //c
    getPG(movies){
        if(this.rating=="PG"){
           return this.title;
        }
        
    }
}
const Harry_Potter=new Movie("Harry Potter","Warner Bros","PG");
const Finding_Nemo=new Movie("Finding nemo","Pixar Animation Studios")
const Narnia=new Movie("Narnia","Walt Disney Pictures","PG")
const Finding_Dory=new Movie("Finding Dory","Warner Bros","PG")
//d
const Casino_Royale=new Movie("Casino Royale","Eon Productions","PG­13")
let movies=[]
movies.push(Harry_Potter)
movies.push(Finding_Nemo)
movies.push(Narnia)
console.log(movies)
//c
//c
console.log(movies.filter((a)=>a.rating=="PG").map((a)=>a.title))
console.log(Harry_Potter.getPG(movies))