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
}`;

export default { LOGIN };