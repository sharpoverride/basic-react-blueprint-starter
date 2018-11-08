import * as React from 'react';
import { Card, Button, Classes } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { History } from 'history';

export interface IAnalyticalProps {
    history: History

}
export class AnalyticalComponent extends React.Component<IAnalyticalProps, {}> {
    public render() {
        return (<Card {...this.state}>
            <h2>
                <Link to="/analytical-application">Analytical applications</Link>
            </h2>
            <p>
                Well done, this was a demo of react router usage
        </p>
            <Button text="Back" className={Classes.BUTTON}
            onClick={() => {
                this.props.history.goBack();
            }}
            />
        </Card>);
    }
}