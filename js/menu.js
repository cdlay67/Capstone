function showToggle(){
    var visibility = document.getElementById('option').style.visibility;

    if(visibility == 'hidden'){
        document.getElementById('option').style.visibility = 'visible';
    }
    else{
        document.getElementById('option').style.visibility = 'hidden';
    }
}

document.getElementById('select').addEventListener('click', showToggle);
