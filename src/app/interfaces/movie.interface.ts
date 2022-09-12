
interface Rating {
    rating?: number;
    numReviews?: number;
    meter?: number;
}

interface Tomatoes {
    viewer?: Rating;
    critic?: Rating;
    dvd?: string;
    website?: string;
    production?: string;
    lastUpdated?: string;
}

interface Award {
    wins?: number;
    nominations?: number;
    text?: string;
}

interface ImdbRating {
    rating?: number;
    votes?: number;
    id?: number;
}

export interface Movie {
    tomatoes?: Tomatoes;
    genres?: string[];
    cast?: string[];
    languages?: string[];
    directors?: string[];
    countries?: string[];
    _id?: string;
    plot?: string;
    runtime?: number;
    num_mflix_comments?: number;
    poster?: string;
    title?: string;
    lastupdated?: string;
    released?: string;
    writers?: string[];
    awards?: Award[];
    year?: number;
    imdb?: ImdbRating;
    type?: string;
    lasupdated?: string;
}

