const LOGIN = `
        mutation ($email: String!, $id_google:String!) {
            login(email: $email, id_google: $id_google) {
   	          user {
                email,
                id_google 
             }
            }
          }       
        `;

export default {LOGIN};