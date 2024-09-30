async function gettoken() {
    const response = await fetch("https://rec.net/api/auth/session");
    const d = await response.json();
    return d.accessToken;
}
async function cheer() {
    const session = await gettoken();

    fetch("https://api.rec.net/api/PlayerCheer/v1/SetSelectedCheer", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + session,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "CheerCategory=900",
        mode: "cors"
    });
}
cheer();