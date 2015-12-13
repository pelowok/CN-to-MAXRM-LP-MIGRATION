
$(document).ready(function() {
    $.get( "https://www.maxfocus.com/geo/country", function( data ) {
        countryCode = data.toLowerCase();
        if (countryCode == "gb"){
            countryCode = "uk";
        }
        $("#country").val(countryCode.toUpperCase());
        $("#country").trigger("change");

        $("#distributor").val(max_trial_rm_get_direct_distributor(countryCode));

    });


});

$(document).ready(function() {
    $.get( "https://www.maxfocus.com/geo/country", function( data ) {
        countryCode = data.toLowerCase();
        if (countryCode == "gb"){
            countryCode = "uk";
        }
        $("#country").val(countryCode);
        $("#country").trigger("change");
        if(countryCode == "us"){
            $.get( "https://www.maxfocus.com/geo/region", function( data ) {
                regionCode = "US-"+data;
                $("#state").val(regionCode);
            });
        }
        if(countryCode == "ca"){
            $.get( "https://www.maxfocus.com/geo/region", function( data ) {
                regionCode = "CA-"+data;
                $("#state").val(regionCode);
            });
        }
    });
});