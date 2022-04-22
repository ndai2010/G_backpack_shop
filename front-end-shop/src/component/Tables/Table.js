import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'
export default class Tb extends Component {
    data = [
        {
            id: 1,
            product: "backpack",
            img: "https://ae01.alicdn.com/kf/HTB1ClbBSpXXXXXsXpXXq6xXFXXXb/ZHIERNA-Man-s-Bag-Lady-Backpack-Large-Capacity-Nylon-Packback-College-School-Student-Bag-Travel-Male.jpg_Q90.jpg_.webp",
            customer: "Jonh",
            date: "22 march",
            amount: 200,
            method: "online",
            status: "Pending"
        },
        {
            id: 2,
            product: "backpack",
            img: "https://ae01.alicdn.com/kf/HTB1ClbBSpXXXXXsXpXXq6xXFXXXb/ZHIERNA-Man-s-Bag-Lady-Backpack-Large-Capacity-Nylon-Packback-College-School-Student-Bag-Travel-Male.jpg_Q90.jpg_.webp",
            customer: "Jonh",
            date: "22 march",
            amount: 200,
            method: "online",
            status: "Approved"
        },
        {
            id: 3,
            product: "backpack",
            img: "https://ae01.alicdn.com/kf/HTB1ClbBSpXXXXXsXpXXq6xXFXXXb/ZHIERNA-Man-s-Bag-Lady-Backpack-Large-Capacity-Nylon-Packback-College-School-Student-Bag-Travel-Male.jpg_Q90.jpg_.webp",
            customer: "Jonh",
            date: "22 march",
            amount: 200,
            method: "online",
            status: "Pending"
        },
        {
            id: 4,
            product: "backpack",
            img: "https://ae01.alicdn.com/kf/HTB1ClbBSpXXXXXsXpXXq6xXFXXXb/ZHIERNA-Man-s-Bag-Lady-Backpack-Large-Capacity-Nylon-Packback-College-School-Student-Bag-Travel-Male.jpg_Q90.jpg_.webp",
            customer: "Jonh",
            date: "22 march",
            amount: 200,
            method: "online",
            status: "Pending"
        }
    ]
    render() {
        return (
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='table-cell'>Tracking ID</TableCell>
                            <TableCell className='table-cell'>Product</TableCell>
                            <TableCell className='table-cell'>Customer</TableCell>
                            <TableCell className='table-cell'>Date</TableCell>
                            <TableCell className='table-cell'>Amount</TableCell>
                            <TableCell className='table-cell'>Payment Method</TableCell>
                            <TableCell className='table-cell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className='table-cell'>{item.id}</TableCell>
                                <TableCell className='table-cell'>
                                    <div className='cell-wrapper'>
                                        <img src={item.img} alt='' className='image'></img>
                                        {item.product}
                                    </div>
                                </TableCell>
                                <TableCell className='table-cell'>{item.customer}</TableCell>
                                <TableCell className='table-cell'>{item.date}</TableCell>
                                <TableCell className='table-cell'>{item.amount}</TableCell>
                                <TableCell className='table-cell'>{item.method}</TableCell>
                                <TableCell className='table-cell'>
                                    <span className={`status ${item.status}`}>{item.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
