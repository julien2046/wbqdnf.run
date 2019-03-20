import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import products from './products.json';

class App extends React.PureComponent {
    state = { skip: 0, take: 10 }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    render() {
        return (
            <div>
                <Grid
                    style={{ height: '400px' }}
                    data={products.slice(this.state.skip, this.state.take + this.state.skip)}
                    skip={this.state.skip}
                    take={this.state.take}
                    total={products.length}
                    pageable={true}
                    onPageChange={this.pageChange}
                >
                    <GridColumn field="ProductID" />
                    <GridColumn field="ProductName" title="Product Name" />
                    <GridColumn field="UnitPrice" title="Unit Price" />
                </Grid>
            </div >
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);
