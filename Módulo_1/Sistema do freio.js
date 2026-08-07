const temperatura = 380; 

const freiopress = true; 

const freioEmPerigo = (temperatura >=400);
console.log(freioEmPerigo);

const usoIntenso = (temperatura >=300 && freiopress);
console.log(usoIntenso)

const freioSegu = (temperatura <400 && temperatura >=50); 
console.log(freioSegu);

const alertaPainel = (temperatura >400 || temperatura <0);
console.log(alertaPainel);

const estadoIna = (!(freiopress))
console.log(estadoIna);

