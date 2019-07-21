import React from 'react';
import styled from 'styled-components';
import Name from '../atoms/Name';
import Icon from '../atoms/Icon';

const ContentItemBlock = styled.span`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  filter: grayscale(100%);
  transition: filter 0.2s ease-out;

  &::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    width: 0rem;
    height: 100px;
    background-color: #489cea;
    border-radius: 0 4px 4px 0;
    transition: width 0.2s ease-out;
  }

  &:hover {
    filter: grayscale(0%);

    &::before {
      width: 4px;
    }
  }
`;

function ContentItem({ name, icon }) {
  return (
    <ContentItemBlock>
      <Name fontSize="2">{name}</Name>
      <Icon icon={icon} size="6.25rem" />
    </ContentItemBlock>
  );
}

export default ContentItem;
