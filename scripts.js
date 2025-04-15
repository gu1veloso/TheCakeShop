
function updatePricesCupcakes(){
    const priceA = 12;
    const priceB = 14;
    const priceC = 15;

    const elementA = document.querySelectorAll('.itemA');
    const elementB = document.querySelectorAll('.itemB');
    const elementC = document.querySelectorAll('.itemC');

    for (let i = 0; i < elementA.length; i++){
        if (i % 2 == 0) {
            elementA[i].textContent = `R$ ${priceA.toFixed(2)}`;
        }
        else{
            elementA[i].textContent = `R$ ${(priceA/2).toFixed(2)}`;
        }
    }
    console.log(priceA);
    
    for (let i = 0; i < elementB.length; i++){
        if (i % 2 == 0) {
            elementB[i].textContent = `R$ ${priceB.toFixed(2)}`;
        }
        else{
            elementB[i].textContent = `R$ ${(priceB/2).toFixed(2)}`;
        }
    }
    console.log(priceB);
    
    for (let i = 0; i < elementC.length; i++){
        if (i % 2 == 0) {
            elementC[i].textContent = `R$ ${priceC.toFixed(2)}`;
        }
        else{
            elementC[i].textContent = `R$ ${(priceC/2).toFixed(2)}`;
        }
    }
    console.log(priceC);
}

