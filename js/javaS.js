const mSubFes = [[6, 15],[6, 30],[6, 45],[7, 0],[7, 20],[7, 40],[8, 0],[8, 30],[9, 0],[9, 30],[10, 0],[10, 30],[11, 0],[11, 30],[12, 0],[12, 30],[13, 0],[13, 15],[13, 30],[13, 45],[14, 0],[14, 30],[15, 0],[15, 30],[16, 0],[16, 30],[17, 0],[17, 30],[18, 0],[18, 30],[19, 0],[19, 30],[21, 0],[21, 30]];
const mFesSub = [[10,50],[11,30],[12,30],[13,0],[13,30],[14,0],[14,30],[15,0],[15,30],[16,0],[16,30],[17,0],[17,30],[18,0],[18,30],[19,0],[19,30],[20,0],[20,30],[21,15],[21,30],[21,45],[22,0]];

const mCunoFes = [[6,20],[6,40],[7,0],[7,30],[8,0],[8,30],[9,0],[9,30],[10,0],[10,30],[11,0],[11,30],[12,15],[12,45],[13,15],[13,45],[14,15],[14,45],[15,15],[15,45],[16,0],[16,30],[17,0],[17,30],[18,0],[18,30],[19,0],[19,30],[20,0],[21,15],[21,30]];
const mFesCuno = [[6,20],[6,40],[7,0],[7,30],[8,0],[8,30],[9,0],[9,30],[10,0],[10,30],[11,0],[11,30],[12,15],[12,45],[13,15],[13,45],[14,15],[14,45],[15,15],[15,45],[16,0],[16,30],[17,0],[17,30],[18,0],[18,30],[19,0],[19,30],[20,0],[20,30],[21,15],[21,30],[22,0]];

const mCCaminosFes = [[6,0],[6,10],[6,20],[6,30],[6,45],[7,0],[7,20],[7,40],[8,0],[8,30],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[14,30],[15,0],[15,30],[16,0],[16,30]];
const mFesCCaminos = [[11,10],[11,50],[12,30],[13,0],[13,20],[13,40],[14,0],[14,20],[14,40],[15,0],[15,40],[16,20],[17,0],[17,40],[18,20],[19,0],[19,30],[20,0],[20,30],[21,0],[21,30],[22,0]];

const mPoliFes = [[5,45],[6,0],[6,15],[6,30],[6,45],[6,50],[7,0],[7,20],[8,0],[8,30],[9,0],[9,30],[10,0],[11,0],[12,0],[12,30],[13,0],[13,30],[14,0],[14,30],[15,0],[16,0],[17,20]];
const mFesPoli = [[11,10],[12,0],[12,30],[13,0],[13,20],[13,40],[14,0],[14,20],[14,40],[15,0],[15,30],[16,0],[16,40],[17,20],[18,10],[19,0],[20,0],[20,45],[21,30],];

const SubuFes = document.getElementById("SubuFes");
const FesSubu = document.getElementById("FesSubu");

const CunoFes = document.getElementById("CunoFes");
const FesCuno = document.getElementById("FesCuno");

const CCaminosFes = document.getElementById("CCaminosFes");
const FesCCaminos = document.getElementById("FesCCaminos");

const PoliFes = document.getElementById("PoliFes");
const FesPoli = document.getElementById("FesPoli");

const PrecioC = document.getElementById("PrecioC");
const PrecioC2 = document.getElementById("PrecioC2");

const ahora = new Date();
const horas = ahora.getHours();
const minutos = ahora.getMinutes().toString().padStart(2, '0');
let n=0;

window.onload = function() {
    recorrerMatriz(mSubFes, SubuFes);
    recorrerMatriz(mFesSub, FesSubu);

    recorrerMatriz(mCunoFes, CunoFes);
    recorrerMatriz(mFesCuno, FesCuno);

    recorrerMatriz(mCCaminosFes, CCaminosFes);
    recorrerMatriz(mFesCCaminos, FesCCaminos);

    recorrerMatriz(mPoliFes, PoliFes);
    recorrerMatriz(mFesPoli, FesPoli);

    if (horas>=18 && minutos >= 30) {
      PrecioC.textContent = "Costo de pasaje: $6.00";
      PrecioC2.textContent = "Costo de pasaje: $8.00";
    }
}

function recorrerMatriz(matriz, text) {
  let h;
  for (let i = 0; i < matriz.length; i++) {
    if (horas<=matriz[i][0]) {
      if (minutos<=matriz[i][1] && matriz[i][0]==horas) {
        h=matriz[i][0] % 12 || 12;
        let ampm = matriz[i][0] >= 12 ? 'PM' : 'AM';
        matriz[i][1]==0 ? text.textContent = h + ":"+ matriz[i][1] + "0 " +ampm : text.textContent = h + ":"+ matriz[i][1] + " " +ampm;
        break;
      }else if(matriz[i][0]!=horas){
        h=matriz[i][0] % 12 || 12;
        let ampm = matriz[i][0] >= 12 ? 'PM' : 'AM';
        matriz[i][1]==0 ? text.textContent = h + ":"+ matriz[i][1] + "0 " +ampm : text.textContent = h + ":"+ matriz[i][1] + " " +ampm;
        break;
      }
    }
  }
}
