import React from 'react';
import Time from './Time';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert, Favorite } from '@material-ui/icons';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import styles from './style/style.module.scss';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

const cardOptions = ['modify', 'delete'];
SwiperCore.use([Pagination]);

export interface ICardProps {
  id: number;
  user_name: string;
  message: string;
  medias: string[];
  like_users: string[];
  likes: number;
  created_at: string;
  tags: string[];
}
function Card(props: ICardProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <article className={style('card')}>
        <header>
          <dl>
            <dt aria-hidden="true" className={style('guideText')}>
              writer
            </dt>
            <dd>{props.user_name}</dd>
            <dd>
              <Time dateToFormat={props.created_at} />
            </dd>
          </dl>
          <span className={style('menu')}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 36 * 2.5,
                  width: '14ch',
                  borderRadius: '.5em',
                },
              }}
            >
              {cardOptions.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </span>
        </header>
        <section className={style('content')}>
          {props.medias.length > 1 && (
            <Swiper pagination={{ clickable: false }} spaceBetween={15} className={style('photo')}>
              {props.medias.map((item, index) => (
                <SwiperSlide key={index.toString()}>
                  <img src={item} alt={'사진' + (index + 1)} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {props.medias.length <= 1 && (
            <span className={style('photo')}>
              <img src={props.medias[0]} alt="사진" />
            </span>
          )}
          <dl className={style('info')}>
            <dt aria-hidden="true" className={style('guideText')}>
              discription
            </dt>
            <dd>{props.message}</dd>
          </dl>
          {props.tags.length > 0 && (
            <dl className={style('hashtags')}>
              <dt aria-hidden="true" className={style('guideText')}>
                hashtags
              </dt>
              <dd>
                {props.tags.map((tag, index) => (
                  <button key={index}>{tag}</button>
                ))}
              </dd>
            </dl>
          )}
          <div className={style('like')}>
            <button className="buttonLike">
              <dl>
                <dt>
                  <Favorite color="secondary" aria-label="likes" />
                </dt>
                <dd className={props.like_users.length === 0 ? 'guideText' : ''}>{props.likes}</dd>
              </dl>
            </button>
            {props.like_users.length > 0 && props.like_users.length <= 3 && (
              <p className="likeUsers">
                {props.like_users.map((item, index) => (
                  <span key={index.toString()}>
                    {item}
                    {index < props.like_users.length - 1 && ', '}
                  </span>
                ))}
                <span>님이</span>
              </p>
            )}
            {props.like_users.length > 3 && (
              <p className="likeUsers">
                {props.like_users.slice(0, 3).map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < props.like_users.length - 1 && ', '}
                  </span>
                ))}
                <span>님 외 {props.like_users.length - 3}명이</span>
              </p>
            )}
          </div>
        </section>
      </article>
    </>
  );
}

export default Card;
