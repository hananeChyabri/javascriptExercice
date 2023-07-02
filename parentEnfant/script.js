const childs = document.getElementById("childs");
let btn_add_child=document.getElementById("addChild"); 
let compteur = 2;
btn_add_child.addEventListener('click',addChild);

function addChild(event)
{
 
    event.preventDefault();

    //fieldset

    const fieldsetElm = document.createElement('fieldset');
    const legendElm = document.createElement('legend');
    legendElm.innerHTML = "Enfant "+compteur;
    compteur++;
    //form
    const formChild = document.createElement('form');

    /* div  label et input de nom */
    
    const divInputName = document.createElement('div');
    const labelName = document.createElement('label');
    labelName.innerHTML = "Nom";
    const inputName = document.createElement('input');

    /* div label et input de prenom*/
    
    let divInputPrenom = document.createElement('div');
    const labelprenom = document.createElement('label');
    labelprenom.innerHTML = "Prenom";
    const inputPrenom = document.createElement('input');


    /* div label et input date de naissance */

    const divDateNaissance = document.createElement('div');
    const labelDateNaissance = document.createElement('label');
    labelDateNaissance.innerHTML = "Date de naissance";
    const inputdateNaissance = document.createElement('input');
    inputdateNaissance.setAttribute("type", "date");


   

    



   /*ajouter div label et input au formulaire*/
    divInputName.appendChild(labelName);
    divInputName.appendChild(inputName);
    formChild.appendChild(divInputName);


     /*ajouter div label et input au formulaire*/
    divInputPrenom.appendChild(labelprenom);
    divInputPrenom.appendChild(inputPrenom);
    formChild.appendChild(divInputPrenom)

    /*ajouter div label et input au formulaire*/
    divDateNaissance.appendChild(labelDateNaissance);
    divDateNaissance.appendChild(inputdateNaissance);
    formChild.appendChild(divDateNaissance)

    /*ajouter les buttons au form*/


    childs.appendChild(fieldsetElm);
    fieldsetElm.appendChild(legendElm);


    fieldsetElm.appendChild(formChild);





}