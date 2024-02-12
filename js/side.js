var startValue, endValue, resultNumbers, resultHeader;

function GetValues(){
 startValue= document.getElementById("startNumber").value;
 endValue= document.getElementById("endNumber").value;
 resultNumbers = document.getElementById("resultNumbers");
 resultHeader = document.getElementById("resultheader");
}

function ValidateValues(){
    GetValues();
    if(endValue < startValue)
    {
        alert("End value can't be lower than start value");
        return false;
    }

    if(endValue == '' || startValue == '')
    {
        alert("Please, enter a start and end value.");
        return false;
    }

    return true;
}

function DisplayNumbers(){
    if(!ValidateValues())
    {
        return;
    }
    
    resultHeader.innerText = "Results";
    for(let i = startValue; i <= endValue; i++)
    {
        var newRow = document.createElement("tr");
        var td = document.createElement("td");
        if(i % 2 == 0)
        {
            td.classList.add("fw-bold");
        }

        td.textContent = i;
        newRow.appendChild(td);
        resultNumbers.appendChild(newRow);
    }
}