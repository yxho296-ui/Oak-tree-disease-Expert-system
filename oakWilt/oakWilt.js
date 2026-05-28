let btnShow= document.querySelector('#button1');
let result = document.querySelector('#output');
let liveOak=[];
let whiteOak=[];
let redOak=[];
let selected='';
btnShow.addEventListener('click',type);


//display why for live oak
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickText').addEventListener('click', function() {
        const cY = document.getElementById('canopyYellowingText');
        cY.classList.toggle('visible');
    });
    document.getElementById('clickText2').addEventListener('click', function() {
        const lV = document.getElementById('leafVeinDisordersText');
        lV.classList.toggle('visible');
    });
    document.getElementById('clickText3').addEventListener('click', function() {
        const tT = document.getElementById('tuftingText');
        tT.classList.toggle('visible');
    });
    document.getElementById('clickText4').addEventListener('click', function() {
        const discol = document.getElementById('discolorationText');
        discol.classList.toggle('visible');
    });
});

//display why for red oak
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and input elements
    document.getElementById("why-vein-discoloration").addEventListener('click',function() {
        const whyBtn1 = document.getElementById("vein-discoloration");
        whyBtn1.classList.toggle('visible');
    });

    document.getElementById("why2").addEventListener('click',function(){
        const whyBtn2 = document.getElementById("necrosis");
        whyBtn2.classList.toggle('visible');
    });

    document.getElementById("why3").addEventListener('click',function(){
        const whyBtn2 = document.getElementById("fungal");
        whyBtn2.classList.toggle('visible');
    });
    
    document.getElementById("why4").addEventListener('click',function(){
        const whyBtn2 = document.getElementById("defoliation");
        whyBtn2.classList.toggle('visible');
    });
})

//display why for white oak
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and input elements
    document.getElementById("why-foliar").addEventListener('click',function() {
        const whyBtn1 = document.getElementById("foliar");
        whyBtn1.classList.toggle('visible');
    });

    document.getElementById("why-abscission").addEventListener('click',function(){
        const whyBtn2 = document.getElementById("show-abscission");
        whyBtn2.classList.toggle('visible');
    });

    document.getElementById("why-anomalous").addEventListener('click',function(){
        const whyBtn2 = document.getElementById("show-anomalous");
        whyBtn2.classList.toggle('visible');
    });

})

function type(){
    selected = document.querySelector('input[type="radio"]:checked');    
    btnShow.removeEventListener('click',type);
    
    let radioButtons = document.querySelectorAll('input[type="radio"][name="type"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.disabled = true;
    });

    if(selected.value=='no'){
        showPicture();
    }else {
        displayQuestion(selected.value);
    }
    
}

function showPicture(){
    document.getElementById('type').style.display="block";
    btnShow.onclick=function() {
        selected = document.querySelector('#type input[type="radio"]:checked');
        if(selected){
            let radioButtons = document.querySelectorAll('input[type="radio"][name="oakType"]');
            radioButtons.forEach(function(radioButton) {
            radioButton.disabled = true;
        });
            displayQuestion(selected.value);
        }else{
            alert('no option was selected');
        }
    };
}

function displayQuestion(value) {
    switch (value) {
        case 'redOak':
            redOakQuestion();
            break;
        case 'whiteOak':
            whiteOakQuestion();
            break;
        case 'liveOak':
            liveOakQuestion();
            break;
        default:
            alert("Invalid option selected.");
    }
}

