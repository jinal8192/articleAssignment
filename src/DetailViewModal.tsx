import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function DetailViewModal(props: any) {
    return (
        <Modal
            show={props.params.show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    List of All the Tracks
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {props?.params?.album?.tracks?.track?.map((item) => {
                        return (
                            <Row>
                                <Col md={4}>
                                    <h6>{item.name}</h6>
                                </Col>
                                <Col xs={6} md={4}>
                                    <a href={item.url} target="_blank">{item.url}</a>
                                </Col>
                            </Row>
                        );
                    })}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailViewModal;