import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.overlay};
`;

export const NavLinks = styled(motion.nav)`
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  padding: 2.4rem;
  border-radius: 5px;
  background: ${(props) => props.theme.white};
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;
