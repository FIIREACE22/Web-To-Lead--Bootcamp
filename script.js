function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log(inputdate.value);

    let formatedddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatedddate;
}