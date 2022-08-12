import { db } from "server/firebase.config";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  collection,
  query,
  where,
  documentId,
} from "firebase/firestore";

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
      errorMessage = "گذرواژه وارد شده معتبر نیست.گذرواژه باید حداقل 6 کاراکتر باشد.";
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
  return user;
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
    const docRef = doc(postsDbRef, post.postDetails.id);
    await setDoc(docRef, post);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchPostsFromFirestore = async () => {
  try {
    let posts = [];
    const postsSnapshot = await getDocs(postsDbRef);
    postsSnapshot.forEach((post) => posts.push(post.data()));
    return posts;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchPostById = async (id) => {
  try {
    let post;
    const postRef = doc(postsDbRef, id);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) post = postSnap.data();
    return post;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const toggleSavePost = async (userId, postId, operation) => {
  try {
    const docRef = doc(usersDbRef, userId);
    await setDoc(
      docRef,
      {
        readingList: operation === "add" ? arrayUnion(postId) : arrayRemove(postId),
      },
      {
        merge: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const reactToPost = async (postId, reactionType, operation, username, userId) => {
  try {
    const postRef = doc(postsDbRef, postId);
    await setDoc(
      postRef,
      {
        reactions: {
          [reactionType]: operation === "add" ? arrayUnion(username) : arrayRemove(username),
        },
      },
      { merge: true }
    );
    if (reactionType === "saves") toggleSavePost(userId, postId, operation);
  } catch (error) {
    console.log(error);
  }
};

export const submitComment = async (postId, comment) => {
  try {
    const postRef = doc(postsDbRef, postId);
    await setDoc(
      postRef,
      {
        reactions: {
          comments: arrayUnion(comment),
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateComments = async (postId, comments) => {
  try {
    const postRef = doc(postsDbRef, postId);
    await setDoc(
      postRef,
      {
        reactions: {
          comments,
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchSavedPosts = async (postsId) => {
  try {
    let posts = [];
    const q = query(postsDbRef, where(documentId(), "in", postsId));
    const postsSnapshot = await getDocs(q);
    postsSnapshot.forEach((doc) => {
      posts = [...posts, doc.data()];
    });
    return posts;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deletePost = async (postId) => {
  try {
    const docRef = doc(postsDbRef, postId);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};
