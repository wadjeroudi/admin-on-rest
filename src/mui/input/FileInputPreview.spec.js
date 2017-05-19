import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { FileInputPreview } from './FileInputPreview';

describe('<ImageInputPreview />', () => {
    it('should call `onRemove` prop when clicking on remove button', () => {
        const onRemoveSpy = sinon.spy();

        const wrapper = shallow((
            <FileInputPreview onRemove={onRemoveSpy}>
                <div>Child</div>
            </FileInputPreview>
        ));

        const removeButton = wrapper.find('FlatButton');
        removeButton.simulate('click');

        assert.equal(onRemoveSpy.args.length, 1);
    });

    it('should render passed children', () => {
        const wrapper = shallow((
            <FileInputPreview>
                <div id="child">Child</div>
            </FileInputPreview>
        ));

        const child = wrapper.find('#child');
        assert.equal(child.length, 1);
    });
});
