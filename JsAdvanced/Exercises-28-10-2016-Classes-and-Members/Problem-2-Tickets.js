function main(arr,criteria) {
    let arrOfTickets = [];
    class Ticket {
        constructor(destination = '',price = 0,status = ''){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        static sortArr(a,b){
            if(criteria == 'destination'){
                if(a.destination.localeCompare(b.destination) == 0){
                    return -1
                }
                else
                    return a.destination.localeCompare(b.destination);

            }
            else if(criteria == 'status'){
                if(a.status.localeCompare(b.status) == 0){
                    return -1
                }
                else
                    return a.status.localeCompare(b.status);
            }
            else if(criteria == 'price'){
                if(Number(a.price) - Number(b.price) == 0){
                    return -1
                }
                else
                    return Number(a.price) - Number(b.price);
            }
        }

    }
    for(let line of arr){
        let [destination,price,available] = line.split('|');

        let obj = new Ticket(destination,Number(price),available);
        arrOfTickets.push(obj)


    }
    arrOfTickets.sort(Ticket.sortArr);
    console.log(arrOfTickets);
return arrOfTickets;
}
main(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed',
        'Boston|1|departed'],
    'price')