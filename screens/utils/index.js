import Firebase from './Firebase'
import { FirebaseProvider, withFirebaseHOC } from './FirebaseContext'
import mutations from './mutations'
import queries from './queries'
import AppStyles from './AppStyles'

export default Firebase

export { FirebaseProvider, withFirebaseHOC, mutations, queries, AppStyles  }