//knowledge base
const whiteOakSymptoms = {
    "foliar discoloration": ['leaves turn drab green','yellowing of leaves occurs along the vein','discoloration'],  
    "discoloration":["leaves remain attached with discoloration only at margins"],
    "abscission":["fallen leaves accumulate on ground","rapid leaf drop"],
    "rapid leaf drop":["rapid leaves drop from one to few branches at a time during summer"],
    "anomalous wood development":["black streaks in new sapwood","foliar browning"],
    "foliar browning":["discoloration","dieback in the crown of tree"]
}
const liveOakSymptoms = {
    "canopy yellowing": ["yellowing of leaves in the canopy","sparse foliage"],  
    "sparse foliage":["few leaves or gaps in the canopy"],
    "tufting":["branches exhibit swelling"],
    "leaf vein disorders":["veinal necrosis","vein banding","veinal chlorosis","interveinal necrosis"],
    "veinal necrosis":["tip burn","leaves often develop chlorotic","veins eventually turns necrotic"],
    "tip burn":["turn the edges of the leaf brown"],
    "vein banding":["leaf vein is darker than the rest of the leaf"],
    "vein chlorosis":["yellowing between veins","leaf curling"],
    "interveinal necrosis":["leaf drop after winter","vein appearing brown or black between the veins"],
    "leaf discoloration symptom":["specking","chlorotic mottling "],
    "specking":["leaf spotting and discoloration","leaf have yellowish patches"],
    "chlorotic mottling":["leaf have yellowish patches"]
}
const redOakSymptoms ={
    "Vein discoloration": ['Vein turns yellow, bronze or brown', 'Surrounded leaf tissue remains green initially'],
    "Leaf necrosis": ['Rapid wilting of leaves','Leaf appear water soaked','Discolaration','Tip burn'],
    "Discoloration": ['Browning or yellowing of leaves'],
    "Tip burn": ['Brown or bronze-colour starts from tips and margin', 'Browning progressing inwards towards the center of leaf'],
    "Fungal mat": ['Bark cracks', 'Bark appear moist or tacky'],
    "Defoliation": ['Rapid loss of leaves from the canopy', 'Canopy browning'],
    "Canopy browning": ['Upper crowns turns brown followed by lower crown in late summer']
}

const redOakTreatment = "Treatments: sanitation and pruning <br>Sanitation is the remove and proper disposal of potential spore-producing trees <br>Pruning is to remove the infected branches"
const whiteOakTreatment = "Treatments: systemic injection of propiconazole and pruning <br>Systemic injection of propiconazole is used to kill and control fungus disease on oak by injecting 14.3% of propiconazole<br>Pruning is to remove the infected branches"
const liveOakTreatment= "Treatment: pruning infected branches, root graft, barrier <br>Pruning is to remove the infected branches <br>Root graft is placing a portion of one plant into or on a stem, root or branch of another in such a way that a union will be formed and the partners will continue to grow<br>Root barrier is an underground wall placed to block plant roots to protect structures or other plants."; 


//inference engine for red oak
function redOakQuestion(){
    document.getElementById('qforRed').style.display="block";
    btnShow.onclick=function(){
        let redSymptom1 = document.querySelector('.red1 input[type="radio"]:checked');
        let redSymptom2 = document.querySelector('.red2 input[type="radio"]:checked');
       
        //compare the list
        if(redSymptom1 && redSymptom2){
             //lock the chosen button
            let rb1 = document.querySelectorAll('input[type="radio"][name="vein"]');
            rb1.forEach(function(radioButton){
                radioButton.disabled = true;
            });
            let rb2 = document.querySelectorAll('input[type="radio"][name="leaf tissue"]');
            rb2.forEach(function(radioButton){
                radioButton.disabled= true;
            });
            if (redSymptom1.value =='Vein turns yellow, bronze or brown'&& redSymptom2.value=='Surrounded leaf tissue remains green initially') {
                determineVeinDiscolaration(redSymptom1,redSymptom2);
            }
            else{
                result.innerHTML="No oak wilt is detected."
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                }
                protect.style.display='block';
            
            }
        }else{
            alert('Please answer the questions');
        }
    }
}

