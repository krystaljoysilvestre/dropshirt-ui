import styled from "styled-components";
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  ${props => props.type === 'primary' && `
    border: none;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    color: #fff;
    font-weight: 300;
    font-size: 14px !important;
  `}

  ${props => props.gradient && `
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
    background-origin: border-box !important;
    border: 1px solid transparent !important;
    box-shadow: 1000px 0 #ffffff inset !important;

    span {
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
      height: inherit;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.001);

      &:hover, &:active, &:focus {
        background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
          ),
          linear-gradient(108.41deg, #0085ff 0%, #ff00ff 100%) !important;
        height: inherit;
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.001) !important;
      }
    }
  `}

  ${props => props.type === 'text' && `
    color: ${props.theme.text.gray};
    font-weight: 300;
    border-image: none !important;

    &:hover, &:active, &:focus {
      background: none;
    }
  `}
`;
