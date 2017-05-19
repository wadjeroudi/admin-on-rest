import { FileInput } from './FileInput';
import translate from '../../i18n/translate';

export class ImageInput extends FileInput {}

ImageInput.defaultProps.labelMultiple = 'aor.input.file.upload_several';
ImageInput.defaultProps.labelSingle = 'aor.input.file.upload_single';

export default translate(ImageInput);
