window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    //isTextPresent("first-name", "First name is required.");
    //isTextPresent("last-name", "Last name is required.");
}

/**
 * resets all the spans
 * to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");

    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText =  "*";
        }
        else{
            currSpan.innerText =  "";
        }
    }
}

/**
 * return true if the text box with the given id 
 * has text inside of it.
 * 
 * @param id The id of the <input type="text" to validate>
 * @param errMsg The message to display in the sibling spa of 
 * the text box.
 * @returns 
 */
 
 
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);

    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = 
        <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }

    return true;
}
