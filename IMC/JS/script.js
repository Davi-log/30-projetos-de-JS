const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = "Cuidado! Você está abaixo do peso!"
    } else if(bmi >= 18.5 && bmi<= 25){
        description = "Você está no peso normal!"
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if(bmi >= 25 && bmi <= 29){
        description = "Cuidado! Você está acima do peso!"
    } else if(bmi >= 29 && bmi <= 34){
        description = "Cuidado! Você está com Obesidade tipo 1!"
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});