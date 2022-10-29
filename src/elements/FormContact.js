import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormContact = () => {
  return (
    <Form>
      <Form.Group className="mb-1" controlId="input-nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" placeholder="Preencher nome" />
        <Form.Text className="invisible text-danger">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-1" controlId="input-email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Preencher e-mail" />
        <Form.Text className="invisible text-danger">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-1" controlId="input-telefone">
        <Form.Label>Telefone:</Form.Label>
        <Form.Control type="text" placeholder="Preencher telefone" />
        <Form.Text className="invisible text-danger">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-1" controlId="input-mensagem">
        <Form.Label>Mensagem:</Form.Label>
        <Form.Control as="textarea" placeholder="Preencher mensagem" rows="5" />
        <Form.Text className="invisible text-danger">
        </Form.Text>
      </Form.Group>

      <Button className="float-end mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormContact;