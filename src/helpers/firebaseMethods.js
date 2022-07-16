import { db } from "server/firebase.config";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";

const usersDbRef = collection(db, "users");
const postsDbRef = collection(db, "posts");

export const setAuthErrorMessage = (errorCode) => {
  let errorMessage;
  switch (errorCode) {
    case "auth/email-already-in-use":
      errorMessage = "ایمیل وارد شده قبلا ثبت شده است.";
      break;
    case "auth/invalid-email":
      errorMessage = "ایمیل وارد شده معتبر نیست.";
      break;
    case "auth/invalid-password":
      errorMessage =
        "گذرواژه وارد شده معتبر نیست.گذرواژه باید حداقل 6 کاراکتر باشد.";
      break;
    case "auth/user-not-found":
      errorMessage = "کاربری با مشخصات وارد شده یافت نشد.";
      break;
    default:
      errorMessage =
        "خطا در برقراری ارتباط با سرور، لطفا اتصال VPN خود را بررسی کنید یا بعدا تلاش کنید.";
      break;
  }
  return { message: errorMessage, errorCode };
};

export const registerUserInFirestore = async (userCredentials) => {
  try {
    await setDoc(doc(usersDbRef, userCredentials.id), userCredentials);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchUserInfo = async (userId) => {
  let user;
  const docRef = doc(usersDbRef, userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) user = docSnap.data();
  const { username, photoURL, displayName, bio, id, email } = user;
  return { username, photoURL, displayName, bio, id, email };
};

export const updateProfileInfo = async (profileData) => {
  try {
    const { bio, photoURL, name, username, id } = profileData;
    const docRef = doc(usersDbRef, id);
    await setDoc(
      docRef,
      {
        bio,
        photoURL,
        username,
        displayName: name,
      },
      {
        merge: true,
      }
    );
    const newUserProfile = await fetchUserInfo(id);
    return newUserProfile;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const uploadNewPost = async (post) => {
  try {
    const docRef = doc(postsDbRef, post.postId);
    await setDoc(docRef, post);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
