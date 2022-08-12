import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { useAppDispatch } from "app/store";
import { updateProfile, setUpdateStatus, getAuthState } from "features/authSlice";

import { Block, Input, Textarea } from "components/layout";
import { ButtonCTA } from "components/utils/Buttons";

interface PropTypes {
  currentUser: {
    displayName: string;
    username: string;
    photoURL: string;
    id: string;
    bio: string;
  };
}

const ProfileSettings: React.FC<PropTypes> = ({ currentUser }) => {
  document.title = "پروفایل - انجمن توسعه دهندگان";

  const dispatch = useAppDispatch();
  const { updateProfileLoading } = useSelector(getAuthState);
  const { displayName, username, bio, id, photoURL } = currentUser;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bioInputRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState<string>(displayName || "");
  const [newUsername, setNewUsername] = useState<string>(username);
  const [biography, setBiography] = useState<string>(bio || "");
  const [profilePic, setProfilePic] = useState<string>(photoURL);

  const validateUsername = (username: string) => {
    return /^[a-z0-9._-]{5,15}$/i.test(username);
  };

  const handlePicUpload = () => {
    const fileReader = new FileReader();
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files[0].type.startsWith("image/")) {
      fileReader.readAsDataURL(fileInput.files[0]);
      fileReader.addEventListener("load", (e: any) => {
        const uploadedImage = e.target.result;
        setProfilePic(uploadedImage);
      });
    }
  };

  const handleProfileDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUpdateStatus(null));
    const usernameIsValid = validateUsername(newUsername);

    if (usernameIsValid) {
      dispatch(
        updateProfile({
          id,
          name,
          username: newUsername,
          bio: biography,
          photoURL: profilePic,
        })
      );
    } else {
      window.scrollTo(0, 0);
      dispatch(
        setUpdateStatus({
          variant: "danger",
          msg: "خطا: نام کاربری معتبر نیست.",
        })
      );
    }
  };

  return (
    <Block className="profile_details_block">
      <section className="heading">
        <h3 className="title">مشخصات کاربری</h3>
      </section>

      <form action="#" id="acc_details_form" onSubmit={handleProfileDetailsSubmit}>
        {/* display name */}
        <section className="form_group">
          <label htmlFor="display-name">نام</label>
          <Input name="display-name" value={name} onChange={(e) => setName(e.target.value)} />
        </section>

        {/* username */}
        <section className="form_group">
          <label htmlFor="username">نام کاربری</label>
          <Input
            name="username"
            value={newUsername}
            className="ltr"
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </section>

        {/* biography */}
        <section className="form_group">
          <label htmlFor="bio">بیوگرافی</label>
          <Textarea
            name="bio"
            value={biography}
            maxLength={200}
            ref={bioInputRef}
            onChange={(e) => setBiography(e.target.value)}
          />

          {bioInputRef.current && (
            <p className="character_count">{bioInputRef.current.value.length} / 200</p>
          )}
        </section>

        {/* profile picture */}
        <section className="form_group">
          <label htmlFor="profile-pic_input">عکس پروفایل</label>
          <section id="profile-pic_container">
            <img src={profilePic} alt={displayName} id="profile_pic" />
            <input
              type="file"
              name="profile-pic_input"
              id="profile-pic_input"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePicUpload}
            />
          </section>
        </section>

        {updateProfileLoading ? (
          <ButtonCTA type="button" p="0.5rem 1.5rem" className="loading_button">
            <Oval width={25} height={25} color="white" />
          </ButtonCTA>
        ) : (
          <ButtonCTA type="submit" id="form_submit" p="8px 0">
            ذخیره اطلاعات حساب کاربری
          </ButtonCTA>
        )}
      </form>
    </Block>
  );
};

export default ProfileSettings;
