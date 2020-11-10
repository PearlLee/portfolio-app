import React from 'react';
import { Button, TextField, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Apple, MoreVert } from '@material-ui/icons';
import BlindText from './BlindText';
import styles from './style/style.module.scss';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

const cardOptions = [
    'modify',
    'delete'
];

function Card() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (<>
        <Button variant="contained" color="primary" className={style('aa')}><Apple />hello world</Button>
        <hr />
        <TextField
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <hr />
        <article className={style("card")}>
            <header>
                <dl>
                <dt><BlindText>writer</BlindText></dt>
                <dd>songeeya</dd>
                <dd>1시간 전</dd>
                </dl>
                <span className={style("menu")}>
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
            <section className={style("content")}>
                <span className={style("photo")}>
                    <img src="https://economychosun.com/query/upload/322/20191103221129_fgyjnwts.jpg" alt="사진" />
                </span>
                <dl className={style("info")}>
                <dt><BlindText>discription</BlindText></dt>
                <dd>more details here</dd>
                </dl>
                <dl className={style("hashtags")}>
                <dt><BlindText>hashtags</BlindText></dt>
                <dd><a>펭수</a><a>드루와</a></dd>
                </dl>
            </section>
        </article>
    </>);
}

export default Card;
