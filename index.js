

const input = document.getElementById('input').value;
const link = `http://api.qrserver.com/v1/create-qr-code/?data=${input}&size=200x200`;
let content = `<p>scan the QR code to visit ${input}</p><img src="${link}" alt="no img here"></img>`;


document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('img').innerHTML = content;
})




