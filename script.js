function verifyPswd(idOfPassword){
    var psswd = document.getElementById(idOfPassword).value;
    var lg = psswd.length;

    if(lg==0){
        document.getElementById('characters').style.color="red";
    }
    if(lg>0 && lg<=5){
        document.getElementById('characters').style.color="yellow";
    }
    if(lg>7){
        document.getElementById('characters').style.color="green";
    }

    //lowercase letter
    var regw_lowl = new RegExp("[a-z]");
    var lowl = regw_lowl.test(psswd);

    (lowl)? document.getElementById('lletter').style.color="green"
    : document.getElementById('lletter').style.color="red";

    //uppercase letter
    var regw_upl = new RegExp("[A-Z]");
    var upl = regw_upl.test(psswd);

    (upl)? document.getElementById('uletter').style.color="green"
    : document.getElementById('uletter').style.color="red";

    //number
    var regw_nmb = new RegExp("[0-9]");
    var nmb = regw_nmb.test(psswd);

    (nmb)? document.getElementById('number').style.color="green"
    : document.getElementById('number').style.color="red";

    //special character
    var regw_sc = new RegExp("[^A-Za-z0-9]");
    var sc = regw_sc.test(psswd);

    (sc)? document.getElementById('schar').style.color="green"
    : document.getElementById('schar').style.color="red";

    //unblock button to send
    if(lowl==true && upl==true && nmb==true && sc==true){
        document.getElementById('btn').disabled=false;
    }else{
        document.getElementById('btn').disabled=true;
    }
}

