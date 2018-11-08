import * as React from 'react';

export interface ILayoutProps {
}

export class Layout extends React.Component<ILayoutProps, {}> {
    constructor(props: ILayoutProps){
        super(props);
    }

    public render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}