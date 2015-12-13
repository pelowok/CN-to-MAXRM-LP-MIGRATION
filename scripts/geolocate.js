/**
 * Created by pelowok on 12/4/15.
 */

// TODO: test for variable scope in geolocate script, can these vars be seen globally?
// TODO: test for document.element reference scope in geolocate script, does the class ref reach document?
// TODO: QA geolocate script now that it is moved into a module

$(document).ready(function () {
    $.get("https://www.maxfocus.com/geo/country", function (data) {
        $("#country").val(data);
        $("#country").trigger("change");
        if (data == "US") {
            $.get("https://www.maxfocus.com/geo/region", function (data) {
                regionCode = "US-" + data;
                $("#state").val(regionCode);
            });
        }
        if (data == "CA") {
            $.get("https://www.maxfocus.com/geo/region", function (data) {
                regionCode = "CA-" + data;
                $("#state").val(regionCode);
            });
        }
    });
    optIn();
});

function geoip_country_code() {
    console.log('' + window.country_code);
}

function geoip_country_name() {
    console.log(window.country_name);
}

function geoip_city() {
    console.log(window.country_name);
}

function optIn() {
    var countryname = $("#country").val();
    if (countryname == 'GB' ||
        countryname == 'CY' ||
        countryname == 'CZ' ||
        countryname == 'DK' ||
        countryname == 'EE' ||
        countryname == 'FI' ||
        countryname == 'DE' ||
        countryname == 'GR' ||
        countryname == 'HU' ||
        countryname == 'IS' ||
        countryname == 'IE' ||
        countryname == 'IT' ||
        countryname == 'LV' ||
        countryname == 'LI' ||
        countryname == 'LU' ||
        countryname == 'MT' ||
        countryname == 'FR' ||
        countryname == 'LT' ||
        countryname == 'ME' ||
        countryname == 'NL' ||
        countryname == 'NO' ||
        countryname == 'PL' ||
        countryname == 'PT' ||
        countryname == 'RO' ||
        countryname == 'RS' ||
        countryname == 'SK' ||
        countryname == 'SI' ||
        countryname == 'ES' ||
        countryname == 'SE' ||
        countryname == 'MK' ||
        countryname == 'TR') {
        $('#opt_mail').attr('checked', false);
    } else {
        $('#opt_mail').attr('checked', true);
    }
}