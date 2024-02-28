let count=0;
drop.classList.add('d-none')

function hello()
{
    let drop=document.getElementById('drop');
    count=count+1;

    if(count%2!==0)
    {
        drop.classList.add('drop-down')
        drop.classList.remove('d-none')
        console.log('1')
    }
    else{
        drop.classList.add('d-none')
        drop.classList.remove('drop-down')
    }
    
}