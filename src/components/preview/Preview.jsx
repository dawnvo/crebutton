import React from 'react';
import styled from 'styled-components';
import PreviewSlideBar from './PreviewSlideBar';
import PreviewButton from './PreviewButton';
import PreviewDone from './PreviewDone';

const PreviewBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

function Preview({ text, slideBar, onSlideBarControl }) {
  return (
    <PreviewBlock>
      <PreviewSlideBar slideBar={slideBar} />
      <PreviewButton text={text} onSlideBarControl={onSlideBarControl} />
      <PreviewDone />
    </PreviewBlock>
  );
}

export default Preview;