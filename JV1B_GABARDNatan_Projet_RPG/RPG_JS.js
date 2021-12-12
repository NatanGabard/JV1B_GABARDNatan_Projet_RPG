const btnA = document.getElementById("btn-attaque");
const btnD = document.getElementById("btn-defense");
const btnASp = document.getElementById("btn-attaqueSpe");
const btnFDT = document.getElementById("btn-findetour");
const HUDcombat = document.getElementById("HUD");
const AtSpéInfo = document.getElementById("AtSpéInfo");


const PVVaisseauV = document.getElementById("PVVaisseau1");
const PVVaisseauB = document.getElementById("PVVaisseau2");
const PVVaisseauR = document.getElementById("PVVaisseau3");
const PVVaisseauJ = document.getElementById("PVVaisseau4");

const PVEnemieH = document.getElementById("PVEnemie1");
const PVEnemieM = document.getElementById("PVEnemie2");
const PVEnemieB = document.getElementById("PVEnemie3");

const VaisseauV = document.getElementById("perso1");
const VaisseauB = document.getElementById("perso2");
const VaisseauR = document.getElementById("perso3");
const VaisseauJ = document.getElementById("perso4");

const ManaV = document.getElementById("ManaVaisseau1");
const ManaB = document.getElementById("ManaVaisseau2");
const ManaR = document.getElementById("ManaVaisseau3");
const ManaJ = document.getElementById("ManaVaisseau4");

const EnemieH = document.getElementById("enemie1");
const EnemieM = document.getElementById("enemie2");
const EnemieB = document.getElementById("enemie3");

//----------------------------------------Let----------------------------------------------------------------------------------------------------

let VaisseauChoisi = false

let EnemiHChoisi = false
let EnemiMChoisi = false
let EnemiBChoisi = false

let actionVV = true
let actionVB = true
let actionVR = true
let actionVJ = true

let ProtectionVV = false
let ProtectionVB = false
let ProtectionVR = false
let ProtectionVJ = false

let paralyséH = false
let paralyséM = false
let paralyséB = false

alert("déroulement d'un tour :                                                                           1/choix du vaisseau                                                                 2/choix de l'énemie                                                                                  3/choix de l'attaque")

