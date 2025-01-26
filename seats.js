function selectSeat(seatId) {
   const seat = document.getElementById(seatId);
   if (seat.classList.contains('selected')) {
       seat.classList.remove('selected');
       console.log(`Место ${seatId} отменено`);
   } else {
       seat.classList.add('selected');
       console.log(`Место ${seatId} выбрано`);
   }
}