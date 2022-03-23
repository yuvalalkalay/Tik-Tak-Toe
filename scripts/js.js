    //decleration of variables
    let loopb = false; //
    let xBool = true;
    let win = false;
    let addresArray =[];
    let typeArray = [];
    let inc = 0;
    let simbolMaker;
    let winMoves = 10;


    let saveGame_type =[];
    let saveGame_address=[];
    let saveGame_inc;
    let saveGame_xBool;




    function addSimbol(address){
        // chaking if exist address in the addresArray for not repeat on the same address.
        for(let i=0;i<addresArray.length;i++){
            if(addresArray[i] === address){
                loopb = true;
            }
        }

        //if the address not exist in addresArrey the 'if' statment will make simbol on are address.
        if(loopb === false){
            simbolMaker = document.getElementById(address);

            if(xBool === true){
                //decleration of image element and get src of 'X' image
                let X = document.createElement('img');
                X.setAttribute("src","../images/x.jpg");
                X.setAttribute("alt","undefined");
                X.setAttribute("width","90px");
                X.setAttribute("heigth","90px");
                X.setAttribute("id","img "+(inc+1));
                simbolMaker.append(X);
                typeArray[address-1] = 2;
                xBool = !xBool;
            }
            else{
                //decleration of image element and get src of 'o' image
                let O = document.createElement('img');
                O.setAttribute("src","../images/o.jpg");
                O.setAttribute("alt","undefined");
                O.setAttribute("width","90px");
                O.setAttribute("heigth","90px");
                O.setAttribute("id","img "+(inc+1));
                simbolMaker.append(O);
                typeArray[address-1] = 3;
                xBool = !xBool;
            }
        }


        for(let i = 0;i<9;i++){
            console.log("type["+i+"] = "+typeArray[i]);//debugs
        }
        
        

        //usin checkIfWin() function here.
       // checkIfWin();


        if(loopb === false){// check if was address in are addresarray and if not the statment will add to the addresarray for the next call.
            addresArray[inc] = address;//enter the current addres to are addresArray.
            inc++;
        }
            loopb = false;
            //console.log(inc);
            checkIfWin();

            for(let i=0;i<9;i++){
                console.log("address["+i+"]:"+addresArray[i-1]);
            }
}









    function checkIfWin(){
        for(let i=0 ; i<3; i++){
            if (typeArray[i*3]+typeArray[i*3+1]+typeArray[i*3+2] === 6){
                alert("X win!!!");
                win = true;
            }
            if(typeArray[i]+typeArray[i+3]+typeArray[i+6] === 6){
                alert("X win!!!");
                win = true;
            }


            if (typeArray[i*3]+typeArray[i*3+1]+typeArray[i*3+2] === 9){
                alert("O win!!!");
                win = true;
            }
             if(typeArray[i]+typeArray[i+3]+typeArray[i+6] === 9){
                 alert("O win!!!");
                 win = true;
             }
        }

    


            if(typeArray[0]+typeArray[4]+typeArray[8] === 9){
                alert("O win!!!");
                win = true;
            }
            if(typeArray[2]+typeArray[4]+typeArray[6] === 9){
                alert("O win!!!");
                win = true;
            }



            if(typeArray[0]+typeArray[4]+typeArray[8] === 6){
                alert("X win!!!");
                win = true;
            }
            if(typeArray[2]+typeArray[4]+typeArray[6] === 6){
                alert("X win!!!");
                win = true;
            }

        console.log(inc);

        if(win === true && winMoves > inc){
            winMoves = inc;
        }
        win = false;
    }












function deletLastMove(){
    let removElement = document.getElementById("img "+inc);
    removElement.parentNode.removeChild(removElement);

        //typeArray.splice(addresArray[inc-1]-1,1,undefined);
         typeArray[addresArray[inc-1]-1] = undefined;//inc-1
     
     
    addresArray.pop();
    xBool = !xBool;
    inc--;
    console.log("inc="+inc);
}














function newGame(){

    for(inc; inc > 0;inc--){
        
        let deletElement = document.getElementById("img "+inc);
        deletElement.parentNode.removeChild(deletElement);
        typeArray[addresArray[inc-1]-1] = undefined;
        addresArray.pop();
    }
    xBool = true;
    inc = 0;
   // return(0);
}




function showRecord(){
    alert("best record :"+winMoves+" steps");
}

function save(){

    saveGame_inc = inc;
    saveGame_xBool = xBool;
    for(let i=0;i<addresArray.length;i++){
        saveGame_address[i] = addresArray[i];
    }

    for(let i=0;i<9;i++){
        saveGame_type[i] = typeArray[i];
    }
    for(let i = 0;i<9;i++){
        console.log("saved type["+i+": "+saveGame_type[i]);
    }
    for(let i = 0;i<9;i++){
        console.log("original type["+i+"] :"+typeArray[i]);
    }
}






function load(){
    newGame();
    for(let i=0;i<9;i++){
        if(saveGame_type[i] === 2){
            simbolMaker = document.getElementById(i+1);
            let X = document.createElement('img');
            X.setAttribute("src","../images/x.jpg");
            X.setAttribute("alt","undefined");
            X.setAttribute("width","90px");
            X.setAttribute("heigth","90px");
            X.setAttribute("id","img "+(inc+1));
            simbolMaker.append(X);
            inc++;
        }
        if(saveGame_type[i] === 3){
            simbolMaker = document.getElementById(i+1);
            let O = document.createElement('img');
            O.setAttribute("src","../images/o.jpg");
            O.setAttribute("alt","undefined");
            O.setAttribute("width","90px");
            O.setAttribute("heigth","90px");
            O.setAttribute("id","img "+(inc+1));
            simbolMaker.append(O);
            inc++;
        }
    }
    inc = saveGame_inc;
    xBool = saveGame_xBool;

    for(let i=0;i<9;i++){
        addresArray[i] = saveGame_address[i];
    }
    for(let i=0;i<9;i++){
        typeArray[i] = saveGame_type[i];
    }
}