
const box = document.querySelector('.box');
const select = document.getElementById('select');
let url = 'https://islomapi.uz/api/present/day?region=Toshkent';


select.addEventListener('change', (e) => {
    let url = `https://islomapi.uz/api/present/day?region=${e.target.value}`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const { tong_saharlik,quyosh,peshin,asr,shom_iftor,hufton} = data.times;
        box.innerHTML = `
        <h2>tong:${tong_saharlik}</h2>
        <h2>quyosh: ${quyosh}</h2>
        <h2>peshin :${peshin}</h2>
        <h2>asr: ${asr}</h2>
        <h2>shom: ${shom_iftor}</h2>
        <h2>hufton: ${hufton}</h2>
        `
    })
    })