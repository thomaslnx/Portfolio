import React, { MutableRefObject, RefObject, forwardRef } from 'react';

import { Preloader, Loading } from './styles';

interface LoaderProps {
  visibility: string;
  display: string;
}

const Loader = (
  { visibility, display }: LoaderProps,
  ref: RefObject<MutableRefObject<null>>
): JSX.Element => {
  console.log('preloadRef:', ref);

  return (
    <Preloader
      ref={ref}
      id="preloader"
      display={display}
      visibility={visibility}
    >
      <Loading id="loader" />
    </Preloader>
  );
};

export default forwardRef<React.MutableRefObject<null>, LoaderProps>(Loader);
