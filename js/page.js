//Charts
let ctx = document.getElementById("monthlySales").getContext('2d');
let pie = document.getElementById("deptSales").getContext('2d');
let yearlyLabel = document.getElementById("yearlyTotal");

//create an array from a list of args
let monthlySales = Array.of(500,1200,3000);
let monthlyLabels = Array.of('Oct','Nov','Dec');
let deptSales = Array.of(12,9,3);
let deptLabels = Array.of('Hiking','Running','Hunting');
//creating an array like "Array(5);"" you will not create an array with index 0 holding a 5 but an array with 5 indices.

function addYearlyTotal(a,b,c){
    return a+b+c;
}
//some examples of how you can use spread operators
let octNums = Array.of(700,1000,9000);
let novNums = Array.of(1541,1900,7500);
let decNums = Array.of(2200,2500,9800);

let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));

let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = `$${yearlyTotal}`;

//on Find Over $1000 button click
function findOver1000(){
    //find a specific array element
    let firstThousand1 = monthlySales.find(element => element > 1000);
    console.log(firstThousand1);
    //find index of specific array element
    let firstThousand = monthlySales.findIndex(element => element > 1000);
    console.log(firstThousand);
}

var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Pie (note that ChartJS wants var instead of let)
var deptSalesChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {

    }
})