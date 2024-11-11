import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWViZjc1MGM4MTAxYmYyZGNjOWQ2ZjA5N2MwNjg2YyIsIm5iZiI6MTczMTM1NDU1Ni45ODE0MzM5LCJzdWIiOiI2NzMyNWFkYzBkNzU4MDQwZWI0YjI2ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Dluoe7xiuQXHwxzVcw86DC_WV6k1gCLVZGWk9-i3McY`,
  },
});

export default api;
