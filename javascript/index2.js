let infokosong = document.getElementById('info-kosong');
let infoterisi = document.getElementById('info-terisi');
let slotsatu = document.getElementById('slot1');
let slotdua = document.getElementById('slot2');
let slottiga = document.getElementById('slot3');
let slotempat = document.getElementById('slot4');


firebase.database().ref('ultrasonik2/').on('value', function(snapshot) {
    if (snapshot.exists()) {
        let data = snapshot.val();
        let keys = Object.keys(data);
        let statuss = keys.map(key => JSON.stringify(data[key]));
        let nol = statuss.filter(function(value){
            return value === '"0"';
        }).length;
        let satu = statuss.filter(function(value){
            return value === '"1"';
        }).length;
        infokosong.innerHTML = nol;
        infoterisi.innerHTML = satu;

        keys.forEach(function(key) {
            if(data[key] == '0'){
                switch(key){
                    case 'slot1':
                        slotsatu.style.backgroundColor = '#00FF38';
                        
                        break;
                    case 'slot2':
                        slotdua.style.backgroundColor = '#00FF38';
                        
                        break;
                    case 'slot3':
                        slottiga.style.backgroundColor = '#00FF38';
                        
                        break;
                    case 'slot4':
                        slotempat.style.backgroundColor = '#00FF38';
                        
                        break;
                }        
            } 
            else if(snapshot.val()[key] == '1'){
                switch(key){
                    case 'slot1':
                        slotsatu.style.backgroundColor = '#FF0000';
                        
                        break;
                    case 'slot2':
                        slotdua.style.backgroundColor = '#FF0000';
                        
                        break;
                    case 'slot3':
                        slottiga.style.backgroundColor = '#FF0000';
                        
                        break;
                    case 'slot4':
                        slotempat.style.backgroundColor = '#FF0000';
                        
                        break;
                }   
            }
        })
    }});



