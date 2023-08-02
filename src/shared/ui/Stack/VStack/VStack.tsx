import React, { FC } from 'react';

import Flex, { IFlexProps } from '../Flex/Flex';

type VStackProps = Omit<IFlexProps, 'direction'>;

const VStack: FC<VStackProps> = (props) => {
  return <Flex direction="column" {...props} />;
};

export default VStack;
