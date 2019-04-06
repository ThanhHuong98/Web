var number1="",number2="",radios,result="",isSub=0,noti="";
function calculate(){
	number1 = document.getElementById("inputNumber1").value;
	number2 = document.getElementById("inputNumber2").value;
	radios = document.getElementsByName("optradio");
	var val, i;
	for(i = 0; i < radios.length; i++)
	{
    	if(radios[i].checked){
    		if(number1=="" || number2==""){
    			noti="Bạn chưa nhập giá trị đầy đủ cho hai số";
    		}else{
    			 if((!isNaN(number1)) && (!isNaN(number2))){
    			 	val = radios[i].value;
    			 	noti="";
        			if(val=="add"){
        				result = parseInt(number1,10)+parseInt(number2,10);
        			}else if(val=="sub"){
        				result = parseInt(number1,10)-parseInt(number2,10);
        				isSub=1;
        			}else if(val=="mul"){
        				result = parseInt(number1,10)*parseInt(number2,10);
        			}else if(val=="dev"){
        				result = parseInt(number1,10)/parseInt(number2,10);
        			}
    			 }else{
    			 	if(isNaN(number1)){
    			 		noti="Số thứ nhất không phải là kiểu số thực";
    			 	}else if(isNaN(number2)){
    			 		noti="Số thứ hai không phải là kiểu số thực";
    			 	}else{
    			 		noti="Số thứ nhất & số thứ hai không phải là kiểu số thực";
    			 	}
    			 }
    		}
    	}else{
    		if(number1=="" || number2==""){
    			noti="Bạn chưa nhập giá trị đầy đủ và chọn phép tính cho hai số";
    		}else{
    			if((!isNaN(number1)) && (!isNaN(number2))){
    				if(result==""&&isSub==0){
    					noti="Bạn chưa chọn phép tính cần thực hiện";
    				}
    			}else{
    				if(isNaN(number1)){
    			 		noti="Số thứ nhất không phải là kiểu số thực";
    			 	}else if(isNaN(number2)){
    			 		noti="Số thứ hai không phải là kiểu số thực";
    			 	}else{
    			 		noti="Số thứ nhất & số thứ hai không phải là kiểu số thực";
    			 	}
    			}
    		}

    	}
	}
	document.getElementById("noti").value = noti;
	document.getElementById("tvResult").value = result;
}