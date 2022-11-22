let output = document.querySelector('#output');
let button_outPut = document.querySelector('#button-container');
let button_close = document.querySelector('#close');
let button_next = document.querySelector('#Next');
let button_prev = document.querySelector('#Previous');
let result = document.createElement('video');
let currentVideo ;
//onsole.log(button_close , button_next ,button_prev);
function controlFunction(e){
  
    let current = e.src.split('/');
    let toPlay = current[current.length-1];
    newPage(toPlay);       
}

function newPage(toplay){

 result.setAttribute('src',"videos/"+toplay);
 currentVideo = Number(toplay[0]) ;
 result.setAttribute('width','800px');
 result.setAttribute('controls','controls')
 output.style.display ='block';
 output.style.marginLeft ='300px';
 button_outPut.style.display ='flex';

 output.appendChild(result);


}


//close 
button_close.addEventListener('click',(e)=>{
e.preventDefault();
output.style.display ='none';
button_outPut.style.display ='none';
})

//next

button_next.addEventListener('click',(e)=>{
    e.preventDefault();
    currentVideo+=1;
    
    if(currentVideo <= 5){
        
 
        result.setAttribute('width','800px');
        result.setAttribute('height','450px');
        result.setAttribute('controls','controls')
        result.setAttribute('src',"videos/"+currentVideo+".mp4");
     
    }else{
        currentVideo = 1;
    }
       
    })


    button_prev.addEventListener('click',(e)=>{
        e.preventDefault();
        currentVideo--;
        
    
            
     if(currentVideo > 0){
            result.setAttribute('width','800px');
            result.setAttribute('height','450px');
            result.setAttribute('controls','controls')
            result.setAttribute('src',"videos/"+currentVideo+".mp4");
          }else{
            currentVideo =1;
            button_prev.diasbled = true;
          }
        
           
        })