import { Container, Footer, Overlay } from "./styles";
import ReactDOM  from "react-dom";

import Button from "../Button";

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
    <Container danger={danger}>
      <h1>Título do Modal</h1>
      <p>Corpo do modal</p>

      <Footer>
        <button type="button" className="cancel-button">
          Cancelar
        </button>
        <Button danger={danger} type="button">
          Deletar
        </Button>
      </Footer>
    </Container>
  </Overlay>,
  document.getElementById('modal-root'),
  );
}
