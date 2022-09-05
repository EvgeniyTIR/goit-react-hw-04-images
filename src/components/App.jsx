import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import * as API from '../services/api';
import { useState, useEffect } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (query.trim().length === 0) {
      return;
    }
    try {
      API.fetchGallery(query, page).then(data => {
        setGallery(prevState => [...prevState, ...data.hits]);
        setTotal(data.totalHits);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }, [page, query]);

  const handleSubmit = query => {
    if (query.trim().length === 0) {
      return;
    }
    setPage(1);
    setQuery(query);
    setGallery([]);
    setLoading(true);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const onClickImage = imageURL => {
    setImageURL(imageURL);
  };

  return (
    <Box display="grid" gridGap={4} pb={4}>
      <Searchbar onSubmit={handleSubmit} />
      {gallery.length > 0 && (
        <>
          <ImageGallery
            galleryList={gallery}
            onClick={onClickImage}
            imageURL={imageURL}
          />
          {total !== gallery.length && (
            <Button text="Load more" onClick={handleLoadMore} />
          )}
        </>
      )}
      {loading && <Loader />}
      <GlobalStyle />
    </Box>
  );
}