function determineVeinDiscolaration(redSymptom1,redSymptom2){
    if(redOakSymptoms['Vein discoloration'].includes(redSymptom1.value)&&
       redOakSymptoms['Vein discoloration'].includes(redSymptom2.value)){
        result.innerHTML= 'Vein discolaration is detected.';
        redOak.push("Vein discolaration");

        document.getElementById("Leaf necrosis").style.display="block";
        btnShow.onclick= function(){
            let redSymptom3 = document.querySelector('.red3 input[type="radio"]:checked');
            let redSymptom4 = document.querySelector('.red4 input[type="radio"]:checked');
            let redSymptom5 = document.querySelector('.red5 input[type="radio"]:checked');
            let redSymptom6 = document.querySelector('.red6 input[type="radio"]:checked');
            let redSymptom7 = document.querySelector('.red7 input[type="radio"]:checked');

            //compare the list
            if (redSymptom3 && redSymptom4 && redSymptom5 && redSymptom6 && redSymptom7){
                 //lock the button
                let rb1 = document.querySelectorAll('input[type="radio"][name="rapid wilting"]');
                rb1.forEach(function(radioButton){
                    radioButton.disabled = true;
                });
                let rb2 = document.querySelectorAll('input[type="radio"][name="water soaked"]');
                rb2.forEach(function(radioButton){
                    radioButton.disabled = true;
                });
                let rb3 = document.querySelectorAll('input[type="radio"][name="brown leaves"]');
                rb3.forEach(function(radioButton){
                    radioButton.disabled = true;
                });
                let rb4 = document.querySelectorAll('input[type="radio"][name="margin"]');
                rb4.forEach(function(radioButton){
                    radioButton.disabled = true;
                });
                let rb5 = document.querySelectorAll('input[type="radio"][name="center"]');
                rb5.forEach(function(radioButton){
                    radioButton.disabled = true;
                });

                
                if(redOakSymptoms['Discoloration'].includes(redSymptom5.value) && redOakSymptoms['Tip burn'].includes(redSymptom6.value)&&
                redOakSymptoms['Tip burn'].includes(redSymptom7.value)){
                    determineLeafNecrosis(redSymptom3,redSymptom4,redSymptom5,redSymptom6,redSymptom7);
                }
                else{ //if no discolaration
                    result.innerHTML= "No oak wilt is detected.";
                    btnShow.onclick = function(){
                        alert('Result has been generated!');
                    }
                    protect.style.display='block';
                }
            }else{
                alert('Please answer the questions');
            }
        }
        }
}

function determineLeafNecrosis(redSymptom3,redSymptom4,redSymptom5,redSymptom6,redSymptom7){
    if(redOakSymptoms['Leaf necrosis'].includes(redSymptom3.value)&&
       redOakSymptoms['Leaf necrosis'].includes(redSymptom4.value)&&
       redOakSymptoms['Leaf necrosis'].includes('Discolaration')&&
       redOakSymptoms['Leaf necrosis'].includes('Tip burn')){
        result.innerHTML='Leaf necrosis is detected.'
        redOak.push("Leaf Necrosis");

            document.getElementById('Fungal mat').style.display="block";
            btnShow.onclick= function(){
                let redSymptom8 = document.querySelector('.red8 input[type="radio"]:checked');
                let redSymptom9 = document.querySelector('.red9 input[type="radio"]:checked');
                //compare the list
                if(redSymptom8 && redSymptom9){
                    //lock the button
                    let rb1 = document.querySelectorAll('input[type="radio"][name="bark cracks"]');
                    rb1.forEach(function(radioButton){
                        radioButton.disabled= true;
                    });

                    let rb2 = document.querySelectorAll('input[type="radio"][name="bark moist"]');
                    rb2.forEach(function(radioButton){
                        radioButton.disabled= true;
                    });

                    
                    if(redSymptom8.value == 'Bark cracks' && redSymptom9.value =='Bark appear moist or tacky'){
                        determineFungalMat(redSymptom8,redSymptom9);
                    }
                    else{ //if one yes one no
                        result.innerHTML = "No oak wilt is detected";
                        btnShow.onclick = function(){
                            alert('Result has been generated!');
                        }
                        protect.style.display='block';
                    }
                }else { 
                    alert('Please answer the questions');
                }
            }
       }
}

