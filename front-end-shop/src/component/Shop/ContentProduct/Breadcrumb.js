import React from "react";
import { Breadcrumbs, Link, Typography } from '@material-ui/core'
class BreadCrumb extends React.component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Breadcrumbs>
                <Link>Helo</Link>
                <Typography></Typography>
            </Breadcrumbs>
        )
    }
}

export default BreadCrumb