//------------------------------------surbrillance énemies-------------------------------------------------------------------------------------------

    EnemieH.onclick=function (){if (VaisseauChoisi === true && PVEnemieH.innerHTML > 0) {
        EnemieH.style.border = "5px dashed red"
        EnemieM.style.border = ""
        EnemieB.style.border = ""
        EnemiHChoisi = true
        EnemiMChoisi = false
        EnemiBChoisi = false
    }}
    EnemieM.onclick=function (){if (VaisseauChoisi === true && PVEnemieM.innerHTML > 0) {
        EnemieM.style.border = "5px dashed red"
        EnemieH.style.border = ""
        EnemieB.style.border = ""
        EnemiMChoisi = true
        EnemiHChoisi = false
        EnemiBChoisi = false
    }}
    EnemieB.onclick=function (){if (VaisseauChoisi === true && PVEnemieB.innerHTML > 0) {
        EnemieB.style.border = "5px dashed red"
        EnemieM.style.border = ""
        EnemieH.style.border = ""
        EnemiBChoisi = true
        EnemiMChoisi = false
        EnemiHChoisi = false
    }}

    //-----------------------------------attaque spé  paralyser---------------------------------------------------------------------------------------------------------
    
    btnASp.onclick=function () {
        if (EnemiHChoisi === true || EnemiMChoisi === true || EnemiBChoisi === true){
            if (HUDcombat.style.backgroundColor == "rgb(0, 168, 8)" && ManaV.innerHTML >= 3 ){   
                paralyséH = false
                paralyséM = false
                paralyséB = false
                ManaV.textContent -= 3 
                if(EnemiHChoisi === true){
                    alert("Enemie 1 ne peut pas attaqué")
                    paralyséH = true
                }
                if(EnemiMChoisi === true){
                    alert("Enemie 2 ne peut pas attaqué")
                    paralyséM = true
                }
                if(EnemiBChoisi === true){
                    alert("Enemie 3 ne peut pas attaqué")
                    paralyséB = true
                }
                HUDcombat.style.opacity = " 0 " ;
                HUDcombat.style.visibility = "hidden" ;
                actionVV = false;}}
    //-----------------------------------attaque spé  laser---------------------------------------------------------------------------------------------------------
        {if (HUDcombat.style.backgroundColor == "rgb(0, 0, 156)" && ManaB.innerHTML >= 3 ){
            alert("Laser envoyé par Vaisseau Bleu")
            ManaV.textContent -= 3 
            if(EnemiHChoisi === true){
                PVEnemieH.textContent -= 10
            }
            if(EnemiMChoisi === true){
                PVEnemieM.textContent -= 10
            }
            if(EnemiBChoisi === true){
                PVEnemieB.textContent -= 10
            }
            HUDcombat.style.opacity = " 0 " ;
            HUDcombat.style.visibility = "hidden" ;
            actionVB = false;}}
    
    //-----------------------------------attaque spé  zone--------------------------------------------------------------------------------------------------------
        {if (HUDcombat.style.backgroundColor == "rgb(179, 0, 0)" && ManaR.innerHTML >= 3 ){
            alert("attaque de zone par Vaisseau Rouge")
            PVEnemieH.textContent -= 5 ;
            PVEnemieM.textContent -= 5 ;
            PVEnemieB.textContent -= 5 ;
            ManaR.textContent -= 3 ;
            HUDcombat.style.opacity = " 0 " ;
            HUDcombat.style.visibility = "hidden" ;
            actionVR = false;
    }}

 //-----------------------------------attaque spé Soin -------------------------------------------------------------------------------------------------------
    {if (HUDcombat.style.backgroundColor == "rgb(191, 194, 0)" && ManaJ.innerHTML >= 3 ){
        alert("Vaisseau Jaune se soigne")
        PVVaisseauJ.innerHTML += 10 ; //(marche pas)
        ManaR.textContent -= 3 ;
        HUDcombat.style.opacity = " 0 " ;
        HUDcombat.style.visibility = "hidden" ;
        actionVJ = false;

}}}

 
//-------------------------------------Attaque----et----mort énemie------------------------------------------------------------------------------------------

    btnA.onclick=function () 
    {if (PVEnemieH.innerHTML > 0 && EnemiHChoisi === true){
        PVEnemieH.textContent -= 5
        if (HUDcombat.style.backgroundColor == "rgb(0, 168, 8)"){
            actionVV = false}
        if (HUDcombat.style.backgroundColor == "rgb(0, 0, 156)"){
            actionVB = false}
        if (HUDcombat.style.backgroundColor == "rgb(179, 0, 0)"){
            actionVR = false}
        if (HUDcombat.style.backgroundColor == "rgb(191, 194, 0)"){
            actionVJ = false}
        HUDcombat.style.opacity = " 0 " ;
        HUDcombat.style.visibility = "hidden" ;
        if (PVEnemieH.innerHTML == 0){
            EnemieH.src = "spacebase1Mort.png";
        }
    }else if (PVEnemieM.innerHTML > 0 && EnemiMChoisi === true){
        PVEnemieM.textContent -= 5 
        if (HUDcombat.style.backgroundColor == "rgb(0, 168, 8)"){
            actionVV = false}
        if (HUDcombat.style.backgroundColor == "rgb(0, 0, 156)"){
            actionVB = false}
        if (HUDcombat.style.backgroundColor == "rgb(179, 0, 0)"){
            actionVR = false}
        if (HUDcombat.style.backgroundColor == "rgb(191, 194, 0)"){
            actionVJ = false}
        HUDcombat.style.opacity = " 0 " ;
        HUDcombat.style.visibility = "hidden" ;
        if (PVEnemieM.innerHTML == 0){
            EnemieM.src = "spacebase1Mort.png";
        }
    }else if (PVEnemieB.innerHTML > 0 && EnemiBChoisi === true){
        PVEnemieB.textContent -= 5 
        if (HUDcombat.style.backgroundColor == "rgb(0, 168, 8)"){
            actionVV = false}
        if (HUDcombat.style.backgroundColor == "rgb(0, 0, 156)"){
            actionVB = false}
        if (HUDcombat.style.backgroundColor == "rgb(179, 0, 0)"){
            actionVR = false}
        if (HUDcombat.style.backgroundColor == "rgb(191, 194, 0)"){
            actionVJ = false}
        HUDcombat.style.opacity = " 0 " ;
        HUDcombat.style.visibility = "hidden" ;
        if (PVEnemieB.innerHTML == 0){
            EnemieB.src = "spacebase1Mort.png";
        }
    }}

