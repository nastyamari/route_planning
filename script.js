function planRoute() {
  var startLocation = document.getElementById('start-location').value;
  var endLocation = document.getElementById('end-location').value;

  var routeDetails = document.getElementById('route-details');
  routeDetails.innerHTML = 'Маршрут запланирован от ' + startLocation + ' до ' + endLocation;
}

function bookHotel() {
  var hotelName = document.getElementById('hotel-name').value;
  var checkInDate = document.getElementById('check-in-date').value;
  var checkOutDate = document.getElementById('check-out-date').value;
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(checkInDate)) {
    alert("Пожалуйста, введите дату въезда в формате ГГГГ-ММ-ГГ");
    return;
  }
  else if (!dateRegex.test(checkOutDate)) {
    alert("Пожалуйста, введите дату выезда в формате ГГГГ-ММ-ГГ");
    return;
  }

  if (checkInDate > checkOutDate)
  {
    alert("Дата въезда не может быть раньше даты выезда");
    return;
  }


  var hotelBookingDetails = document.getElementById('hotel-booking-details');
  hotelBookingDetails.innerHTML = 'Отель ' + hotelName + ' забронирован с ' + checkInDate + ' по ' + checkOutDate;
}

function addItem() {
  var itemName = document.getElementById('item-name').value;
  var itemList = document.getElementById('item-list');

  var li = document.createElement('li');
  li.innerText = itemName;
  itemList.appendChild(li);

  document.getElementById('item-name').value = ''; // Очистка поля ввода после добавления предмета в список.
}

function shareRoute() {
  var sharedRoute = document.getElementById('route-share').value;

  var sharedRoutes = document.getElementById('shared-routes');
  var div = document.createElement('div');
  div.innerHTML = sharedRoute;
  sharedRoutes.appendChild(div);
}
