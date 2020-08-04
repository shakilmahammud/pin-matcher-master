     //Pin Generate Function
     function pinGenerator(){
        document.getElementById("generatePinNumber").value = Math.round(1000 + Math.random() * 9000);
    }

    //Insert Number Function
    function buttonNumber(number){
        const exitNumber = document.getElementById("pinNumber").value;
        document.getElementById("pinNumber").value = exitNumber + number;
    }

    //Clear Pin Number Function
    function clearNumber(){
        document.getElementById("pinNumber").value = '';
    }

    //Delete Number Function
    function deleteNumber(){
        const presentValue = document.getElementById("pinNumber").value;
        if(presentValue != ''){
            document.getElementById("pinNumber").value = presentValue.slice(0, -1);
        }
    }
    //Pin Matching Function
    function isMatch(){
        const generatePin = document.getElementById("generatePinNumber").value;
        const pinNumber = document.getElementById("pinNumber").value;
        if(pinNumber == ''){
            alert("Please Enter Your Pin Number");
        }
        else if(generatePin == pinNumber){
            notify("notifyMatched");
        }
        else{
            notify("notifyUnmatched");
        }
    }
    //Action count function
    function actionCount(){
        const actionCount = parseInt(document.getElementById("actionCountdown").innerText);
            const actionLeft = document.getElementById("actionCountdown").innerText = actionCount -1;
            if(actionLeft < 1){
                alert("❌ 0 Try Left. You Are Already Try 3 More Time.  Please try after 15 minutes");
                document.getElementById("actionCountdown").innerText = 0;
                document.getElementById("submitBtn").disabled = true;
            }
    }
    //Notify Function
    function notify(id){
        document.getElementById("pinGenerator").style.display = "none";
        document.getElementById("pinInput").style.display = "none";
        if(id == "notifyMatched"){
            document.getElementById("notifyUnmatched").style.display = "none";
            document.getElementById("notifyMatched").style.display = "block";
        }
        else{
            document.getElementById("notifyMatched").style.display = "none";
            document.getElementById("notifyUnmatched").style.display = "block";
        }
    }
    //return Try  function
    function returnTry(){
        actionCount();
        document.getElementById("notifyUnmatched").style.display = "none";
        document.getElementById("pinGenerator").style.display = "block";
        document.getElementById("pinInput").style.display = "block";
    }