import { Children } from 'react';
import css from './section.module.css'

export const Section = ({ title, Children }) => {
  return (
    <section className={css.section}>
      <h1 className={css['section-header']}>{title}</h1>
      {Children}
    </section>
  );
};
