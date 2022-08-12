import { useState } from "react";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";

import { deletePost } from "helpers/firebaseMethods";

import { ButtonCTA } from "components/utils/Buttons";
import { Block } from "components/layout";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  .modal {
    min-width: 500px;
    width: max-content;
    max-width: 100%;
    height: 100px;

    .button_container {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;

      .modal_button {
        padding: 0.35rem 1.5rem;
        margin: 0 0.5rem;
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;

        &--confirm {
          color: white;
          background-color: ${({ theme }) => theme.layout.global_colors.red};
        }
        &--cancel {
          background-color: ${({ theme }) => theme.colors.body};
        }
      }
      .delete_loading {
        background: ${({ theme }) => theme.layout.global_colors.red};
      }
    }
  }
`;

interface PropTypes {
  postTitle: string;
  postId: string;
  showModal: boolean;
  closeModal: () => void;
}

const DeletePostConfirmation: React.FC<PropTypes> = ({
  postId,
  postTitle,
  showModal,
  closeModal,
}) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeletePost = async () => {
    setDeleteLoading(true);
    await deletePost(postId);
    closeModal();
    setDeleteLoading(false);
    window.location.pathname = "/";
  };

  return showModal ? (
    <ModalStyle onClick={(e) => e.preventDefault()}>
      <Block className="modal">
        <p className="modal_message">آیا از حذف پست "{postTitle}" اطمینان دارید؟</p>
        <section className="button_container">
          <button className="modal_button modal_button--cancel" onClick={closeModal}>
            لغو
          </button>
          {deleteLoading ? (
            <ButtonCTA p="0.5rem 1.5rem" className="loading_button--inline delete_loading">
              <Oval width={15} height={15} color="white" />
            </ButtonCTA>
          ) : (
            <button className="modal_button modal_button--confirm" onClick={handleDeletePost}>
              تایید
            </button>
          )}
        </section>
      </Block>
    </ModalStyle>
  ) : null;
};

export default DeletePostConfirmation;
