function setResults(){
    var person = new Object();

    person.firstName = document.getElementById("firstName").value;
    person.secondName = document.getElementById("secondName").value;

    var elements =  document.getElementsByName("gender");
    for(let i = 0; i< elements.length; i++){
        if (elements[i].checked) person.gender = elements[i].value;
    }

    person.date = document.getElementById("date").value;
    person.mail = document.getElementById("mail").value;
    

    var elements =  document.getElementById("town");
    person.town= elements.value;

    person.tel = document.getElementById("tel").value;

    person.question1 = '';
    var elements =  document.getElementsByClassName("question1");
    for(let i = 0; i< elements.length; i++){
        if (elements[i].checked)
        person.question1 += elements[i].value + "<br>";
    }

    person.question2 = '';
    var elements =  document.getElementsByClassName("question2");
    for(let i = 0; i< elements.length; i++){
        if (elements[i].checked)
        person.question2 += elements[i].value + "<br>";
    }

    var counter = localStorage.length;
    var keyName = "person" + String(counter);
    localStorage.setItem(keyName, JSON.stringify(person));
    
}

function getResults(){
    for (let i = 0; i < localStorage.length; i++){
        var tab = document.getElementById("resultTable");
        var newRow = tab.insertRow();        
        keyName = "person" + String(i);
        person = JSON.parse(localStorage.getItem(keyName));
        insertCellWithText(person.firstName, newRow);        
        // insertOption(person.question3);         
        insertCellWithText(person.secondName, newRow);
        insertCellWithCenteredText(person.gender, newRow);
        insertCellWithCenteredText(person.date, newRow);
        insertCellWithText(person.mail, newRow);
        insertCellWithCenteredText(person.town, newRow);
        insertCellWithCenteredText(person.tel, newRow);
        insertCellWithText(person.question1, newRow); 
        insertCellWithText(person.question2, newRow); 
    //    insertCellWithCenteredText(person.question3, newRow);
    //    insertCellWithText(person.question4, newRow);
    //    insertCellWithText(person.question5, newRow);    
    }
}    
   
function insertCellWithCenteredText(text, row){
   var newCell = insertCellWithText(text, row);
   newCell.classList.add('textAlignCenter');  
}

function insertCellWithText(text, row){
   var newCell = row.insertCell(); 
   newCell.innerHTML = text;
   return newCell;   
}

function insertOption(text){
   var newOption = new Option(text);
   allUsers.append(newOption);
}