function determineFungalMat(redSymptom8,redSymptom9){
    if(redOakSymptoms['Fungal mat'].includes(redSymptom8.value)&&
       redOakSymptoms['Fungal mat'].includes(redSymptom9.value)){
        result.innerHTML= "Fungal mat is detected.";
        redOak.push("Fungal mat");

        document.getElementById('Defoliation').style.display="block";
        btnShow.onclick=function() {
            let redSymptom10 = document.querySelector('.red10 input[type="radio"]:checked');
            let redSymptom11 = document.querySelector('.red11 input[type="radio"]:checked');

            //compare the list
            if(redSymptom10 && redSymptom11){
                 //lock the button
                let rb1 = document.querySelectorAll('input[type="radio"][name="canopy"]');
                rb1.forEach(function(radioButton){
                    radioButton.disabled = true;
                });
                let rb2 = document.querySelectorAll('input[type="radio"][name="crown"]');
                rb2.forEach(function(radioButton){
                    radioButton.disabled = true;
                });

                if(redSymptom10.value == 'Rapid loss of leaves from the canopy'){
                    if(redOakSymptoms['Canopy browning'].includes(redSymptom11.value)){
                         determineDefoliation(redSymptom10,redSymptom11);
                    }else{
                         result.innerHTML = 'No oak wilt is detected.'
                         btnShow.onclick = function(){
                            alert('Result has been generated!');
                        }
                        protect.style.display='block';
                    }
                }else { //no rapid loss
                    result.innerHTML = 'No oak wilt detected.'
                    btnShow.onclick = function(){
                        alert('Result has been generated!');
                    }
                    protect.style.display='block';
                }
            }else{
                alert('Please answer the questions');
            }
       }
    }else{
        result.innerHTML= "No oak wilt is detected";
        btnShow.onclick = function(){
            alert('Result has been generated!');
        }
        protect.style.display='block';
    }
}

function determineDefoliation(redSymptom10,redSymptom11){
    if(redOakSymptoms['Defoliation'].includes(redSymptom10.value)&&
       redOakSymptoms['Defoliation'].includes('Canopy browning')){
        redOak.push("Defoliation");
        console.log(redOak);
        showResultred();
        howText.style.display='block';
        btnShow.onclick = function(){
            alert('Result has been generated!');
        }
       }else{
        result.innerHTML = 'No oak wilt detected.';
        btnShow.onclick = function(){
            alert('Result has been generated!');
        }
        protect.style.display='block';
    }
}

function showResultred(){
    if (redOak.length > 0) {
        result.innerHTML = `Oak wilt detected<br>${redOakTreatment}`;
    }
}



//inferene engine for live oak
function liveOakQuestion(){
    document.getElementById('canopyYellowing').style.display="block";
    btnShow.onclick=function() {
        let symptom1 = document.querySelector('.question1 input[type="radio"]:checked');
        let symptom2 = document.querySelector('.question2 input[type="radio"]:checked');

        if (symptom1 && symptom2) {
            document.querySelectorAll('input[type="radio"][name="yellowLeaves"]').forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            document.querySelectorAll('input[type="radio"][name="fewLeaves"]').forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            
            if(liveOakSymptoms['canopy yellowing'].includes(symptom1.value)&&
            liveOakSymptoms['sparse foliage'].includes(symptom2.value)){
                liveOak.push('canopy yellowing')
                document.getElementById('leafVein').style.display = 'block';
                determineLeafVeinDisorders();
            }else {
                // Hide leaf vein section if sparse foliage symptoms are not selected
                result.innerHTML = 'No Oak Wilt Detected';
                protect.style.display='block';
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                }
            }
        } else{
            alert('Please answer the questions')
        }
    };
}

function determineLeafVeinDisorders(){
    btnShow.onclick= function() {
            let symptom3 = document.querySelector('.question3 input[type="radio"]:checked');
            let symptom4 = document.querySelector('.question4 input[type="radio"]:checked');
            let symptom5 = document.querySelector('.question5 input[type="radio"]:checked');
            let symptom6 = document.querySelector('.question6 input[type="radio"]:checked');
            let symptom7 = document.querySelector('.question7 input[type="radio"]:checked');
            let symptom8 = document.querySelector('.question8 input[type="radio"]:checked');
            let symptom9 = document.querySelector('.question9 input[type="radio"]:checked');
            let symptom10 = document.querySelector('.question10 input[type="radio"]:checked');


              if (symptom3 && symptom4 && symptom5 && symptom6 && symptom7 && symptom8 && symptom9 && symptom10) 
                {
                    let radioButtons1 = document.querySelectorAll('input[type="radio"][name="leafBrown"]');
                    radioButtons1.forEach(function(radioButton) {
                        radioButton.disabled = true;
                     });
                    let radioButtons2 = document.querySelectorAll('input[type="radio"][name="leavesChlorotic"]');
                    radioButtons2.forEach(function(radioButton) {
                        radioButton.disabled = true;
                      });
                    let radioButtons3 = document.querySelectorAll('input[type="radio"][name="veinsNecrotic"]');
                    radioButtons3.forEach(function(radioButton) {
                        radioButton.disabled = true;
                     });
                    let radioButtons4 = document.querySelectorAll('input[type="radio"][name="leafDarker"]');
                    radioButtons4.forEach(function(radioButton) {
                        radioButton.disabled = true;
                     });
                    let radioButtons5 = document.querySelectorAll('input[type="radio"][name="yellowingVeins"]');
                    radioButtons5.forEach(function(radioButton) {
                        radioButton.disabled = true;
                      });
                    let radioButtons6 = document.querySelectorAll('input[type="radio"][name="leafCurling"]');
                    radioButtons6.forEach(function(radioButton) {
                        radioButton.disabled = true;
                     });
                    let radioButtons7 = document.querySelectorAll('input[type="radio"][name="leafDrop"]');
                    radioButtons7.forEach(function(radioButton) {
                        radioButton.disabled = true;
                     });
                    let radioButtons8 = document.querySelectorAll('input[type="radio"][name="leafBrownBlack"]');
                    radioButtons8.forEach(function(radioButton) {
                        radioButton.disabled = true;
                    })
                    
                    
                    if(liveOakSymptoms['veinal necrosis'].includes(symptom4.value) &&
                    liveOakSymptoms['veinal necrosis'].includes(symptom5.value)&&
                    liveOakSymptoms['tip burn'].includes(symptom3.value)){
                    liveOak.push('veinal necrosis');}
        
                    if (liveOakSymptoms['vein banding'].includes(symptom6.value)) {
                        liveOak.push('vein banding');
                    }
                    if (
                        liveOakSymptoms['vein chlorosis'].includes(symptom7.value) &&
                        liveOakSymptoms['vein chlorosis'].includes(symptom8.value)
                    ) {
                        liveOak.push('vein chlorosis');
                    }
                    if (
                        liveOakSymptoms['interveinal necrosis'].includes(symptom9.value) &&
                        liveOakSymptoms['interveinal necrosis'].includes(symptom10.value)
                    ) {
                        liveOak.push('interveinal necrosis');
                    }  
                }else{
                    alert('Please answer the questions');
                }


                if((liveOakSymptoms['veinal necrosis'].includes(symptom4.value) &&
                    liveOakSymptoms['veinal necrosis'].includes(symptom5.value)&&
                    liveOakSymptoms['tip burn'].includes(symptom3.value))||
                    (liveOakSymptoms['vein banding'].includes(symptom6.value))||
                    (liveOakSymptoms['vein chlorosis'].includes(symptom7.value) &&
                    liveOakSymptoms['vein chlorosis'].includes(symptom8.value))||
                    (liveOakSymptoms['interveinal necrosis'].includes(symptom9.value) &&
                    liveOakSymptoms['interveinal necrosis'].includes(symptom10.value))){
                    document.getElementById('tufting').style.display = 'block';
                    determineTufting();
                }else{
                    result.innerHTML = 'No Oak Wilt Detected';
                    btnShow.onclick = function(){
                        alert('Result has been generated!');
                    }
                    protect.style.display='block';
            }
     }
}

