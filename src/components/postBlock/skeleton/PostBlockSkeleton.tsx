import { SkeletonBlock } from "./PostSkeleton.style";

const PostBlockSkeleton = () => {
  return (
    <SkeletonBlock>
      <section className="cover_placeholder skeleton"></section>
      <div className="wrapper">
        <div className="user_info_container">
          <section className="user_image skeleton"></section>
          <section className="user_info skeleton">
            <p className="text username skeleton"></p>
            <p className="text date skeleton"></p>
          </section>
        </div>

        <p className="text title skeleton"></p>

         <section className="tags">
          <span className="tag skeleton"></span>
          <span className="tag skeleton"></span>
          <span className="tag skeleton"></span>
        </section> 
      </div>
    </SkeletonBlock>
  );
};

export default PostBlockSkeleton;
