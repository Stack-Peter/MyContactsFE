import { useState } from "react";
import FromGroup from "../FormGroup";

import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";
import useErrors from "../../hooks/useErrors";

import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange({ target }) {
    setName(target.value);

    if (!target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange({ target }) {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      setError({ field: "email", message: "E-mail inválido" });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange({ target }) {
    setPhone(formatPhone(target.value))
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ name, email, phone, category });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FromGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FromGroup>

      <FromGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          error={getErrorMessageByFieldName("email")}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FromGroup>

      <FromGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FromGroup>

      <FromGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
        </Select>
      </FromGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
