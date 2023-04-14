import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Brand() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">{' '}
                        React Test App
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Brand;
