document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваш круиз успешно забронирован! Круиз: ' + document.getElementById('cruise').value +
          ', Тип каюты: ' + document.getElementById('cabin-type').value +
          ', Пассажиры: ' + document.getElementById('passengers').value +
          ', Дата: ' + document.getElementById('date').value);
});
