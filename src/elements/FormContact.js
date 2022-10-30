import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Swal from 'sweetalert2';

import TelefoneBrasileiroInput from 'react-telefone-brasileiro';

const FormContact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarComentario = (event) => {
    event.preventDefault();

    if (validarContato()) {
      Swal.fire({
        title: 'Sucesso',
        text: 'Contato enviado com sucesso!',
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: 'Alerta',
        html: 'Falha ao enviar contato!<br />Favor revisar campos.',
        icon: 'warning'
      });
    }
  }

  const validarContato = () => {
    const textoNome = document.getElementById('texto-nome');
    const textoEmail = document.getElementById('texto-email');
    const textoTelefone = document.getElementById('texto-telefone');
    const textoMensagem = document.getElementById('texto-mensagem');

    const inputNome = document.getElementById('input-nome');
    const inputEmail = document.getElementById('input-email');
    const inputTelefone = document.getElementById('input-telefone');
    const inputMensagem = document.getElementById('input-mensagem');

    inputNome.classList.remove('border', 'border-danger');
    inputEmail.classList.remove('border', 'border-danger');
    inputTelefone.classList.remove('border', 'border-danger');
    inputMensagem.classList.remove('border', 'border-danger');

    textoNome.classList.add('invisible');
    textoEmail.classList.add('invisible');
    textoTelefone.classList.add('invisible');
    textoMensagem.classList.add('invisible');

    textoNome.innerText = '';
    textoEmail.innerText = '';
    textoTelefone.innerText = '';
    textoMensagem.innerText = '';

    var limpaTelefone = telefone.replace(/\D/g, '');

    if (nome === '') {
      textoNome.innerText = 'Campo nome é obrigatório!';
      textoNome.classList.remove('invisible');
      inputNome.classList.add('border', 'border-danger');

      return false;
    } else if (email === '') {
      textoEmail.innerText = 'Campo e-mail é obrigatório!';
      textoEmail.classList.remove('invisible');
      inputEmail.classList.add('border', 'border-danger');

      return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      textoEmail.innerText = 'E-mail inválido!';
      textoEmail.classList.remove('invisible');
      inputEmail.classList.add('border', 'border-danger');

      return false;
    } else if (limpaTelefone === '') {
      textoTelefone.innerText = 'Campo telefone é obrigatório!';
      textoTelefone.classList.remove('invisible');
      inputTelefone.classList.add('border', 'border-danger');

      return false;
    } else if (limpaTelefone.length > 11 || limpaTelefone.length < 10) {
      textoTelefone.innerText = 'Telefone inválido!';
      textoTelefone.classList.remove('invisible');
      inputTelefone.classList.add('border', 'border-danger');

      return false;
    } else if (mensagem === '') {
      textoMensagem.innerText = 'Campo mensagem é obrigatório!';
      textoMensagem.classList.remove('invisible');
      inputMensagem.classList.add('border', 'border-danger');
      
      return false;
    }

    return true;
  }

  return (
    <Form onSubmit={enviarComentario} noValidate>
      <Form.Group className="mb-3" controlId="input-nome">
        <Form.Label>Nome: <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" placeholder="Preencher nome" value={nome} onChange={(e) => setNome(e.target.value.trim())} maxLength="50" />
        <Form.Text className="invisible text-danger" id="texto-nome">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="input-email">
        <Form.Label>Email: <span className="text-danger">*</span></Form.Label>
        <Form.Control type="email" placeholder="Preencher e-mail" value={email} onChange={(e) => setEmail(e.target.value.trim())} maxLength="50" />
        <Form.Text className="invisible text-danger" id="texto-email">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-telefone">
        <Form.Label>Telefone: <span className="text-danger">*</span></Form.Label>
        <Form.Control as={TelefoneBrasileiroInput} type="text" placeholder="Preencher telefone"  value={telefone} onChange={(e) => setTelefone(e.target.value.trim())} temDDD separaDDD />
        <Form.Text className="text-danger" id="texto-telefone">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="input-mensagem">
        <Form.Label>Mensagem: <span className="text-danger">*</span></Form.Label>
        <Form.Control as="textarea" placeholder="Preencher mensagem" rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value.trim())} maxLength="1000" />
        <Form.Text className="invisible text-danger" id="texto-mensagem">
        </Form.Text>
      </Form.Group>

      <Button className="float-end" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormContact;