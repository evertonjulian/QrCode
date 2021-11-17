import React, {useState, useEffect} from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';
import Codigo from '../codigo/codigo';

const Contact = () => {
  
  const [showQrCode, setShowQrCode] = useState(false);
  const [valorQrCode, setValor] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [produto, setProduto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [peso, setPeso] = useState("");
  const [lote, setLote] = useState("");

  useEffect(() => {
      setShowQrCode(false);
      setValor(`${cnpj}_${empresa}_${produto}_${telefone}_${peso}_${lote}`);
  }, [cnpj, empresa, produto, telefone, peso, lote])
  
  return (
    <Row>      
      <Col offset="m2" m={8} s={12}>          
          <Card title="Gerador de QR CODE">
            <Row>
                <Input value={cnpj} onChange={(e) => setCnpj(e.target.value)} label="CNPJ" s={6} />
                <Input value={empresa} onChange={(e) => setEmpresa(e.target.value)} label="Empresa" s={6} />
                <Input value={produto} onChange={(e) => setProduto(e.target.value)} label="Produto" s={6} />
                <Input value={telefone} onChange={(e) => setTelefone(e.target.value)} label="Telefone" s={6} />
                <Input value={peso} onChange={(e) => setPeso(e.target.value)} label="Peso" s={6} />
                <Input value={lote} onChange={(e) => setLote(e.target.value)} label="Lote" s={6} />
              <Col s={12} m={12}>
                <Button 
                  waves='light'
                  className="right grey darken-2"
                  onClick={() => setShowQrCode(true)}
                >
                  Gerar QR.
                </Button>
              </Col>
            </Row>
          </Card>
          {showQrCode && <Codigo valor={valorQrCode}/>}
      </Col>
    </Row>
)};

export default Contact;