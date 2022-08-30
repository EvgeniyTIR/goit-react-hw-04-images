import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import * as API from '../services/api';
import { Component } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    total: null,
    loading: false,
    imageURL: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        API.fetchGallery({
          query: this.state.query,
          page: this.state.page,
        }).then(data =>
          this.setState(prevState => {
            return {
              gallery: [...prevState.gallery, ...data.hits],
              loading: false,
              total: data.totalHits,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
  }

  handleSubmit = query => {
    if (query.trim().length === 0 || query === this.state.query) {
      return;
    }
    this.setState({
      page: 1,
      query: query,
      gallery: [],
      loading: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, loading: true };
    });
  };

  onClickImage = imageURL => {
    this.setState({ imageURL });
  };

  render() {
    const { gallery, imageURL, total } = this.state;

    return (
      <Box display="grid" gridGap={4} pb={4}>
        <Searchbar onSubmit={this.handleSubmit} />
        {gallery.length > 0 && (
          <>
            <ImageGallery
              galleryList={gallery}
              onClick={this.onClickImage}
              imageURL={imageURL}
            />
            {total !== gallery.length && (
              <Button text="Load more" onClick={this.handleLoadMore} />
            )}
          </>
        )}
        {this.state.loading && <Loader />}
        <GlobalStyle />
      </Box>
    );
  }
}
