import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statistics__title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(item => (
          <li
            style={{
              backgroundColor: `rgba(${getRandom(0, 230)}, ${getRandom(
                20,
                200
              )}, ${getRandom(0, 240)}, ${getRandom(100, 30)})`,
            }}
            className={css.statlist__item}
            key={item.id}
          >
            <span className={css.statlist__label}>{item.label}</span>
            <span className={css.statlist__percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
