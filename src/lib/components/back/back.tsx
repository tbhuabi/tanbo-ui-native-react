import * as React from 'react';
import { CSSProperties, Component } from 'react';
import { AppContext } from '../app/app';

export interface UIBackProps {
    icon?: string;
    readonly children?: any;
}

export class UIBack extends Component<UIBackProps> {
    state = {
        translate: '',
        opacity: ''
    };

    back() {
        window.history.back();
    }

    render() {
        return (
            <div className="ui-back" onClick={this.back}>
                <div className="ui-back-wrap">
                    <div className="ui-back-icon">
                        <AppContext.Consumer>
                            {
                                context => (<div className={context.uiBackIcon}/>)
                            }
                        </AppContext.Consumer>
                    </div>
                    <div
                        className="ui-back-text"
                        style={{
                            transform: this.state.translate,
                            WebkitTransform: this.state.translate,
                            opacity: this.state.opacity
                        } as CSSProperties}
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}