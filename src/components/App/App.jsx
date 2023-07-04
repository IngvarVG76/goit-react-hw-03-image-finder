import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import fetchImages from 'services/api';
import Button from 'components/Button/Button';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    selectedImage: null,
    modalIsOpen: false,
    totalHits: 0,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImagesData();
    }
  }

  fetchImagesData = async () => {
    this.setState({ isLoading: true });
    const { searchQuery, page } = this.state;

    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);

      if (hits.length === 0) {
        toast.warn('No results found');
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits: totalHits,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = image => {
    this.setState({
      selectedImage: image,
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedImage: null });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />

        {this.state.isLoading && <Loader />}
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        />

        {this.state.images.length < this.state.totalHits && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}
        {this.state.modalIsOpen && (
          <Modal image={this.state.selectedImage} onClose={this.closeModal} />
        )}

        <ToastContainer />
      </div>
    );
  }
}

export default App;
