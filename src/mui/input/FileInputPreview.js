import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { pinkA200 } from 'material-ui/styles/colors';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';

const styles = {
    container: {
        display: 'inline-block',
        position: 'relative',
    },
    removeButton: {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        minWidth: '2rem',
        opacity: 0,
    },
    removeButtonHovered: {
        opacity: 1,
    },
};

export class FileInputPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    componentWillUnmount() {
        const { file } = this.props;

        if (file && file.preview && window && window.URL && window.URL.revokeObjectURL) {
            window.URL.revokeObjectURL(file.preview);
        }
    }

    handleMouseOut = () => this.setState({ hovered: false });
    handleMouseOver = () => this.setState({ hovered: true });

    render() {
        const { children, onRemove } = this.props;

        const removeButtonStyle = this.state.hovered ? {
            ...styles.removeButton,
            ...styles.removeButtonHovered,
        } : styles.removeButton;

        return (
            <div
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                style={styles.container}
            >
                <FlatButton
                    style={removeButtonStyle}
                    icon={<RemoveCircle color={pinkA200} />}
                    onClick={onRemove}
                />
                {children}
            </div>
        );
    }
}

FileInputPreview.propTypes = {
    children: PropTypes.element.isRequired,
    file: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
};

FileInputPreview.defaultProps = {
    file: undefined,
};

export default FileInputPreview;
