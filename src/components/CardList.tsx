import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleViewImage(url) {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing='40px' >
      {cards?.map((val)=> {
        return (
          <Card data={val} viewImage={() => handleViewImage(val.url)} />
        )
      })}
      </SimpleGrid>
      <ModalViewImage imgUrl={selectedImageUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
