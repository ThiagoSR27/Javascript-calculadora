var btn = document.querySelectorAll(".key li"),
    input = document.querySelector(".input-valor"),
    operator = document.querySelectorAll(".operator"); 
    
    //array para usar todas as informaçoes da calculadora

    for(var i = 0; i< btn.length; i++){
        var key = event.keyCode;
        
        for(var e = 0; e <= 10; e++){
            if(key === (48+e)){
                input.innerHTML += e;
            }
        }
        switch(key){
            case 42:
                input.innerHTML += "*";
                break;
            case 43:
                input.innerHTML += "+";
                break;
            case 45:
                input.innerHTML += "-";
                break;
            case 46:
                input.innerHTML += ".";
                break;
            case 47:
                input.innerHTML += "/";
                break
            case 13 :
            case 61:
                var equacao = input.innerHTML;
                if(equacao){
                    try{
                        input.innerHTML=eval(equacao);
                    }
                    catch (e){
                        alert('Erro na expressão');
                    }
                }
                break;
            case 67:
            case 99:
                input.innerHTML="";
                break;
            default:
                break;    
        }
    };