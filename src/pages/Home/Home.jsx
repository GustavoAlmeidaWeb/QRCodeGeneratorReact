import { useState } from 'react';
import { Col, Row, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QRCodeCanvas } from 'qrcode.react';
import { saveAs } from 'file-saver';

const Home = () => {

  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [size, setSize] = useState('128');
  const [nameFile, setNameFile] = useState('qr-code-by-Guss');

  const handleDownload = () => {
    let img = document.querySelector('#qr-code-img');
    img.toBlob((file) => {
      saveAs(file, `${nameFile}.png`);
    });
  }

  return (
    <Row className='bg-light rounded p-4 w-75 m-auto'>
      <Form>
        <h1 className='display-5 text-center mb-4'>QR Code Generator</h1>
        <Form.Group className='mb-4'>
          <Form.Label><FontAwesomeIcon icon="fa-solid fa-link" /> URL</Form.Label>
          <Form.Control type='text' onChange={(e) => setUrl(e.target.value)} value={url || ''} />
        </Form.Group>
        <Row>
          <Form.Group as={Col} md="6" className='mb-4'>
            <Form.Label><FontAwesomeIcon icon="fa-solid fa-palette" /> Cor</Form.Label>
            <Form.Control type='color' onChange={(e) => setColor(e.target.value)} value={color} />
          </Form.Group>
          <Form.Group as={Col} md="6" className='mb-4'>
            <Form.Label><FontAwesomeIcon icon="fa-solid fa-palette" /> Cor de fundo</Form.Label>
            <Form.Control type='color' onChange={(e) => setBgColor(e.target.value)} value={bgColor} />
          </Form.Group>
        </Row>
        <Form.Group className='mb-4'>
          <Form.Label><FontAwesomeIcon icon="fa-solid fa-ruler-combined" /> Tamanho</Form.Label>
          <Form.Range onChange={(e) => setSize(e.target.value)} defaultValue={size} min='100' max='320' />
        </Form.Group>
        <div className="text-center my-4">
          <QRCodeCanvas id='qr-code-img' value={url} fgColor={color} bgColor={bgColor} size={size} />
        </div>
        <Row className='d-flex align-items-end'>
          <Form.Group as={Col} md="10" className='mb-4'>
            <Form.Label><FontAwesomeIcon icon="fa-solid fa-file-signature" /> Nome do arquivo</Form.Label>
            <Form.Control type='text' onChange={(e) => setNameFile(e.target.value)} value={nameFile || ''} />
          </Form.Group>
          <Form.Group as={Col} md="2" className='mb-4'>
            <OverlayTrigger key='top' placement='top' overlay={<Tooltip id='top'>Baixar QR Code</Tooltip>}>
              <Button variant='primary btn-lg' onClick={handleDownload}><FontAwesomeIcon icon="fa-solid fa-download" /></Button>
            </OverlayTrigger>
          </Form.Group>
        </Row>
      </Form>
    </Row>
  )
}

export default Home;
