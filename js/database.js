const lista = document.getElementById('lista');
const razaoNome = document.getElementById('razaoNome');
const motivo = document.querySelector('textarea');
const vistoria = document.getElementById('vistoria');
const endereco = document.getElementById('endereco');
const atividade = document.getElementById('atividade');
const data = document.getElementById('data');
const denunciante = document.getElementById('denunciante');
const addButton = document.getElementById('addButton');
const db = firebase.database();
const gerarPdf = document.getElementById('gerarPdf');

addButton.addEventListener('click',function() {
    datavalue = data.value;
    split = datavalue.split('-');
    novadata = split[2] + "/" +split[1]+"/"+split[0];
    var img = new Image();
    img.src = "css/vigilanciasanitaria.png"
    var doc = new jsPDF();    
    doc.addImage(img, 'PNG', 12, 17, 35, 28.5);
    doc.setFont("times");
    doc.setFontType("bold");
    doc.setFontSize(13);      
    doc.text('PREFEITURA MUNICIPAL DO RIO GRANDE ', 65, 23);   
    doc.text('SECRETARIA MUNICIPAL DA SAÚDE ', 75, 29);   
    doc.text('CENTRO MUNICIPAL DE VIGILÂNCIA EM SAÚDE ', 65, 35);    
    doc.text('UNIDADE DE VIGILÂNCIA SANITÁRIA ', 75, 41);      
    doc.setFontSize(15);       
    doc.text('DENÚNCIA ', 85, 60);  
    doc.setFontSize(13);    
    doc.setFontType('normal');    
    doc.text('Razão e/ou Nome Fantasia:', 14, 73);
    doc.text(razaoNome.value, 88, 73);    
    doc.text(endereco.value, 88, 93);    
    doc.text(atividade.value, 88, 103);    
    doc.text(motivo.value, 88, 128);    
    doc.setFontSize(13);    
    doc.setFontType('normal'); 
    doc.text('Data: ', 14, 83);
    doc.setFontSize(13);  
    doc.setFontType('normal');    
    doc.text('Endereço: '+endereco.value, 14, 93);
    doc.setFontSize(13);  
    doc.setFontType('normal'); 
    doc.text('Ramo de Atividade: '+atividade.value, 14, 103);
    doc.setFontSize(13);        
    doc.setFontType('normal'); 
    doc.text('Motivo da Denúncia: '+motivo.value, 14, 128);
    doc.setFontSize(13);    
    doc.setFontType('normal');       
    doc.text('Resultado da vistoria '+vistoria.value, 14, 162);
    doc.setFontSize(13);  
    doc.setFontType('normal');    
    doc.text('realizada pela VISA: ', 14, 167);    
    doc.setFontSize(13);  
    doc.setFontType('normal');      
    doc.text('Assinatura do responsável '+denunciante.value, 14, 192);
    doc.setFontSize(13);   
    doc.text('pelo estabelecimento '+denunciante.value, 14, 197);
    doc.setFontType('normal');   
    doc.text('Assinatura da VISA: ', 14, 207);
    doc.text('Equipe da VISA: ', 14, 220);              
    doc.text('Data da Vistoria: ', 14, 233);      
    doc.text('Nome do Denunciante (opcional): ', 14, 248);          
    doc.rect(10, 12, 190, 250, 'S'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 50, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 65, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 76.5, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal'); 
    doc.rect(10, 86.6, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.rect(10, 96, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.rect(10, 108, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setFontSize(10);        
    doc.text('........................................................................................................................................', 80, 116);        
    doc.text('........................................................................................................................................', 80, 123);   
    doc.text('........................................................................................................................................', 80, 131);  
    doc.text('........................................................................................................................................', 80, 138);    
    doc.rect(80, 65, 0.1, 185, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0);
    doc.rect(10, 145, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('normal');
    doc.setFontSize(10);        
    doc.text('........................................................................................................................................', 80, 151);        
    doc.text('........................................................................................................................................', 80, 157);   
    doc.text('........................................................................................................................................', 80, 164);  
    doc.text('........................................................................................................................................', 80, 171);  
    doc.text('........................................................................................................................................', 80, 178);  
    doc.rect(10, 183, 190, 0.1, 'F'); //Fill and Border
    doc.text('.........................................................................................................................', 85, 193);  
    doc.rect(10, 200, 190, 0.1, 'F'); //Fill and Border
    doc.text('.........................................................................................................................', 85, 208); 
    doc.rect(10, 212, 190, 0.1, 'F'); //Fill and Border
    doc.text('.........................................................................................................................', 85, 220.6); 
    doc.setFontSize(13);    
    doc.text('_____ / _____ / ______', 120, 235);    
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0);
    doc.rect(10, 225, 190, 0.1, 'F'); //Fill and Border
    doc.rect(10, 238, 190, 0.1, 'F'); //Fill and Border
    doc.rect(10, 250, 190, 0.1, 'F'); //Fill and Border        
    doc.save('denuncia.pdf');    

});

