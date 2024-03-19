"use client";

import '../styles/defaults.scss';
import styled from 'styled-components';

const Container = ({list, height, width, title, fontsize}) => {
    return(
        <div>
            {title ? <h1>{title}</h1> : null}
            <ul>
                {list ? list.map((item) => {return <li key={Math.random()}>{item}</li>}) : null}
            </ul>
        </div>
    );
};

export default Container;