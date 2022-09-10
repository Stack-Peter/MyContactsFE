import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";

export default function EditContact({ contact}) {
  return (
    <>
    <PageHeader title={`Editar Pedro Marcos`}/>

    <ContactForm
    buttonLabel="Salvar alterações"
    />
    </>
  )
}
