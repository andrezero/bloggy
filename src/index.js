import './index.scss';

import Slidy from '@andrezero/slidy';

const RETRY_DELAY_MS = 2000;
const API_KEY = 'z38e2piRyY2QazhnTN9cy5Mz7JO1r7139o0Wt2Yo';
const KEY_HEADER = 'x-api-key';

const url =
  'https://qypqvagqkh.execute-api.eu-west-1.amazonaws.com/prod/bicycles';

let loading = false;
let retryTimeout;
let slideCount = 3;
const lastKey = 'f691fc81-f590-402d-b095-e63a2917a04f';

const parent = document.querySelector('#carousel-1');
// const slidy = Slidy.create(parent);

const appendLoading = () => {};

const removeLoading = () => {};

const appendBikes = (items) => {
  slideCount += items.length;
};

const fetchBikes = (lastKey) => {
  clearTimeout(retryTimeout);
  const params = { lastKey };
  fetch(url, params)
    .then((response) => {
      lastKey = response.body.lastKey;
    })
    .catch((err) => {
      console.error(err);
      retryTimeout = setTimeout(() => fetchBikes(lastKey), RETRY_DELAY_MS);
    });
};

const loadMoreBikes = () => {
  loading = true;
  appendLoading();
  fetchBikes().then((response) => {
    loading = false;
    removeLoading();
    appendBikes(response.body.items);
  });
};

slidy.onSlide((index) => {
  if (index >= slideCount - 2 && !loading) {
    loadMoreBikes();
  }
});
