import React from 'react'
import {Container,Image,Col,Row} from 'react-bootstrap'

function Promotion() {
    return (
        <Container>
        <div className="d-none d-md-block">
        <div style={{height:80}}></div>
        <div className="text-center title">Promotion And Deals</div>
        <div style={{height:10}}></div>
        <Row>
            <Col>
                <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_RBL_DT_1_480x360_11thMar21.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_DBS_DT_2_480x360_11thMar21.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_ICICI_DT_3_480x360_11thMar21.jpg" className="banner"/>
            </Col>
            <Col>
                <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_IndusInd_DT_4_480x360_11thMar21.jpg" className="banner"/>
            </Col>
        </Row>      
        </div>
        </Container>
    )
}

export default Promotion;