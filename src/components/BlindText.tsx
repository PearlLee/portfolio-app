import React from 'react'
import styles from './style/style.module.scss';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

interface IBlindProp {
    children: string;
}

function Blind(props: IBlindProp) {
    const { children } = props;

    return (<span className={style("blind")}>{children}</span>);
}

export default Blind;