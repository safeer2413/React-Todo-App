import React from 'react'
import './viewPage.css'
import { IoReturnUpBackSharp } from 'react-icons/io5'

function ViewPage({ selectItem, goToList }) {

  const backButton = () => {
    goToList()
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const daysAgo = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    const formattedDate = date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    return `${formattedDate} (${daysAgo} days ago)`;
  };


  return (
    <>
      <div className="view-box">
        <button className='back-btn' onClick={backButton}>
          <span><IoReturnUpBackSharp /></span>Back
        </button>

        {selectItem && (
          <div className="timestamp-box">
            <strong>{formatDate(selectItem.timestamp)}</strong>
          </div>
        )}

        <h4>Item Details</h4>
        {selectItem ? <p className='view-items'>{selectItem.items}</p> : <p>No Item Selected</p>}

      </div>
    </>
  )
}

export default ViewPage 