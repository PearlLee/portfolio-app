import React from 'react';
import { Button, TextField, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Apple, MoreVert, Favorite } from '@material-ui/icons';
import BlindText from './BlindText';
import styles from './style/style.module.scss';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

const cardOptions = ['modify', 'delete'];

export interface ICardProps {
  id: number;
  user_name: string;
  message: string;
  medias: string[];
  like_users: string[];
  likes: number;
  created_at: string;
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
      <Button variant="contained" color="primary" className={style('aa')}>
        <Apple />
        hello world
      </Button>
      <hr />
      <TextField
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      <hr />
      <article className={style('card')}>
        <header>
          <dl>
            <dt>
              <BlindText>writer</BlindText>
            </dt>
            <dd>{props.user_name}</dd>
            <dd>{props.created_at}</dd>
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
          <span className={style('photo')}>
            {props.medias.map((item, index) => (
              <img key={index} src={item} alt="사진" />
            ))}
          </span>
          <dl className={style('info')}>
            <dt>
              <BlindText>discription</BlindText>
            </dt>
            <dd>{props.message}</dd>
          </dl>
          <dl className={style('hashtags')}>
            <dt>
              <BlindText>hashtags</BlindText>
            </dt>
            <dd>
              <button>펭수</button>
              <button>드루와</button>
            </dd>
          </dl>
          <dl className={style('like')}>
            <dt>
              <BlindText>likes</BlindText>
              <Favorite color="secondary" />
            </dt>
            <dd>{props.likes}</dd>
            {props.like_users.length > 0 && (
              <dd className={style('likeUsers')}>
                {props.like_users.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < item.length && ','}
                  </span>
                ))}
              </dd>
            )}
          </dl>
        </section>
      </article>
    </>
  );
}

export default Card;
