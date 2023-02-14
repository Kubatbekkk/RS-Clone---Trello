import React from 'react';

function BoardTitle({
  title,
  handleBoardClick,
}: { title: string, handleBoardClick: ReturnType<typeof Function> }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => handleBoardClick()}
      className='bg-info border border-1 rounded shadow'
      style={{ width: '150px', height: '150px', background: 'lightgray' }}
    >
      <div className='link-light fs-5 text-center'>
        <span>
          {title}
        </span>
      </div>
    </div>
  );
}
export default BoardTitle;