function determineTufting(){
    btnShow.onclick= function() {
        let symptom11 = document.querySelector('.question11 input[type="radio"]:checked');
        if(symptom11){
            let radioButtons1 = document.querySelectorAll('input[type="radio"][name="swelling"]');
            radioButtons1.forEach(function(radioButton) {
                radioButton.disabled = true;
            });

            if(liveOakSymptoms['tufting'].includes(symptom11.value)){
                liveOak.push('tufting')
                document.getElementById('discoloration').style.display = 'block';
                determineDiscoloration();
            }
            else{
                result.innerHTML = 'No Oak Wilt Detected';
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                    
                }
                protect.style.display='block';
            }
        }else{
            alert('Please answer the questions');
        }

    }
}

function determineDiscoloration(){
    btnShow.onclick= function(){
        let symptom12 = document.querySelector('.question12 input[type="radio"]:checked');
        let symptom13 = document.querySelector('.question13 input[type="radio"]:checked');
        let radioButtons1 = document.querySelectorAll('input[type="radio"][name="leafSpotting"]');
       

        if(symptom12 && symptom13){
            radioButtons1.forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            let radioButtons2 = document.querySelectorAll('input[type="radio"][name="yellowishPatches"]');
            radioButtons2.forEach(function(radioButton) {
                radioButton.disabled = true;
            });


            if(liveOakSymptoms['specking'].includes(symptom12.value)&&
            liveOakSymptoms['chlorotic mottling'].includes(symptom13.value)){
                liveOak.push('leaf discoloration symptom')
                showResult();
                howText.style.display='block';
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                }
            }
            else{
                result.innerHTML = 'No Oak Wilt Detected';
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                }
                protect.style.display='block';
            }
    }
    else{
        alert('Please answer the questions');
    }  
}
}

function showResult() {
    console.log(liveOakSymptoms);
    result.innerHTML=`Oak wilt is detected.<br><br> ${liveOakTreatment}`;
}


//inference engine for white oak
function whiteOakQuestion(){
    document.getElementById('qforWhite').style.display="block";
    btnShow.onclick= function() {
        let symptom1 = document.querySelector('.Q1 input[type="radio"]:checked');
        let symptom2 = document.querySelector('.Q2 input[type="radio"]:checked');
        let symptom3 = document.querySelector('.Q3 input[type="radio"]:checked');

        //compare the list
        if(symptom1&&symptom2&&symptom3){
            //lock the chosen button
            document.querySelectorAll('input[type="radio"][name="drab"]').forEach(function(radioButton) {
                    radioButton.disabled = true;
                });
            document.querySelectorAll('input[type="radio"][name="yellow"]').forEach(function(radioButton) {
                    radioButton.disabled = true;
                }); 
            document.querySelectorAll('input[type="radio"][name="margin"]').forEach(function(radioButton) {
                    radioButton.disabled = true;
                });

            if ((symptom1.value =='no')&& (symptom2.value=='no')&& (symptom3.value=='no')) {
                result.innerHTML='No oak wilt detected';
                btnShow.onclick = function(){
                    alert('Result has been generated!');
                }
                protect.style.display='block';
            }else{
                determineFoliar(symptom1,symptom2,symptom3);
            }
        }else{
            alert("Please answer the questions.");
        }
    }
}

