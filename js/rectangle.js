
function rectangle (){
    // rectangle width set
    const recrtangletext =document.getElementById('rectangle-width');
    const recrtanglwidth = recrtangletext.value ;
    const rectangle_result = parseFloat(recrtanglwidth);
    // console.log(rectangle_result);
    // rectangle i set
    const recrtangletext2= document.getElementById('rectangle-l');
    const recrtangl_l= recrtangletext2.value ;
    const rectangle_result2 = parseFloat(recrtangl_l);
    // console.log(rectangle_result2);
     
    // calculate
    const area = rectangle_result*rectangle_result2;
    console.log(area);
    const displyreasult =document.getElementById('arearesult2');
    displyreasult.innerText = area;

}