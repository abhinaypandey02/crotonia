import UserInterface, { defaultUser } from "../../interfaces/userInterface";
import fire from "./main";

export async function setUserFirestore(user: UserInterface) {
    return await fire.firestore().collection("users").doc(user.email).set(user);
}
export async function getUserFirestore(email: UserInterface['email']):Promise<UserInterface|null> {
    const doc = await fire
        .firestore()
        .collection("users")
        .doc(email)
        .get();
    if (doc && doc.exists) {
        const docData= doc.data() as UserInterface;
        return {...defaultUser,...docData};
    }
    return null;
}
