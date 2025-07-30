const URL = "https://apilayer.net/api/validate";

const OPTIONS = {
    method : "GET",
}

const call = async () => {
    await fetch(URL, OPTIONS)
        .then(response => {
            if (response.status == 200) { response.json() }
            else { console.log("HTTP-Status-Error: " + response.status) }
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
        .finally();
}

const call2 = async () => {
    try {
        const response = await fetch(URL, OPTIONS);
        const data = await response.status == 200 ? response.json() : console.log("HTTP-Status-Error: " + response.status);
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
    finally {

    }
}

const call3 = new Promise(resolve, reject) => {
    resolve: (
        response => fetch(URL, OPTIONS)
    )
}

call();