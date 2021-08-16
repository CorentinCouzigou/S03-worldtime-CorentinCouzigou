
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc') 
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)
const advancedFormat = require('dayjs/plugin/advancedFormat');
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/fr');
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);
dayjs.locale('fr');

const capitalCities = require ('./capitalCities');

function fuseaux (req, res){
for (let city of capitalCities){
        if (req.url === `/city/${city.name}`){
            res.send(`<h1>Fuseau horaire de ${city.name}:</h1><span>${dayjs().tz(city.tz).format('dddd D MMMM YYYY HH:mm:ss')}</span><style>span{border:2px solid orange; background-color:white;padding:0.8rem;border-radius:1.5rem;color:gray}h1{background-color:gray;color:orange;font-size:2rem;padding:1rem;}</style>`);
            };   
    };
    res.status(404);
    res.send('<h1>Page not found</h1>')
    res.end();
};

module.exports = fuseaux;