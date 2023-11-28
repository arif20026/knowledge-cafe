import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] =useState([])
  const [readingTIme, setReadingTime]=useState(0)

  const handleAddToBookmark =blog =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
    
  }

  const handleMarkAsRead =(id,time )=> {
    const newReadingTime = readingTIme + time
    setReadingTime(newReadingTime)

    // bujhi ni aita removing mark as read bookmark
    const remainingBookmarks=bookmarks.filter(bookmark => bookmark.id !==id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>

    <div className='max-w-7xl m-auto'>

    <Header ></Header>
     <div className='md:flex '>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTIme={readingTIme}></Bookmarks>
     </div>
     

    </div>
     
     
    </>
  )
}

export default App
