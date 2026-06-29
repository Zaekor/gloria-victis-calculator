let savedTotal = 0;

document.getElementById("saveBtn").addEventListener("click", () => {

    let gold=parseInt(document.getElementById("gold").value)||0;
    let silver=parseInt(document.getElementById("silver").value)||0;
    let iron=parseInt(document.getElementById("iron").value)||0;
    let copper=parseInt(document.getElementById("copper").value)||0;

    let current =
        gold*values.gold+
        silver*values.silver+
        iron*values.iron+
        copper;

    savedTotal += current;

    updateSaved();

});

document.getElementById("resetBtn").addEventListener("click",()=>{

    if(confirm("Réinitialiser le total sauvegardé ?")){
        savedTotal=0;
        updateSaved();
    }

});

function updateSaved(){

    let total=savedTotal;

    document.getElementById("savedCopper").innerText=total.toLocaleString("fr-FR");

    let gold=Math.floor(total/values.gold);
    total%=values.gold;

    let silver=Math.floor(total/values.silver);
    total%=values.silver;

    let iron=Math.floor(total/values.iron);
    total%=values.iron;

    let copper=total;

    document.getElementById("sGold").innerText=gold;
    document.getElementById("sSilver").innerText=silver;
    document.getElementById("sIron").innerText=iron;
    document.getElementById("sCopper").innerText=copper;

}