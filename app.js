function toresult(prin,per,time){

    let total=prin*(1+(per/100))**time; 
    return total
}

function displayToresult(total){
    let prin=parseFloat(document.getElementById('prin').value);
    let per=parseFloat(document.getElementById('per').value);
    let time=parseFloat(document.getElementById('time').value);
    let a=toresult(prin,per,time)
    document.getElementById('total').value=a.toFixed(2);

}

function totime(year,month,monthtoyear){
    let total=(year*12+month)/monthtoyear;
    return total;
}


function anstoresult(prin,per,monthtoyear,year,month){
    let x = 12/monthtoyear;
    let r = per/x;
    let t = totime(year,month,monthtoyear);
    document.getElementById('rtotal').innerText=r; // การแสดงผลอยู่ที่ตัวคำนวณ
    document.getElementById('atime').innerText=t;
    let total = prin*(1+r/100)**t;
    return total
}

function tointerest(prin,per,monthtoyear){ // หาดอกเบี้ย
    let total=(per/100)*prin*(monthtoyear/12);
    return total;
}

function displayAnstoresult()
{
    let prin=parseFloat(document.getElementById('aprin').value);
    let per=parseFloat(document.getElementById('aper').value);
    let monthtoyear=parseFloat(document.getElementById('amonthto').value);
    let year=parseFloat(document.getElementById('ayear').value);
    let month=parseFloat(document.getElementById('amonth').value);
    let a = anstoresult(prin,per,monthtoyear,year,month);
    document.getElementById('atotal').value=a.toFixed(2);


    let t = totime(year,month,monthtoyear); //จำนวนครั้งเพื่อวนลูป
    let interset=tointerest(prin,per,monthtoyear);
 


    let outputhtml='';
    let i=0;
    
    
    do{

       
        outputhtml+="ดอกเบี้ย = (("+per+"/100) * "+prin+") * "+monthtoyear+"/12"+"= "+interset+" บาท"+"<br>";
        outputhtml+="เงินรวม = "+prin+" +"+ interset + " = ";
        prin=prin+interset;
        outputhtml+=prin+" บาท"+"<br>"+"<br>";

        interset=(per/100)*prin*(monthtoyear/12);
        i++;
        document.getElementById('output').innerHTML=outputhtml;
        
    }
    while(i<t);


}


