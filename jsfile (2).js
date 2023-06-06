function leap_year_range() {
    st_year = parseInt(prompt("enter starting year"));
    end_year= parseInt(prompt("enter end year"));
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

    year_range.forEach(
    function(year)
    { 
        if (test_LeapYear(year)) 
        new_array.push(year);
    });
    
    alert(new_array);
 }


function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } 
    else {
        return false;
    }
}

function addelements()
{
    let cars = ["BMW" ,"Mercedes", "Audi", "Hyundai", "Suzuki","Kia","Mahindra","Toyota","Honda"];
    var addtext = prompt(cars +"\nEnter a text");
    var pos=parseInt(prompt("Enter the position at which you want to add the text"));
    let newcars=cars.splice(pos,0,addtext);
    alert(cars)

}

function removeelements()
{
    let cars = ["BMW", "Mercedes", "Audi", "Hyundai", "Suzuki","Kia","Mahindra","Toyota","Honda"];
    console.log(cars);
    var pos=parseInt(prompt(cars+"\nEnter the position of the array you want to delete"));
    let newcars=cars.splice(pos,1);
    alert(cars)

}

function linearsearch(){
    let len = parseInt(prompt("Enter Array Size: "));
        let arr = [];
        for (let i = 0; i < len; i++) {
            let ele = parseInt(prompt("Enter element "+(i+1)));
            arr.push(ele);
        }

        let find = parseInt(prompt("Enter element to be searched - "));

        let index = -1;
        for (let i = 0; i < len; i++) {
            if (arr[i] === find) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            document.write("Element" +find +"not found.");
        } else {
            document.write(`Element ${find} found at index ${index}.`);
        }
}
