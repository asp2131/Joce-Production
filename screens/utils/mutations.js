const LOGIN = `
query ($id_google: String!) {
 	login(id_google: $id_google) {
    user {
            email
            profile_pic
            username
            bio
          }
    }
}      
        `;

const REGISTER = `
mutation ($email: String!, $username: String!, $id_google: String!, $profile_pic: String!, $bio: String!) {
  register(email: $email, username: $username, id_google: $id_google, profile_pic: $profile_pic, bio: $bio) {
   	user {
      email 
      username
      id_google
      profile_pic
      bio 
    }
  }
}`;
export default { LOGIN, REGISTER };