function determineFoliar(symptom1,symptom2,symptom3){
    if(whiteOakSymptoms['discoloration'].includes(symptom3.value)){
        symptom3.value='discoloration';
        console.log(symptom3.value);
    }else{
        symptom3= symptom3;
    }

    if(whiteOakSymptoms['foliar discoloration'].includes(symptom1.value)||
        whiteOakSymptoms['foliar discoloration'].includes(symptom2.value)|| 
        whiteOakSymptoms['foliar discoloration'].includes(symptom3.value)){
        result.innerHTML='Foliar discoloration detected.';
        whiteOak.push('Foliar discoloration');

        document.getElementById('abscission').style.display="block";
        btnShow.onclick= function() {
            let symptom4 = document.querySelector('.Q4 input[type="radio"]:checked');
            let symptom5 = document.querySelector('.Q5 input[type="radio"]:checked');
            if(symptom4 &&symptom5){
                //lock the button
                let radioButtons1 = document.querySelectorAll('input[type="radio"][name="ground"]');
                radioButtons1.forEach(function(radioButton) {
                    radioButton.disabled = true;
                });
                let radioButtons2 = document.querySelectorAll('input[type="radio"][name="rapid"]');
                radioButtons2.forEach(function(radioButton) {
                    radioButton.disabled = true;
                });

                //compare the list
                if (whiteOakSymptoms['rapid leaf drop'].includes(symptom5.value)&&
                     whiteOakSymptoms['abscission'].includes(symptom4.value)) {
                        symptom5.value='rapid leaf drop';
                        console.log(symptom5.value);
                        determineAbscission(symptom4,symptom5);
                }else{
                    result.innerHTML='No oak wilt detected.';
                    btnShow.onclick = function(){
                        alert('Result has been generated!');
                    }
                    protect.style.display='block';
                }
            }else{
                alert('Please answer the questions.');
            }
        }
    }
    else{
        result.innerHTML='No oak wilt detected';
    }
}

function determineAbscission(symptom4,symptom5){
    if(whiteOakSymptoms['abscission'].includes(symptom4.value)&&
        whiteOakSymptoms['abscission'].includes(symptom5.value)){
        result.innerHTML='Abscission detected';
        whiteOak.push('Abscission');

        document.getElementById('anomalous').style.display="block";
        btnShow.onclick= function() {
            let symptom6 = document.querySelector('.Q6 input[type="radio"]:checked');
            let symptom7 = document.querySelector('.Q7 input[type="radio"]:checked');
            let symptom8 = document.querySelector('.Q8 input[type="radio"]:checked');
                
                if (symptom6 && symptom7 && symptom8) {
                    //lock the buttons
                    let radioButtons1 = document.querySelectorAll('input[type="radio"][name="black"]');
                    radioButtons1.forEach(function(radioButton) {
                        radioButton.disabled = true;
                    });
                    let radioButtons2 = document.querySelectorAll('input[type="radio"][name="foliar"]');
                    radioButtons2.forEach(function(radioButton) {
                        radioButton.disabled = true;
                    });
                    let radioButtons3 = document.querySelectorAll('input[type="radio"][name="dieback"]');
                    radioButtons3.forEach(function(radioButton) {
                        radioButton.disabled = true;
                    });

                    //compare
                    if (whiteOakSymptoms['foliar browning'].includes(symptom7.value)&&
                        whiteOakSymptoms['foliar browning'].includes(symptom8.value)) {
                            symptom8.value='foliar browning';
                            console.log(symptom6,symptom8);
                            determineAnomalous(symptom6, symptom8);
                    }else if(whiteOakSymptoms['anomalous wood development'].includes(symptom6.value)){
                        console.log(symptom8.value);
                        determineAnomalous(symptom6,symptom8);
                    }else{
                        result.innerHTML='No oak wilt detected.';
                        btnShow.onclick = function(){
                            alert('Result has been generated!');
                        }
                        protect.style.display='block';
                    }
                }else{
                    alert('Please answer the questions.');
                }
            }
        }else{
        result.innerHTML = 'No oak wilt detected.';
        btnShow.onclick = function(){
            alert('Result has been generated!');
        }
    }
}

