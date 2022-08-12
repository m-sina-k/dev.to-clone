import { Row, Tooltip } from "components/layout";

interface PropTypes {
  postCover: string | null;
  setPostCover: (url: string | null) => void;
}

const AddCover: React.FC<PropTypes> = ({ postCover, setPostCover }) => {
  const handleSetPostCover = () => {
    const photoURL = prompt("آدرس URL عکس را وارد کنید:");
    if (photoURL) setPostCover(photoURL);
  };

  const removePostCover = () => setPostCover(null);

  return (
    <Row id="post-cover_container">
      {postCover ? (
        <div>
          <img src={postCover} alt="پیش-نمایش-کاور-پست" className="post-cover_preview" />
          <section id="button_contaier">
            <button className="cover_button" onClick={handleSetPostCover}>
              تغییر
            </button>

            <button className="cover_button cover_button--delete" onClick={removePostCover}>
              حذف
            </button>
          </section>
        </div>
      ) : (
        <button className="cover_button cover_button--add has_tooltip" onClick={handleSetPostCover}>
          <span>افزودن کاور پست</span>
          <Tooltip top="110%" className="editor_tooltip">
            برای کیفیت بهتر از مقیاس 100:42 استفاده کنید
          </Tooltip>
        </button>
      )}
    </Row>
  );
};

export default AddCover;
