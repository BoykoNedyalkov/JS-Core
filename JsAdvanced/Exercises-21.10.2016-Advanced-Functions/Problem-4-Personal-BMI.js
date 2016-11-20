function result(name,age,weight,height) {
    let chart = {
        name:name,
        personalInfo: {
            age:age,
            weight:weight,
            height:height,
        },
        BMI: Math.round(weight/((height/100)*(height/100))),
    }
    if(chart.BMI <18.5)
         chart.status='underweight'
    else if(chart.BMI >=18.5 && chart.BMI <25)
        chart.status= 'normal';
    else if(chart.BMI >=25 && chart.BMI < 30)
        chart.status= 'overweight';
    else{
        chart.status= 'obese';
        chart.recommendation = 'admission required'
    }
    //console.log(chart)
    return chart

}
result('Honey Boo Boo', 9, 57, 137)