function determineAnomalous(symptom6,symptom8){
    if(whiteOakSymptoms['anomalous wood development'].includes(symptom6.value)||
        whiteOakSymptoms['anomalous wood development'].includes(symptom8.value)){
            whiteOak.push('Anomalous Wood Development');
            console.log('1:',whiteOak);
            printResult();
            howText.style.display='block';
            btnShow.onclick = function(){
                alert('Result has been generated!');
            }
        }else{
            result.innerHTML = 'No oak wilt detected.';
            btnShow.onclick = function(){
                alert('Result has been generated!');
            }
            protect.style.display='block';
        }
}

function printResult(){
    console.log(whiteOak);
    result.innerHTML=`Oak wilt is detected.<br><br> ${whiteOakTreatment}`;
    
    
}

function showHow(){
    how.classList.toggle('visible2');
    console.log(selected);
    if(selected.value=='whiteOak'){
        let listItems = whiteOak.map((symptom, index) => `${index + 1}) ${symptom}`).join('<br>');
        how.innerHTML = `The result is generated based on your input:<br>${listItems}<br>`;
        how.innerHTML+= '<br> Symptoms for foliar discoloration: Leaves turn drab green, yellowing of leaves occurs along the vein and discoloration';
        how.innerHTML+= '<br> Symptoms for abscission: Fallen leaves accumulate on ground and rapid leaf drops';
        how.innerHTML+= '<br> Symptoms for anomalous wood development: Black streaks in new sapwood and foliar browning <br><br>Oak wilt will be diagnosed only when foliar discoloration, abscission and anomalous wood development are detected.';
    }else if(selected.value=='redOak'){
        let listItems = redOak.map((symptom, index) => `${index + 1}) ${symptom}`).join('<br>');
        console.log(redOak);
        how.innerHTML = `The result is generated based on your input:<br>${listItems}<br>`;
        how.innerHTML+= '<br> Symptoms for vein discolaration: Vein turns yellow, bronze or brown and surrounded leaves remain green initially';
        how.innerHTML+= '<br> Symptoms for leaf necrosis: Rapid wilting of leaves, leaf appear water soaked, discolaration and tip burn';
        how.innerHTML+= '<br> Symptoms for fungal mat: Bark cracks and bark appear moist or tacky';
        how.innerHTML+= '<br> Symptoms for defoliation: Rapid loss of leaves from the canopy and canopy browning <br><br>Oak wilt will be diagnosed only when vein discoloration, leaf necrosis, fungal mat and defoliation are detected.';
    }else{
        let listItems = liveOak.map((symptom, index) => `${index + 1}) ${symptom}`).join('<br>');
        how.innerHTML = `The result is generated based on your input:<br>${listItems}<br>`;
        how.innerHTML+= '<br> Symptoms for canopy yellowing: yellowing of leaves in the canopy, sparse foliage';
        how.innerHTML+= '<br> Symptoms for leaf vein disorders: veinal necrosis, vein banding, veinal chlorosis, interveinal necrosis';
        how.innerHTML+= '<br> Symptoms for tufting: branches exhibit swelling';
        how.innerHTML+= '<br> Symptoms for leaf discoloration symptom: specking, chlorotic mottling <br><br>Oak wilt will be diagnosed only when canopy yellowing, leaf vein disorder, tufting and leaf discoloration are detected.';
    }
}

function showProtect(){
    protectTree.classList.toggle('visible2');
    protectTree.innerHTML='Minimize grading, digging, trenching and covering the ground with asphalt or concrete landscape plants are the methods to protect oak trees';
}
