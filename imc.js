/**
 * Created by jaume on 29/11/16.
 */
function mostra(id){
    if (id=='IMC')document.getElementById("IMC").style.display = "block";
    else document.getElementById("IMC").style.display = "none";
    if (id=='FCM')document.getElementById("FCM").style.display = "block";
    else document.getElementById("FCM").style.display = "none";
    if (id=='CAT')document.getElementById("CAT").style.display = "block";
    else document.getElementById("CAT").style.display = "none";
    if (id=='HOR')document.getElementById("HOR").style.display = "block";
    else document.getElementById("HOR").style.display = "none";
    if (id=='PWD')document.getElementById("PWD").style.display = "block";
    else document.getElementById("PWD").style.display = "none";


}


function calculaIMC(){
    var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;
    var resultado;
    if ((altura>99 & altura<261) &(peso>19 &peso<351)) {
        altura = altura / 100;
        resultado = peso / (altura * altura);
        resultado=resultado.toFixed(2);
        switch (true){
            case (resultado<16.00): document.getElementById("escala1").style.color="red";
                break;
            case (resultado<16.99): document.getElementById("escala2").style.color="red";
                break;
            case (resultado<18.49): document.getElementById("escala3").style.color="red";
                break;
            case (resultado<24.99): document.getElementById("escala4").style.color="red";
                break;
            case (resultado<29.99): document.getElementById("escala5").style.color="red";
                break;
            case (resultado<34.99): document.getElementById("escala6").style.color="red";
                break;
            case (resultado<40.00): document.getElementById("escala7").style.color="red";
                break;
            case (resultado>40.00): document.getElementById("escala8").style.color="red";
                break;
        }
        document.getElementById("imc1").innerHTML = "IMC=" + resultado;
        document.getElementById("imcres").style.display = "block";

    }
}
function calculaFCM(){
    var edat=document.getElementById("edad").value;
    var sexe=document.getElementById("sexe").value;
    var resutat;
    if (edat>4 &edat<121){
        if (sexe=="H") resutat=220-edat;
        if (sexe=="M") resutat=226-edat;
        document.getElementById("zona1").innerHTML = "Zona de recuperacio ("+resutat*0.6+"-"+resutat*0.7+")";
        document.getElementById("zona2").innerHTML = "Zona de aeròbica ("+resutat*0.7+"-"+resutat*0.8+")";
        document.getElementById("zona3").innerHTML = "Zona de anaeròbica ("+resutat*0.8+"-"+resutat*0.9+")";
        document.getElementById("zona4").innerHTML = "Línia vermella ("+resutat*0.9+"-"+resutat+")";
        document.getElementById("fcmres").style.display = "block";
    }
}
function calculaCAT(){
    var edat=2017-document.getElementById("any").value;
    var resultat=categoria(edat);
    document.getElementById("catres1").innerHTML = "Categoria: "+resultat;
    document.getElementById("catres").style.display = "block";
}
function categoria(edat){
    var resultat;
    if (edat>0 & edat<117) {
        switch (true) {
            case (edat < 10):
                resultat = "MiniPadawan";
                break;
            case (edat < 14):
                resultat = "Padawan";
                break;
            case (edat < 16):
                resultat = "CasiJedi";
                break;
            case(edat < 65):
                resultat = "Jedi";
                break;
            case (edat > 65):
                resultat = "Yoda";
                break;
        }
        return resultat;
    }
}
function calculaHOR(){
    var thead=["Hores","Dilluns","Dimarts","Dimecres","Dijous","Divendres"];
    document.getElementById('HOR').innerHTML="<h3 class='center-align'>Horari Mati</h3>"
    document.getElementById('HOR').innerHTML+='<table id="mati"></table>'
    document.getElementById('mati').innerHTML='<tr id="diesm"></tr>'
    for (i=0;i<5;i++){
        document.getElementById('diesm').innerHTML+='<th>'+thead[i]+'<th>';
    }
    for (i=9;i<=15;i+=2){
        document.getElementById('mati').innerHTML+='<tr><td>'+i+':00 - '+(i+2)+':00</td><td></td><td></td><td></td><td></td><td></td></tr>';
    }
    document.getElementById('HOR').innerHTML+="<h3 class='center-align'>Horari Tarda</h3>"
    document.getElementById('HOR').innerHTML+='<table id="tarda"></table>'
    document.getElementById('tarda').innerHTML='<tr id="diest"></tr>'
    for (i=0;i<7;i++){
        document.getElementById('diest').innerHTML+='<th>'+thead[i]+'<th>';
    }
    for (i=16;i<=20;i++){
        document.getElementById('tarda').innerHTML+='<tr><td>'+i+':00 - '+(i+1)+':00</td><td></td><td></td><td></td><td></td><td></td></tr>';
    }
}
function calendari(){
    var data=new Date();
    var mes=data.toLocaleString("ca-Es",{month:"long"});

    document.getElementById("Cany").innerHTML=data.getFullYear().toString();
    document.getElementById("Cdia").innerHTML=data.getDate().toString();
    document.getElementById("Cmes").innerHTML=mes;


}
function comprovaPWD() {
    var pwd=document.getElementById("contrasenya").value.toString();
    var resultat=true;
    switch (true){
        case (pwd.length<8 || pwd.length>16): resultat=false; alert("1");
            break;
        case (!teMayus(pwd)): resultat=false; alert("2");
            break;
        case (!teMinus(pwd)): resultat=false; alert("3");
            break;
        case (!teNombre(pwd)): resultat=false; alert("4");
            break;
        case (!noEspecial(pwd)): resultat=false; alert("5");
    }
    if (!resultat) document.getElementById("resultat").innerHTML='<p class="center">La contrasenya es una merda, posa minuscules, mayuscules, nombres i caracters especials</p>';
    else document.getElementById("resultat").innerHTML='<h3>Contrasenya segura</h3>';
    document.getElementById("resultat").style.display = "block";

}
function teMayus(pwd) {
    for(i=0;i<pwd.length;i++){
        if(pwd.charAt(i)==pwd.charAt(i).toUpperCase()){
            return true;
        }
    }
    return false;

}
function teMinus(pwd) {
    for(i=0;i<pwd.length;i++){
        if(pwd.charAt(i)==pwd.charAt(i).toLowerCase()){
            return true;
        }
    }
    return false;
}
function teNombre(pwd) {
    for(i=0;i<pwd.length;i++){
        if(pwd.charAt(i)=="0" || pwd.charAt(i)=="1" || pwd.charAt(i)=="2" || pwd.charAt(i)=="3" || pwd.charAt(i)=="4" || pwd.charAt(i)=="5" || pwd.charAt(i)=="6" || pwd.charAt(i)=="7" || pwd.charAt(i)=="8" ||pwd.charAt(i)=="9" ){
            return true;
        }
    }
    return false;
}
function noEspecial(pwd) {
    var retorn=false;
    switch (true){
        case (pwd.search("-")>0): return true;
            break;
        case (pwd.search("_")>0): return true;
            break;
        case (pwd.search("@")>0): return true;
            break;
        case (pwd.search("#")>0): return true;
            break;
        case (pwd.search("$")>0): return true;
            break;
        case (pwd.search("%")>0): return true;
            break;
        case (pwd.search("&")>0): return true;
            break;
    }
    return false;

}
var users=[];
function User(id,dni,nombre,apellidos,nac,loc){
    this.id=id;
    this.dni=dni;
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.nac=nac;
    this.loc=loc;
    this.cat=categoria((2017-+nac));
}
User.prototype.alta=function(){
    users.push(this);
};
function buscarId(id){
    users.forEach(function (user) {
        if (user.id==id) return user;
        else return "sin resultados";
    });
}
function buscarDNI(dni){
    users.forEach(function (user) {
        if (user.dni==dni) return user;
        else return "sin resultados";
    });
}
function buscarNom(nombreC){
    users.forEach(function (user) {
        if ((user.nombre+" "+user.apellidos)==nombreC) return user;
        else return "sin resultados";
    });
}
function buscarCat(cat) {
    users.forEach(function (user) {
        if (user.cat==cat) return user;
        else return "sin resultados";
    });
}
function buscarLoc(loc) {
    var res=[];
    users.forEach(function (user) {
        if (user.loc==loc) res.push(user);
    });
    if (res.length>0) return res;
    else return "sin resultados";
}
function displayUsers(array){
    var res="";
    array.forEach(function (user) {
        res+="<tr>";
        res+="<td>"+user.id+"</td>";
        res+="<td>"+user.dni+"</td>";
        res+="<td>"+user.nombre+"</td>";
        res+="<td>"+user.apellidos+"</td>";
        res+="<td>"+user.nac+"</td>";
        res+="<td>"+user.loc+"</td>";
        res+="<td>"+user.cat+"</td></tr>";


    });
    document.getElementById("tusers").innerHTML=res;

}
function introUser(){
    var string=prompt("Introduce un nuevo usuario con el siguiente formato:\n" +
        "id,dni,nombre,apellidos,añoNacimiento,localidad");
    string=string.split(",");
    users.push(new User(string[0],string[1],string[2],string[3],string[4],string[5],string[6]));
    displayUsers(users);
}
function defaultUsers(){
    users.push(new User(1,222,"Mengano","Fulano","1991","mao"));
    users.push(new User(2,333,"Paco","Porras","1981","mao"));
    users.push(new User(3,444,"ElTio","La Vara","1999","mao"));
}