import { Children } from 'react';

export const Section = ({ title, Children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {Children}
    </section>
  );
};
