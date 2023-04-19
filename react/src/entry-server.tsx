import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Location } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
}
