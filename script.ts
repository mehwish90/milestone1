const show =  document.getElementById('btnn')as HTMLButtonElement
const skill=document.getElementById('Skills')as HTMLElement

show.addEventListener('click' ,()=>{
    if(skill.style.display === 'none')
    {skill.style.display='block'}
    else{skill.style.display='none'}
})