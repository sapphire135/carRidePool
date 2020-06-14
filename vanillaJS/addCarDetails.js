import { carOwnerDetails } from './mockJson.js'

var carDetails = Object.values(carOwnerDetails())
var rideInternal = document.getElementById('rideInternal')

for (var i = 0; i < carDetails.length; i++) {
    var carDetail = carDetails[i]
    console.log('carDetail', carDetail)
    var ride = `<div id="${carDetail.id}" class='container flex-row' style = "width: 35%; background-color: white; margin: 10px; cursor: pointer;">
    <img id="profile-${carDetail.id}" src="images/profile.png" alt="profile" width="50" height="50">
    <img id="tick-${carDetail.id}" src="images/tick.png" alt="profile" width="50" height="50" style="display: none;">
        <div class="flex-column  width-100">
            <div class="flex-row width-100" style="justify-content: space-between">
                <div class='flex-row'>
                    <label>"${carDetail.name}"</label>
                    <p style="font-size: 10px;">&nbsp; "${carDetail.awayTime}"</p>
                </div>
                <div class='flex-row'>
                    <label>"${carDetail.rating}" | &nbsp;</label>
                    <img src="images/star.png" alt="star" width="15" height="15">
                </div>
            </div>

            <div class='flex-row' style="height: 20px;">
                <p style="font-size: 12px;">route: </p>
                <p style="font-size: 12px; font-style: italic;">&nbsp; "${carDetail.route}"</p>
            </div>
            <div class='flex-row' style="height: 20px;">
                <p style="font-size: 12px;">car: </p>
                <p style="font-size: 12px; font-style: italic;">&nbsp; "${carDetail.car}"</p>
                <p style="font-size: 12px;">&nbsp;&nbsp;seat available: </p>
                <p style="font-size: 12px; font-style: italic;">&nbsp; "${carDetail.seatsAvailable}"</p>
            </div>
        </div>
    </div>`
    rideInternal.insertAdjacentHTML("beforeend", ride);

    var myLink = document.getElementById(carDetail.id);

    myLink.onclick = function (x) {
        var t = 'tick-' + x.currentTarget.id
        var p = 'profile-' + x.currentTarget.id
        if (document.getElementById(t).style.display === 'none') {
            document.getElementById(t).style.display = 'block'
            document.getElementById(p).style.display = 'none'
        } else {
            document.getElementById(t).style.display = 'none'
            document.getElementById(p).style.display = 'block'
        }

    }
}