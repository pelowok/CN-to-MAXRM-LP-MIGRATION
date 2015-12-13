// **
// * One distributor per territory for new Max RM Direct trial forms
// * accepts: string (country_code)
// * returns: string (resellerid) || (empty string) [if no match is found]
// **
function max_trial_rm_get_direct_distributor(country_code) {

    var territory = max_trial_rm_get_direct_territory(country_code);

    var distributor_mapping = [
        {terr:'AUS', dist:'26'},
        {terr:'EU', dist:'52'},
        {terr:'FR1', dist:'21'},
        {terr:'HK', dist:'10'},
        {terr:'IE', dist:'9'},
        {terr:'UK', dist:'142'},
        {terr:'US', dist:'71'}
    ];

    // test will return false if the object or the value is not defined
    if (typeof(territory) == 'string') {

        for(var i = 0; i < distributor_mapping.length; i++){

            if ( distributor_mapping[i]['terr'] == territory ){

                var reply = 'RSLR4HD' + distributor_mapping[i]['dist'];
                return reply;

            }
        }
    }
    else {
        return '';
    };
}

// **
// * Get the territory by country, for RM direct
// * accepts: string (country_code)
// * returns: string (territory) || (empty string) [if no match is found]
// **
function max_trial_rm_get_direct_territory(country_code) {
    var territories = [
        {
            territory: 'UK',
            countrycode: ['chi', 'uk']
        },
        {
            territory: 'IE',
            countrycode: ['ie']
        },
        {
            territory: 'DE',
            countrycode: ['au', 'de', 'ch']
        },
        {
            territory: 'FR1',
            countrycode: ['fr']
        },
        {
            territory: 'EU',
            countrycode: ['al', 'am', 'az', 'by', 'be', 'dkb', 'ba', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fo', 'fi', 'ge', 'gr', 'gl', 'hu', 'is', 'il', 'it', 'kz', 'ks', 'kg', 'lv', 'lt', 'lux', 'mk', 'mt', 'md', 'me', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'rs', 'sk', 'si', 'za', 'es', 'se', 'tj', 'tr', 'tm', 'ua', 'uz', 'afr', 'eu']
        },
        {
            territory: 'US',
            countrycode: ['ai', 'ag', 'ar', 'aw', 'bs', 'bb', 'bz', 'bm', 'bo', 'anb', 'br', 'vg', 'ca', 'ky', 'cl', 'co', 'cr', 'anc', 'dm', 'do', 'ec', 'sv', 'gd', 'gp', 'gt', 'gy', 'ht', 'hn', 'jm', 'mq', 'mx', 'ms', 'an', 'ni', 'pa', 'py', 'pe', 'pr', 'bl', 'kn', 'lc', 'vc', 'mf', 'ans', 'sr', 'tt', 'tc', 'us', 'vi', 'uy', 've', 'oa']
        },
        {
            territory: 'AUS',
            countrycode: ['aus', 'fj', 'nz', 'pg', 'sb']
        },
        {
            territory: 'HK',
            countrycode: ['bh', 'cn', 'hk', 'in', 'id', 'jp', 'kw', 'my', 'mn', 'ph', 'qa', 'sg', 'tw', 'ae', 'asi']
        }
    ];

    var printArray = function (arr) {

        if (typeof(arr) === 'object') {

            for (var i = 0; i < arr.length; i++) {

                for (var j = 0; j < arr[i]['countrycode'].length; j++) {

                    if (arr[i]['countrycode'][j] == country_code) {

                        return arr[i]['territory'];

                    }
                }
            }
        }
    };

    return printArray(territories);

};