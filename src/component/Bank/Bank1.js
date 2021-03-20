import React from 'react'
import './Bank1.css';
import {Image, Table} from 'react-bootstrap'

function Promotion1() {
    return (
        
<div align="center" className="table-center">
            <h3>Bank Offers</h3>
            <hr></hr>
            <Table responsive className="table-hover hover-shadow">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_RBL_DT_1_480x360_11thMar21.jpg" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_DBS_DT_2_480x360_11thMar21.jpg" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_ICICI_DT_3_480x360_11thMar21.jpg" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0a24193c-182f-4e68-b44f-5b9981767cba/3ba00237-1361-484a-b19a-00e3a38b8e9b/T1_All_IndusInd_DT_4_480x360_11thMar21.jpg" alt="img"fluid height="220px"/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        )
    }
    
export default Promotion1;