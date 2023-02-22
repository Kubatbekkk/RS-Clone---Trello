import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewBoard from 'src/components/Sidebar/NewBoard';
import Empty from 'src/assets/empty.png';
import { StyledEmptyImage } from './styles';
import Button from '../Button';

interface IEmptyImage {
  emptyBoard?: boolean;
  emptyText1: string;
  emptyText2: string;
}

const EmptyImage = ({ emptyText1, emptyText2, emptyBoard }: IEmptyImage) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <NewBoard open={menuOpen} onClose={() => setMenuOpen(false)} />
      <StyledEmptyImage>
        <img src={Empty} alt="empty-board" />
        <p>{emptyText1}</p>
        <p>{emptyText2}</p>
        {
            emptyBoard && (
            <Button
              text='+ Add New board'
              width='230px'
              height='50px'
              variant
              onClick={() => setMenuOpen(true)}
            />
            )

        }
      </StyledEmptyImage>
    </>
  );
};

export default EmptyImage;
