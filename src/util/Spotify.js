
const userAccessToken;
const Spotify = {
    getAccessToken(){
        if(userAccessToken){
            return userAccessToken;
        }

        //check for an access token match
        const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/);
        const expiresInmatch = window.location.href.match(/expires_in=([^&]*)/);

        //if token and expires exists in url 
        if(accessTokenMatch && expiresInmatch){
            userAccessToken = accessTokenMatch[1];
            let expiresIn = Number(expiresInmatch[1]);

            // This clears the parameters, allowing us to grab a new access token when it expries.
            window.setTimeout(()=> userAccessToken = '', expiresIn *1000);
            window.history.pushState('Access Token', null,'/');
            return userAccessToken;
        }else{
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    }
};
export default Spotify;