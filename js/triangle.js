function triangle (){
    // triangle base added
    const triangletext =document.getElementById('triangle-base');

    const trianglebase =  triangletext.value;
    const persflorts= parseFloat(trianglebase);
    // console.log( persflorts);

    // triangle  height added
    const triangletext2 = document.getElementById('triangle-height');
    const triangleheight = triangletext2.value;
    const persflorts2 = parseFloat(triangleheight);
    // console.log(persflorts2);
    // calculate
    const area = 0.5*persflorts*persflorts2;
    console.log(area);
    const calculateresult =document.getElementById('arearesult');
    calculateresult.innerText= area;

}