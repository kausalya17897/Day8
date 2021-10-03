class uberPrice{
constructor(pickup,endpoint,totaldistance,pricepkm){
    this.pickup=pickup;
    this.endpoint=endpoint;
    this.totaldistance=totaldistance;
    this.pricepkm=pricepkm;
}
fare(){
    return (this.totaldistance*this.pricepkm);
}
}
const trip1=new uberPrice("t-nagar","vellachery",40,10);
console.log(trip1.fare())