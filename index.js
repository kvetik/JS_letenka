const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

const baglimit = {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
}

const exchangeRate = 36;
const secondBag_EUR = flight.bags_price[2];
const secondBag_CZK = Math.ceil(secondBag_EUR * exchangeRate);

/* 
document.body.innerHTML += '<p> Departure from: ' + flight.cityFrom + ', ' + flight.countryFrom.code + ' </p>';
document.body.innerHTML += '<p> Arrival to: ' + flight.cityTo + ', ' + flight.countryTo.code + ' </p>';
document.body.innerHTML += '<p> Allowed limits for hand bag: </p>' + 
                            '<p> Width: ' + baglimit.hand_width + ' cm </p>' +
                            '<p> Height: ' + baglimit.hand_height + ' cm </p>' +
                            '<p> Length: ' + baglimit.hand_length + ' cm </p>' +
                            '<p> Weight: ' + baglimit.hand_weight + ' kg </p>';
document.body.innerHTML += '<p> Cost for second bag: ' + secondBag_CZK + ' CZK</p>';
*/

document.body.innerHTML += `<h2>Departure from: </h2> ${flight.cityFrom}, ${ flight.countryFrom.code}`;
document.body.innerHTML += `<h2>Arrival to: </h2> ${flight.cityTo}, ${flight.countryTo.code}`;
document.body.innerHTML += `<h2>Allowed limits for hand bag: </h2>
                            <p>Width: ${baglimit.hand_width} cm</p>
                            <p>Height: ${baglimit.hand_height} cm</p>
                            <p>Length: ${baglimit.hand_length} cm</p>
                            <p>Weight: ${baglimit.hand_weight} kg</p>`;
document.body.innerHTML += `<p>Cost for second bag: ${secondBag_CZK} CZK</p>`;
