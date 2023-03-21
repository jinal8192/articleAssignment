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
                                <div className="d-flex justify-content-between border border-top-0">
                                    <h6> {item.name} </h6>
                                    <div style={{flex: "0 0 80%"}}> <a href={item.url} target="_blank">{item.url}</a></div>
                                </div>
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