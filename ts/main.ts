window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}
/**
 * Change the color of the heading
 * when it is clicked to a random
 * color
 */
function changeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    heading.style.color = color;
}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");

    
    checkValidDate();
}

    // Validate date
function checkValidDate() {

    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    msgHeading.setAttribute("class", "message")
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 5000)

    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        //let errSpan = dobBox.nextElementSibling;
        //errSpan.innerHTML = "Format should be mm/dd/yyy";
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Format should be mm/dd/yyy";
    }
}

function isValidDate(input:string):boolean{
    //      validating mm/dd/yyyy && m/d/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);

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
