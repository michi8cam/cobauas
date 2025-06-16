const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');
const promoButton = document.getElementById('promoButton');
const contactButton = document.getElementById('contactButon');
const menuList = document.getElementById('menuList');
const promoSection = document.getElementById('promoSection');
const contactSection = document.getElementById('contactSection');

function toggleSection(section, button, showText, hideText) {
       }

homeButton.addEventListener('click', function() {
    location.reload();


const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Americano','Cappucino','Latte','Butterscoth','Matcha','Cheese Cake'],
        datasets: [{
            label: 'Penjualan Bulan Ini',
            data: [50, 70, 60, 30, 40],
            backgroundColor: [
                '#8D6E63',
                '#A1887F',
                '#D7CCC8',
                '#C5E1A5',
                '#FFE082'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
