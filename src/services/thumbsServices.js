const baseUrl = process.env.REACT_APP_BASE_URL;

export const getCelebrities = () => {
    console.log(baseUrl)
    return fetch(baseUrl)
        .then(res => res.json());
};

export const postCelebrity = (name, description) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, description: description })
    }).then(res => res.json());
};

export const putCelebrity = (celebrity) => {
    return fetch(`${baseUrl}/${celebrity.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(celebrity)
    }).then(res => res.json());
};
