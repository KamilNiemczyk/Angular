
const fetchWithRetries = (url, retries) => {
    return new Promise((resolve, reject) => {
        const fetchUrl = async (url, retries) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                resolve(data);
            } catch (error) {
                if (retries > 0) {
                    fetchUrl(url, retries - 1);
                } else {
                    reject(error);
                }
            }
        };
        fetchUrl(url, retries);
    });
};

fetchWithRetries('https://api.example.com/data', 3)
  .then(data => console.log(data))
  .catch(error => console.error('Failed to fetch data:', error));