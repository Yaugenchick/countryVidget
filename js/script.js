const Country = function () {
    const show = function (data) {
        if(!data) return;

       let wraper = document.querySelector('.wraper');
            wraper.innerHTML = '';
            img = document.createElement('img');
            img.classList.add('img');
            img.src = data[0].flag;

            let h3 = document.createElement('h3'),
                divCapital = document.createElement('div'),
                divMoney = document.createElement('div'),
                divDomain = document.createElement('div'),
                divPopulation = document.createElement('div'),
                divBlock = document.createElement('div'),
                divWraperList = document.createElement('div');
                divWraperList.classList.add('add')
                
         
            h3.innerHTML = `${data[0].name}`;
            divCapital.innerHTML =`столица: ${data[0].capital}`;
            divMoney.innerHTML = `валюта: ${data[0].currencies[0].name}`;
            divDomain.innerHTML = ` доменное имя: ${data[0].topLevelDomain}`;
            divPopulation.innerHTML = `население: ${data[0].population}`;
            divBlock.innerHTML = `часть света: ${data[0].subregion}`;
                             
          divWraperList.appendChild(img);   
          divWraperList.appendChild(h3);
          divWraperList.appendChild(divMoney);   
          divWraperList.appendChild(divDomain);
          divWraperList.appendChild( divPopulation);
          divWraperList.appendChild( divBlock);

          wraper.appendChild(divWraperList);
       
        console.log(data[0]);
    };
    const getCountry = async function (param) {
        if(!param) return;

        let url = 'https://restcountries.eu/rest/v2/name/'+param;
        await fetch(url)
        .then(response => response.json())
        .then(result => show(result));
    };

    const searchInfo = function () {
        let input = document.querySelector('input[name="name"]').value;
        return getCountry(decodeURIComponent(input));   //не работает  decodeURIcomponent
    };                                                 

    let button = document.querySelector('.send');
    button.addEventListener('click', searchInfo);
};

window.addEventListener('load', function () {
    new Country ();
});