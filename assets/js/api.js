
async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/ihaunt/Portfolio/main/assets/data/profile.json?token=GHSAT0AAAAAACIHZZ5PBJ6ZTQP4QSTJ4PJAZJWWAVA`;
    const fetching = await fetch(url)
    return await fetching.json()
}// conexão com API

