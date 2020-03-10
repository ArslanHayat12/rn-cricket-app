import styled from "styled-components";
import { Text } from "react-native";

export const TextStyle = styled(Text)`
  color: ${props => props.theme.textColors.warning};
`;
