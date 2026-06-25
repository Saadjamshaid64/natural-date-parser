import * as chrono from "chrono-node";
import moment from "moment-timezone";
import ct from "countries-and-timezones";

export default function smartParse(input, countryInput) {
    if (!input) {
        return {
            success: false,
            error: "Input required"
        };
    }

    if (!countryInput) {
        return {
            success: false,
            error: "Country required"
        };
    }

    const searchValue = countryInput.trim();

    // Try ISO country code first
    let country = ct.getCountry(searchValue.toUpperCase());

    // If not found, try country name
    if (!country) {
        country = Object.values(ct.getAllCountries()).find(
            c => c.name.toLowerCase() === searchValue.toLowerCase()
        );
    }

    if (!country) {
        return {
            success: false,
            error: "Invalid country code or country name"
        };
    }

    const parsedDate = chrono.parseDate(input);

    if (!parsedDate) {
        return {
            success: false,
            error: "Invalid date expression"
        };
    }

    const timezone = country.timezones[0];

    return {
        success: true,
        input,
        country: country.name,
        code: country.id,
        timezone,
        date: moment(parsedDate)
            .tz(timezone)
            .format("YYYY-MM-DD HH:mm:ss")
    };
}