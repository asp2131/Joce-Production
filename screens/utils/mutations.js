const REGISTER = `
mutation ($email: String!, $username: String!, $id_google: String!, $profile_pic: String!, $bio: String!) {
  register(email: $email, username: $username, id_google: $id_google, profile_pic: $profile_pic, bio: $bio) {
   	user {
      email 
      username
      profile_pic
      bio 
    }
  }
}`;
export default { REGISTER };
