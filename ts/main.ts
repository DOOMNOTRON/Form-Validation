window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
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
