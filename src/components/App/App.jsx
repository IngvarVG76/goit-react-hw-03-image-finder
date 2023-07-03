import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import fetchImages from 'services/api';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    selectedImage: null,
    modalIsOpen: false,
    totalHits: 0,
    params: {
      key: '36587566-5f2e8f43046e4651407f546e8',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
    },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImagesData();
    }
  }

  fetchImagesData = async () => {
    const { searchQuery, params } = this.state;
    const { per_page } = params;
    this.setState({ isLoading: true });

    try {
      const { hits, totalHits } = await fetchImages(searchQuery, params);

      if (hits.length === 0) {
        toast.warn('No results found');
      } else if (hits.length === per_page) {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits: totalHits,
          params: {
            ...prevState.params,
            page: prevState.params.page + 1,
          },
        }));
      } else {
        this.setState({ images: hits, totalHits: totalHits });
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
      params: { ...this.state.params, page: 1 },
    });
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

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            images={this.state.images}
            totalHits={this.state.totalHits}
            onImageClick={this.handleImageClick}
            fetchMore={this.fetchImagesData}
          />
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
