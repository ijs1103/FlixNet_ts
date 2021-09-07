import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Text = styled.span<{color: string}>`
  font-size: 1.5rem;
  color: ${props => props.color};
`;

interface IMessageProps {
  text: string,
  color: string
}

const Message: React.FunctionComponent<IMessageProps> = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;
