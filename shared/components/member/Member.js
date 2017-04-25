import React, { Component, PropTypes } from 'react';
import s from './Member.scss';

export default class Member extends Component {

  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    rank: PropTypes.string,
    outOfAction: PropTypes.bool,
  }

  render() {
    const { children, name, rank, outOfAction } = this.props;

    this.stats = [4, 3, 4, 3, 3, 1, 3, 1, 8];

    return (
      <div className={s(s.member, rank, { outOfAction })}>
        <div className={s.member__thumbnail} />
        <div className={s.member__info}>
          <div className={s.member__name}>{name}</div>
          <div className={s.member__stats}>
            { this.stats.map((stat, i) => (
              <div className={s.stat}>
                <div className={s.stat__label} />
                <div className={s.stat__field}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
