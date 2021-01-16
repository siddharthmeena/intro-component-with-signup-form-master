function validateform(){  
    var name=document.myform.fname.value;  
    var password=document.myform.password.value;  
    var lastName=document.myform.lname.value;
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
     var flag =0
      
    if (name==null || name==""){  
      document.querySelector('#fnameWarning').style.display = "block"; 
      document.querySelector('#fname').style.borderColor = "red";
      document.querySelector('#fname').classList.add("extraClass");
      flag=1;  
    }
    if (lastName==null || lastName==""){  
        document.querySelector('#lnameWarning').style.display = "block"; 
        document.querySelector('#lname').style.borderColor = "red";
        document.querySelector('#lname').classList.add("extraClass");
        flag=1;  
      }

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){   
        document.querySelector('#ewarning').style.display = "block"; 
        document.querySelector('#email').style.borderColor = "red";
        document.querySelector('#email').classList.add("extraClass");
        flag=1
    } 
    if(password.length<6){  
        document.querySelector('#passwarning').style.display = "block";  
        document.querySelector('#password').style.borderColor = "red";
        document.querySelector('#password').classList.add("extraClass");
        flag=1;
      } 
      if(flag!=0){
          return false;
      } 
    }  