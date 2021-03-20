import React from 'react'
import './MostPopular.css';
import {Image, Table} from 'react-bootstrap'

function MostPopular() {
    return (
        
<div align="center" className="table-center">
            <h3>Most Popular</h3>
            <hr></hr>
            <Table responsive className="table-hover hover-shadow">
                <tbody align="center">
                    <tr>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/sp/2103016_masks-gloves/?nc=Most%20Popular&t_pg=mar-hompage-t1&t_p=Mar-T1_2021&t_s=Most%20Popular&t_pos_sec=4&t_pos_item=1&t_ch=desktop" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/sp/2103017_ice-creams/?nc=Most%20Popular&t_pg=mar-hompage-t1&t_p=Mar-T1_2021&t_s=Most%20Popular&t_pos_sec=4&t_pos_item=2&t_ch=desktop" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/sp/2103018_summer-fresh-face/?nc=Most%20Popular&t_pg=mar-hompage-t1&t_p=Mar-T1_2021&t_s=Most%20Popular&t_pos_sec=4&t_pos_item=3&t_ch=desktop" alt="img"fluid height="220px"/></a>
                        </td>
                        <td>
                            <a href="home"><Image src="https://www.bigbasket.com/sp/2103020_holi-colours/?nc=Most%20Popular&t_pg=mar-hompage-t1&t_p=Mar-T1_2021&t_s=Most%20Popular&t_pos_sec=4&t_pos_item=4&t_ch=desktop" alt="img"fluid height="220px"/></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        )
    }
    
export default MostPopular;