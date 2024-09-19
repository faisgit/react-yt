import { Client, Account, OAuthProvider } from "appwrite";
import { conf } from "../../conf/config";
const client =  new Client()

client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(conf.appwriteProjectId)

export const account = new Account(client)