//---------------------------------------defense-----------------------------------------------------

btnD.onclick=function () {
    if (HUDcombat.style.backgroundColor == "rgb(0, 168, 8)"){
        actionVV = false ;
        ProtectionVV = true }
    if (HUDcombat.style.backgroundColor == "rgb(0, 0, 156)"){
        actionVB = false;
        ProtectionVB = true }
    if (HUDcombat.style.backgroundColor == "rgb(179, 0, 0)"){
        actionVR = false;
        ProtectionVR = true }
    if (HUDcombat.style.backgroundColor == "rgb(191, 194, 0)"){
        actionVJ = false;
        ProtectionVJ = true }
    HUDcombat.style.opacity = " 0 " ;
    HUDcombat.style.visibility = "hidden" ;
}


//--------------------------------------apparition HUD--------------------------------------------------------------------------------------------

    VaisseauV.onclick=function (){if (actionVV !== false){
        HUDcombat.style.opacity = " 1 " ;
        HUDcombat.style.visibility = "visible" ;
        HUDcombat.style.backgroundColor = "rgb(0, 168, 8)"
        btnASp.textContent = "Missile IEM"
        AtSpéInfo.textContent = "L'ennemi ne peux pas attaquer au tour suivant"

        VaisseauChoisi=true
    }}
    VaisseauB.onclick=function (){if (actionVB !== false){
        HUDcombat.style.opacity = " 1 " ;
        HUDcombat.style.visibility = "visible" ;
        HUDcombat.style.backgroundColor = "rgb(0, 0, 156)"
        btnASp.textContent = "Laser"
        AtSpéInfo.textContent = "10 de dégats a l'ennemi choisi"

        VaisseauChoisi=true
    }}
    VaisseauR.onclick=function (){if (actionVR !== false){
        HUDcombat.style.opacity = " 1 " ;
        HUDcombat.style.visibility = "visible" ;
        HUDcombat.style.backgroundColor = "rgb(179, 0, 0)"
        btnASp.textContent = "Champs de mine"
        AtSpéInfo.textContent = "5 de degats a tout les ennemis"

        VaisseauChoisi=true
    }}
    VaisseauJ.onclick=function (){if (actionVJ !== false){
        HUDcombat.style.opacity = " 1 " ;
        HUDcombat.style.visibility = "visible" ;
        HUDcombat.style.backgroundColor = "rgb(191, 194, 0)"
        btnASp.textContent = "Reparation"
        AtSpéInfo.textContent = "Le Vaisseau Jaune se soigne de 20 PV"

        VaisseauChoisi=true
    }}

