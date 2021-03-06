function RNG(min: number, max: number) {
  const rng = Math.random();
  return Math.trunc(rng * (max-min) + min);
  // rng * (max-min) + min
  // se rng = 0 => min
  // se rng = 1 => max
  // dato che Math.random() genera un numero compreso tra 0 e 1 il risultato sarà sempre min  
}

/*creare una funzione che genera e mette numeri in un array */
function RNGSequence(len: number, min: number, max: number) {
if (len > max - min) {
    throw new Error('cannot find ' + len + ' numbers beetwen ' + min + ' and ' + max);
};
// creare un ciclo per cui per ogni numero generato si controlla se è presente nell'array
const res: number[] = [];
while (res.length < len) {   
  const rn = RNG(min, max);
  if (res.includes(rn)){
    continue; //** continue: salta un valore e prosegue */
  } else {
    res.push(rn);
  }
}
return res;
};

// console.log('random list: ', myArr); 

// lanciare la funzione RNGSequence per ogni città
const ruote: string[] = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma',  'Torino', 'Venezia', 'Nazionale'];
const estrazioni: {[ruota: string]: number [] } = {};

ruote.map((el)=> {  
  const estrazione = RNGSequence(5, 1, 100);
  estrazioni[el] = estrazione;
});

function createRuotaCnt(ruotaName: string, estrazioni: number[]) {
  const ruotaDiv = document.createElement('div');
  ruotaDiv.className = `ruota  ${ruotaName.toLowerCase()}`;
  const nameH2 = document.createElement('h2');
  nameH2.innerText = ruotaName;
  nameH2.className = 'ruota-title'
  ruotaDiv.appendChild(nameH2); 

  for (const num of estrazioni) {  
  const numP = document.createElement('p');  
  numP.innerText = '' + num;
  const numDiv = document.createElement('div')
  numDiv.className = 'ruota-estrazione';
  numDiv.appendChild(numP);  
  ruotaDiv.appendChild(numDiv);
  }
  
  return ruotaDiv;  
}; 

const container = document.getElementById('cnt');
if (container) {   
  const pre = document.createElement('pre');
  
  for (const ruota of ruote) {    
    const ruotaEstrazioni = estrazioni[ruota];
    const ruotaDiv = createRuotaCnt(ruota, ruotaEstrazioni);
    container.appendChild(ruotaDiv);
  }
}  

