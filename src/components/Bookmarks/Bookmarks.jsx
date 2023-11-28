import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTIme}) => {
    console.log(bookmarks)
    return (
        <div className='md:w-1/3'>
            <div>
                <h3 className='text-4xl'> Reading Time : {readingTIme}</h3>
            </div>

            <h2>Bookmarked blogs :  {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                // console.log(bookmark)
            }
            
        </div>
    );
};




Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTIme:PropTypes.number
}

export default Bookmarks;