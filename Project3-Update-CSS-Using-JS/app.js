const inputs = document.querySelectorAll("input") ;

function handleChangeInput(e){
    const target = e.currentTarget ;
    const targetSize = target.dataset.sizing ;
    const value = targetSize ? `${target.value + targetSize}` : `${target.value}` ;
    document.documentElement.style.setProperty(`--${target.name}`, value) ;
}

inputs.forEach(input => input.addEventListener("change",handleChangeInput)) ;
inputs.forEach(input => input.addEventListener("mousemove",handleChangeInput)) ;