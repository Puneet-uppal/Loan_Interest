let emi=0;
let interest=0;
function result(){
    let amount=document.getElementById("amount");
    let year=document.getElementById("tenure");
    let bank=document.getElementById("bank");
    let category=document.getElementById("for");
    let rate=document.getElementById("emi");
    let btn=document.getElementById("btn");
    console.log((bank.value).toLowerCase());
    console.log((category.value).toLowerCase());
    if((bank.value).toLowerCase()==="hdfc"){
        interest=10.5;
        if((category.value).toLowerCase()==="car"){
            interest+=2.1;
        }
        else if((category.value).toLowerCase()==="gold"){
            interest+=4.2;
        }
        else if((category.value).toLowerCase()==="personal"){
            interest+=6.3;
        }
        else if((category.value).toLowerCase()==="home"){
            interest+=8.4;
        }
        else if((category.value).toLowerCase()==="education"){
            interest+=10.5;
        } 
    }
    else if((bank.value).toLowerCase()==="axis"){
        interest=10.49;
        if((category.value).toLowerCase()==="car"){
            interest+=2.3;
        }
        else if((category.value).toLowerCase()==="gold"){
            interest+=4.6;
        }
        else if((category.value).toLowerCase()==="personal"){
            interest+=6.9;
        }
        else if((category.value).toLowerCase()==="home"){
            interest+=9.2;
        }
        else if((category.value).toLowerCase()==="education"){
            interest+=11.5;
        }
    }
    else if((bank.value).toLowerCase()==="icici"){
        interest=10.7;
        if((category.value).toLowerCase()==="car"){
            interest+=1.66;
        }
        else if((category.value).toLowerCase()==="gold"){
            interest+=3.32;
        }
        else if((category.value).toLowerCase()==="personal"){
            interest+=4.98;
        }
        else if((category.value).toLowerCase()==="home"){
            interest+=6.64;
        }
        else if((category.value).toLowerCase()==="education"){
            interest+=8.3;
        }
    }
    else if((bank.value).toLowerCase()==="yes"){
        interest=10.99;
        if((category.value).toLowerCase()==="car"){
            interest+=1.8;
        }
        else if((category.value).toLowerCase()==="gold"){
            interest+=3.6;
        }
        else if((category.value).toLowerCase()==="personal"){
            interest+=5.4;
        }
        else if((category.value).toLowerCase()==="home"){
            interest+=7.2;
        }
        else if((category.value).toLowerCase()==="education"){
            interest+=9;
        }
    }
    emi=((interest/100)*amount.value)/(year.value*12) + (amount.value/year.value)/12;
    console.log(emi);
    rate.innerHTML="Your Monthly EMI:"+emi+"P.M at the interest rate of "+interest+"%p.a.";
    btn.style.display="none";
}