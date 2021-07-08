import {Model} from 'js-abstract-model'

class ContentSection extends Model {

    constructor(data) {
        super(data, [
            {key: 'id'},
            {key: 'name'},
        ]);
    }
}

export default ContentSection;
