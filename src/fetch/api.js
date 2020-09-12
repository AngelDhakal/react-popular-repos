export const fetchPopularRepos = (language) => {
    const url = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    // const url = window.encodeURI(`https://api.github.com/users/angeldhakal/repos`);
    return fetch(url)
        .then(res => res.json())
        .then((data) => {
            if (!data.items) {
                throw new Error(data.message);
            }
            return data.items;
        })
}