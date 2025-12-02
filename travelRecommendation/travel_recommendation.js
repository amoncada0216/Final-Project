let destArray = {};

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();

    fetch('travel_recommendation_api.json')
        .then(response => {
            if (!response.ok) throw new Error('JSON not found');
            return response.json();
        })
        .then(data => {
            destArray = data;

            switch (query.toLowerCase()) {
                case 'beach':
                case 'beaches':
                    document.querySelectorAll('.location-cards').forEach(card => {
                        card.classList.remove('hidden');
                    });
                    document.querySelector('#card-one').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.beaches[0].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.beaches[0].name}</h2>
                        <p class="location-p">${destArray.beaches[0].description}</p>
                        `;

                    document.querySelector('#card-two').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.beaches[1].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.beaches[1].name}</h2>
                        <p class="location-p">${destArray.beaches[1].description}</p>
                        `
                    break;
                case 'city':
                case 'cities':
                case 'country':
                    document.querySelectorAll('.location-cards').forEach(card => {
                        card.classList.remove('hidden');
                    });
                    document.querySelector('#card-one').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.countries[0].cities[0].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.countries[0].cities[0].name}</h2>
                        <p class="location-p">${destArray.countries[0].cities[0].description}</p>
                        `;

                    document.querySelector('#card-two').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.countries[1].cities[1].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.countries[1].cities[1].name}</h2>
                        <p class="location-p">${destArray.countries[1].cities[1].description}</p>
                        `
                    break;
                case 'temple':
                case 'temples':
                    document.querySelectorAll('.location-cards').forEach(card => {
                        card.classList.remove('hidden');
                    });
                    document.querySelector('#card-one').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.temples[0].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.temples[0].name}</h2>
                        <p class="location-p">${destArray.temples[0].description}</p>
                        `;

                    document.querySelector('#card-two').innerHTML =
                        `
                        <div>
                            <img class="location-pic" src="${destArray.temples[1].imageUrl}" alt="">
                        </div>
                        <h2 class="location-h2">${destArray.temples[1].name}</h2>
                        <p class="location-p">${destArray.temples[1].description}</p>
                        `
                    break;
                default:
                    alert('Destination not found. Please try another location.');
            }
        })
        .catch(err => console.error('Failed to load destinations:', err));
}
);

document.getElementById('clear-btn').addEventListener('click', () => {
    document.querySelectorAll('.location-cards').forEach(card => {
        card.classList.add('hidden');
    });
});
