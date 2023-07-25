import React, { FC } from 'react';
import Flex, { IFlexProps } from '../Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>;

const HStack: FC<HStackProps> = (props) => {
  return <Flex direction="row" {...props} />;
};

export default HStack;
