console.log('test');

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');

//console.log(buttons);
console.log(images);

buttons.forEach(function(button){

    console.log(button);

        button.addEventListener('click',function(event){
            let clickedItem = event.target;
            let animal = clickedItem.getAttribute('animal');
            console.log(animal);
            images.forEach(function(currentImage){

                currentImage.parentElement.classList.add('hide');
                if(currentImage.classList.contains(animal) || animal == 'all'){
                   
                    //console.log(currentImage);
                    if(currentImage.parentElement.classList.contains('hide')){
                        currentImage.parentElement.classList.remove('hide');
                 }
                }
            });
        });
    });

