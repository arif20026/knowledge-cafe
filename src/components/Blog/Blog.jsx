import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    // console.log(blog)
    const {id,title,cover_pic,author,author_img,posted_date,reading_time,hash_tags} =blog

    return (
        <div className='mb-20 space-y-2' >
            <h2 className='text-4xl'>{title}</h2>
            <img className='w-full'  src={cover_pic} alt="" />

            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-16 rounded-full '  src={author_img} alt="" />

                    <div className='pl-4'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                        <p>
                        {
                            hash_tags.map((hash,idx) => <span key={idx}> <a href=""> #{hash} </a>  </span>)
                        }
                    </p>

                    <button onClick={() => handleMarkAsRead(id,reading_time)}>Mark as read</button>
                    </div>
                   

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='pl-4' > <IoBookmarksOutline /></button>
                </div>
            </div>
            
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func

}

export default Blog;