const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let w='';
    let NEW_MORSE_TABLE = {' ':' '};


    for (const i in MORSE_TABLE) {
        
        let v='';
        //go through table
        for (let index = 0; index < i.length; index++) {
            const element = i[index];
           if (element=='.') {v+='10'
               
           } else {v+='11'
               
           } 

        }
        NEW_MORSE_TABLE[v]=MORSE_TABLE[i];
    
       
    };
    for (let j = 0,k = 10; j < expr.length; j+=10,k+=10) {
        let letter=expr.slice(j, k);
     
     
    
        for (let i= 0; i<10;i++) {
          const element = letter[i];   
          if (element === '*'){
            w+=' ';
            break;
          };
         if (element !== '0') {
              let newletter=letter.slice(i,10);
              // console.log('new letter',newletter);
               


              
               
              
              
              
              
            
             for (let key in NEW_MORSE_TABLE) {
             if(key === newletter){
               w+=NEW_MORSE_TABLE[key];
             
               break;
             } ;
            
            }
            
                break;
        
               } ;
          
                    
      
           }
         
           
         
       }
    
        
 
     
      
            
      
  return w;
}

module.exports = {
    decode
}