//---------------------------------riposte------------------------------------------------------------------------------------------------------

    btnFDT.onclick=function (){if (actionVV === false && actionVB === false && actionVR === false && actionVJ === false){
            if (PVEnemieH.innerHTML > 0 && paralyséH === false){
                random = Math.floor(Math.random() * 4) + 1;
                alert(random);
                if (random === 1 && PVVaisseauV.innerHTML != 0 && ProtectionVV != true){
                    PVVaisseauV.textContent -= 5
                }
                if (random === 2 && PVVaisseauB.innerHTML != 0 && ProtectionVB != true){
                    PVVaisseauB.textContent -= 5
                }
                if (random === 3 && PVVaisseauR.innerHTML != 0 && ProtectionVR != true){
                    PVVaisseauR.textContent -= 5
                }
                if (random === 4 && PVVaisseauJ.innerHTML != 0 && ProtectionVJ != true){
                    PVVaisseauJ.textContent -= 5
                }}
            if (PVEnemieM.innerHTML > 0 && paralyséM === false){
                random = Math.floor(Math.random() * 4) + 1;
                alert(random);
                if (random === 1 && PVVaisseauV.innerHTML != 0 && ProtectionVV != true){
                    PVVaisseauV.textContent -= 5
                }
                if (random === 2 && PVVaisseauB.innerHTML != 0 && ProtectionVB != true){
                    PVVaisseauB.textContent -= 5
                }
                if (random === 3 && PVVaisseauR.innerHTML != 0 && ProtectionVR != true){
                    PVVaisseauR.textContent -= 5
                }
                if (random === 4 && PVVaisseauJ.innerHTML != 0 && ProtectionVJ != true){
                    PVVaisseauJ.textContent -= 5
                }}
            if (PVEnemieB.innerHTML > 0 && paralyséB === false){
                random = Math.floor(Math.random() * 4) + 1;
                alert(random );
                if (random === 1 && PVVaisseauV.innerHTML != 0 && ProtectionVV != true){
                    PVVaisseauV.textContent -= 5
                }
                if (random === 2 && PVVaisseauB.innerHTML != 0 && ProtectionVB != true){
                    PVVaisseauB.textContent -= 5
                }
                if (random === 3 && PVVaisseauR.innerHTML != 0 && ProtectionVR != true){
                    PVVaisseauR.textContent -= 5
                }
                if (random === 4 && PVVaisseauJ.innerHTML != 0 && ProtectionVJ != true){
                    PVVaisseauJ.textContent -= 5
                }}

            paralyséH = false
            paralyséM = false
            paralyséB = false
               
            //----------------------------------mort Vaisseau -----------------------------------------------------------------------------------------------------

            if (PVVaisseauV.textContent == 0){
                VaisseauV.style.visibility = "hidden" ;
                PVVaisseauV.style.visibility = "hidden" ;
            }else{
                actionVV = true
            }
            if (PVVaisseauB.textContent == 0){
                VaisseauB.style.visibility = "hidden" ;
                PVVaisseauB.style.visibility = "hidden" ;
            }else{
                actionVB = true
            }
            if (PVVaisseauR.textContent == 0){
                VaisseauR.style.visibility = "hidden" ;
                PVVaisseauR.style.visibility = "hidden" ;
            }else{
                actionVR = true
            }
            if (PVVaisseauJ.textContent == 0){
                VaisseauJ.style.visibility = "hidden" ;
                PVVaisseauJ.style.visibility = "hidden" ;
            }else{
                actionVJ = true
            }

            //-----------------------------------victoire-----------------------------------------------------------------------------------------------

            if (PVEnemieH.innerHTML == 0 && PVEnemieM.innerHTML == 0 && PVEnemieB.innerHTML == 0){
                alert("GG tu as gagner")
            }

            //-----------------------------------défaite---------------------------------------------------------------------------------------------------------

            if (PVVaisseauV.innerHTML == 0 && PVVaisseauB.innerHTML == 0 && PVVaisseauR.innerHTML == 0 && PVVaisseauJ.innerHTML == 0){
                alert("Tu as perdu")
            }
            }}


