function Verification(event) {

    var monNom = document.getElementById("nom").value;
    var monPrenom = document.getElementById("prenom").value;
    var maDate = document.getElementById("date").value;
    var monCPostal = document.getElementById("cpostal").value;
    var monEmail = document.getElementById("email").value;

    var monSujet = document.getElementById("sujet").value;
    var maQuestion = document.getElementById("question").value;
    var monAcceptation = document.getElementById("acceptation").checked;


    var RegLettres = new RegExp("^[a-zA-Z]+$");
    var RegNum = new RegExp("^[0-9]{5}$");
    var RegMail = new RegExp("([_A-Za-z0-9-]+)(\.[_A-Za-z0-9-]+)@([A-Za-z0-9]+)(\.[A-Za-z0-9]+)");



    if (monNom == "") {
        var t1 = document.getElementById("f1");
        t1.setAttribute("style","color:red");
        t1.textContent = "Veuillez renseigner votre nom *"
        event.preventDefault();
        
    } else if (!RegLettres.test(monNom)) {
        var t1 = document.getElementById("f1");
        t1.setAttribute("style","color:red");
        t1.textContent = "Veuillez renseigner correctement votre nom *"
        event.preventDefault();
        
    } else {
        var t1 = document.getElementById("f1");
        t1.textContent = ""
    }


    if (monPrenom == "") {
        var t2 = document.getElementById("f2");
        t2.setAttribute("style","color:red");
        t2.textContent = "Veuillez renseigner votre prénom *"
        event.preventDefault();
        
    } else if (!RegLettres.test(monPrenom)) {
        var t2 = document.getElementById("f2");
        t2.setAttribute("style","color:red");
        t2.textContent = "Veuillez renseigner correctement votre prénom *"
        event.preventDefault();
        
    } else {
        var t2 = document.getElementById("f2");
        t2.textContent = ""
    }


    if (document.getElementById("sexe1").checked || document.getElementById("sexe2").checked) {
        var t3 = document.getElementById("f3");
        t3.textContent = ""

    } else {
        var t3 = document.getElementById("f3");
        t3.setAttribute("style","color:red");
        t3.textContent = "Veuillez renseigner votre sexe *"
        event.preventDefault();
    }


    if (maDate == "") {
        var t4 = document.getElementById("f4");
        t4.setAttribute("style","color:red");
        t4.textContent = "Veuillez renseigner votre date de naissance *"
        event.preventDefault();

    } else {
        var t4 = document.getElementById("f4");
        t4.textContent = ""
    }


    if (monCPostal == "") {
        var t5 = document.getElementById("f5");
        t5.setAttribute("style","color:red");
        t5.textContent = "Veuillez renseigner votre code postal *"
        event.preventDefault();
        
    } else if (!RegNum.test(monCPostal)) {
        var t5 = document.getElementById("f5");
        t5.setAttribute("style","color:red");
        t5.textContent = "Veuillez renseigner correctement votre code postal *"
        event.preventDefault();
        
    } else {
        var t5 = document.getElementById("f5");
        t5.textContent = ""
    }

    
    if (monEmail == "") {
        var t8 = document.getElementById("f8");
        t8.setAttribute("style","color:red");
        t8.textContent = "Veuillez renseigner votre email *"
        event.preventDefault();
        
    } else if (!RegMail.test(monEmail)) {
        var t8 = document.getElementById("f8");
        t8.setAttribute("style","color:red");
        t8.textContent = "Veuillez renseigner correctement votre email *"
        event.preventDefault();
        
    } else {
        var t8 = document.getElementById("f8");
        t8.textContent = ""
    }


    if (monSujet == "") {
        var t9 = document.getElementById("f9");
        t9.setAttribute("style","color:red");
        t9.textContent = "Veuillez sélectionner un sujet *"
        event.preventDefault();

    } else {
        var t9 = document.getElementById("f9");
        t9.textContent = ""
    }


    if (maQuestion == "") {
        var t10 = document.getElementById("f10");
        t10.setAttribute("style","color:red");
        t10.textContent = "Veuillez indiquer votre question *"
        event.preventDefault();
        
    } else {
        var t10 = document.getElementById("f10");
        t10.textContent = ""
    }


    if (monAcceptation == "") {
        var t11 = document.getElementById("f11");
        t11.setAttribute("style","color:red");
        t11.textContent = "Veuillez cocher la case pour accepter le traitement informatique du formulaire *"
        event.preventDefault();

    } else {
        var t11 = document.getElementById("f11");
        t11.textContent = ""
    }

    if (t1.textContent + t2.textContent + t3.textContent + t4.textContent + t5.textContent + t8.textContent + t9.textContent + t10.textContent + t11.textContent == "") {
        alert("Le formulaire est envoyé !");
    }
}

document.getElementById("formulaire").addEventListener("submit", Verification);

