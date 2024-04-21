const options = {
    bottom: '64px',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixcolor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorRight: '#fff',
    saveInCookies: false,
    label: '',
    Image: src='./images/logo.png'
} 

const darkmode = new Darkmode(options);
darkmode.showWidget();


const TOKEN = "";
const CHAT_ID = "";


document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();
})