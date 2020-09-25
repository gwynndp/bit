import React from 'react';
import { Newline, Text } from 'ink';

export const WebpackErrors = ({ errors }: any) => (
  <Text>
    {
      errors.map(error =>(
        <>
          <Newline />
          <Text color="red">
            {error}
          </Text>
          <Newline />
        </>
      ))
    }
  </Text>
);
